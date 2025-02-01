import SweetAlertModal from "@/Components/SweetAlert";
import Guest from "@/Layouts/GuestLayout";
import { Button } from "@headlessui/react";
import { Head, usePage } from "@inertiajs/react";
import axios from "axios";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { useState } from "react";

interface Cicilan {
    id: number;
    cicilan_ke: string;
    jumlah: number;
    status: string;
    due_date: string;
    booking: {
        paket: {
            nama: string;
        };
    };
}

interface SnapResult {
    transaction_status: string;
    order_id: string;
    gross_amount: string;
    payment_type: string;
    transaction_time: string;
    fraud_status?: string;
    va_numbers?: { bank: string; va_number: string }[];
}

export default function PembayaranPage() {
    const { props } = usePage();
    const data = props.pembayaran as Cicilan[];

    const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
    const [snapToken, setSnapToken] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // State modal
    const [modalMessage, setModalMessage] = useState("");
    const [modalType, setModalType] = useState("success");
    const [selectedCicilan, setSelectedCicilan] = useState<Cicilan | null>(
        null
    );
    const handleCicilanSelect = (cicilan: Cicilan) => {
        setSelectedCicilan(cicilan);
    };

    console.log(data);
    const formatCurrency = (amount: number | string) => {
        const validAmount =
            typeof amount === "number" ? amount : parseFloat(amount);
        if (isNaN(validAmount)) return "Rp 0"; // Default jika data tidak valid
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(validAmount);
    };
    const formatTanggal = (tanggal: string) => {
        const parsedDate = new Date(tanggal);
        return isNaN(parsedDate.getTime())
            ? "Tanggal tidak valid"
            : format(parsedDate, "dd MMMM yyyy", { locale: id });
    };

    const handleConfirmOrder = async (
        e: React.FormEvent,
        totalBayar: number
    ) => {
        e.preventDefault();
        if (!selectedCicilan) {
            alert("Pilih proposal terlebih dahulu.");
            return;
        }

        try {
            const response = await axios.post("/pembayaran/bayar", {
                cicilan_id: selectedCicilan.id,
                payment_method: paymentMethod,
                total_bayar: totalBayar,
            });
            const token = response.data.snapToken;

            if (token) {
                setSnapToken(token);
                window.snap.pay(token, {
                    // Callbacks
                    onSuccess: async function (result: SnapResult) {
                        try {
                            // await axios.post("/pembayaran/update-project", {
                            //     cicilan_id: selectedCicilan.id,
                            // });
                            setModalMessage(
                                "Pembayaran berhasil"
                            );
                            setIsModalOpen(true);
                        } catch (error) {
                            console.error("Error updating project:", error);
                            setModalMessage(
                                "Pembayaran berhasil, tetapi terjadi kesalahan "
                            );
                            setIsModalOpen(true);
                        }
                    },
                    onPending: (result: SnapResult) => {
                        setModalMessage("Menunggu pembayaran...");
                        setIsModalOpen(true);
                    },
                    onError: (result: SnapResult) => {
                        setModalMessage("Terjadi kesalahan dalam pembayaran.");
                        setIsModalOpen(true);
                    },
                    onClose: () => {
                        setModalMessage("Transaksi dibatalkan.");
                        setIsModalOpen(true);
                    },
                });
            }
        } catch (error) {
            console.error("Error creating transaction:", error);
            alert("Gagal memproses pembayaran.");
        }
    };

    return (
        <Guest>
            <Head title="Pembayaran" />

            <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <div className="md:col-span-2 bg-white shadow-lg rounded-lg p-6">
                            <h1>Pilih Cicilan</h1>

                            <div className="space-y-4">
                                {data.map((item) => (
                                    <div
                                        key={item.id}
                                        className={`flex items-center justify-between rounded-md border p-4 ${
                                            item.status === "Dibayar"
                                                ? "cursor-not-allowed bg-gray-200 dark:bg-gray-800"
                                                : selectedCicilan?.id ===
                                                  item.id
                                                ? "border-red-500 bg-red-100 dark:bg-gray-700"
                                                : "border-gray-200"
                                        }`}
                                        onClick={() =>
                                            item.status !== "Dibayar" &&
                                            handleCicilanSelect(item)
                                        }
                                    >
                                        <div>
                                            <h4 className="text-lg font-semibold">
                                                {item.booking.paket.nama}
                                            </h4>
                                            <p className="text-xs text-gray-500">
                                                Cicilan Ke: {item.cicilan_ke}
                                            </p>
                                            <p className="mt-3 text-lg font-semibold text-gray-800 dark:text-gray-500">
                                                {formatCurrency(item.jumlah)}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            {/* Status */}
                                            <span
                                                className={`rounded-md px-2 py-1 text-sm font-medium ${
                                                    item.status === "Dibayar"
                                                        ? "bg-green-100 text-green-600"
                                                        : "bg-red-100 text-red-600"
                                                }`}
                                            >
                                                {item.status}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="md:col-span-1 bg-white shadow-lg rounded-lg p-6">
                            <h1>Detail Pembayaran</h1>
                            {selectedCicilan && (
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="mb-1 text-lg font-semibold">
                                            {selectedCicilan.booking.paket.nama}
                                        </h4>
                                        <p className="mb-4 text-xs text-gray-500">
                                            Cicilan Ke:{" "}
                                            {selectedCicilan.cicilan_ke}
                                        </p>
                                        <p className="mb-4 text-sm text-gray-600">
                                            Jatuh Tempo:{" "}
                                            {formatTanggal(
                                                selectedCicilan.due_date
                                            )}
                                        </p>
                                        <p className="mb-2">
                                            <div className="flex justify-between">
                                                <span className="font-semibold">
                                                    Jumlah Cicilan:
                                                </span>{" "}
                                                {formatCurrency(
                                                    selectedCicilan.jumlah
                                                )}
                                            </div>
                                        </p>
                                        <p className="mb-2 text-lg font-bold">
                                            <div className="flex justify-between">
                                                <span className="font-semibold">
                                                    Total Bayar:
                                                </span>{" "}
                                                {formatCurrency(
                                                    selectedCicilan.jumlah
                                                )}
                                            </div>
                                        </p>
                                    </div>
                                    <Button
                                        className="mt-4 w-full rounded-lg text-white p-2 bg-red-500 hover:bg-red-600"
                                        onClick={(e) =>
                                            handleConfirmOrder(
                                                e,
                                                selectedCicilan.jumlah
                                            )
                                        }
                                    >
                                        Bayar Sekarang
                                    </Button>
                                </div>
                            )}
                        </div>

                        <SweetAlertModal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            type={modalType}
                            message={modalMessage}
                        />
                    </div>
                </div>
            </section>
        </Guest>
    );
}
