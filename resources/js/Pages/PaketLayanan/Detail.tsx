import Guest from "@/Layouts/GuestLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import { useState } from "react";

interface Paket {
    id: number;
    nama: string;
    kategori: { nama: string };
    gambar: string;
    deskripsi: string;
    harga_per_hari: number;
}

export default function PaketLayananDetailPage() {
    const { props } = usePage();
    const pakets = props.paket as Paket;

    const [formData, setFormData] = useState({
        tanggal_dari: "",
        tanggal_sampai: "",
        jam_dari: "",
        jam_sampai: "",
        pembayaran_kali: 1,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleCheckout = () => {
        // Logic untuk proses checkout
        console.log("Checkout Data:", formData);
        alert("Checkout berhasil!");
    };

    return (
        <Guest>
            <Head title={pakets.nama} />

            <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                    <div className="container mx-auto px-4 py-8">
                        <h1 className="text-3xl font-bold mb-8">
                            Detail {pakets.nama}
                        </h1>
                        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center">
                            {/* Gambar di Kiri */}
                            <div className="w-full md:w-1/2 flex justify-start">
                                <img
                                    src={pakets.gambar}
                                    alt={pakets.nama}
                                    className="w-80 h-80 rounded-lg object-cover shadow-md"
                                />
                            </div>

                            {/* Detail di Kanan */}
                            <div className="w-full md:w-1/2">
                                <h2 className="text-2xl font-semibold mb-4">
                                    {pakets.nama}
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    {pakets.deskripsi}
                                </p>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-bold">
                                            Harga:
                                        </span>
                                        <span className="text-lg font-bold">
                                            Rp{" "}
                                            {pakets.harga_per_hari.toLocaleString()}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-bold">
                                            Durasi:
                                        </span>
                                        <span className="text-lg font-bold">
                                            12 Jam
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-bold">
                                            Kategori:
                                        </span>
                                        <span className="text-lg font-bold">
                                            {pakets.kategori.nama}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex justify-end mt-8">
                                    <Link
                                        href={route(
                                            "paket-layanan.booking",
                                            pakets.id
                                        )}
                                        className="rounded-lg p-3 text-white bg-red-700 hover:bg-red-800 transition duration-300"
                                        // onClick={handleCheckout}
                                    >
                                        Booking Sekarang
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Guest>
    );
}
