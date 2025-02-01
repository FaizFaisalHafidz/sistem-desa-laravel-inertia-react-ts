import Guest from "@/Layouts/GuestLayout";
import { Button } from "@headlessui/react";
import { Head, useForm, usePage } from "@inertiajs/react";

interface Paket {
    id: number;
    nama: string;
    kategori: { nama: string };
    gambar: string;
    deskripsi: string;
    harga_per_hari: number;
}

export default function BookingPage({ user }: { user?: { name: string } }) {
    const { props } = usePage();
    const pakets = props.paket as Paket;

    const {
        data: formData,
        setData,
        post,
        processing,
    } = useForm({
        cicilan: 1,
        tanggal_dari: "",
        tanggal_sampai: "",
        jam_dari: "",
        jam_sampai: "",
        alamat: "",
        no_telp: "",
    });

    const handleBooking = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("paket-layanan.booking", pakets.id)); // Pastikan route ini sesuai dengan backend Laravel
    };

    return (
        <Guest user={user}>
            <Head title="Booking" />

            <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                    <div className="container mx-auto px-4 py-8">
                        <h1 className="text-3xl font-bold mb-8 text-center">
                            Booking
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Card Paket Terpilih */}
                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <h2 className="text-2xl font-semibold mb-4">
                                    Paket yang Dipilih
                                </h2>
                                <div className="flex flex-col items-center">
                                    <img
                                        src={pakets.gambar}
                                        alt={pakets.nama}
                                        className="w-80 h-80 rounded-lg object-cover shadow-md mb-4"
                                    />
                                    <h3 className="text-xl font-semibold">
                                        {pakets.nama}
                                    </h3>
                                    <p className="text-gray-700 text-center">
                                        {pakets.deskripsi}
                                    </p>
                                    <span className="text-lg font-bold mt-2">
                                        Rp{" "}
                                        {pakets.harga_per_hari.toLocaleString()}
                                    </span>
                                </div>
                            </div>

                            {/* Card Input Booking */}
                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <h2 className="text-2xl font-semibold mb-4">
                                    Detail Booking
                                </h2>
                                <div className="space-y-4">
                                    <form onSubmit={handleBooking}>
                                        <div className="mb-4">
                                            <label className=" mb-2 block text-sm font-medium text-gray-700">
                                                Tanggal Dari
                                            </label>
                                            <input
                                                type="date"
                                                name="tanggal_dari"
                                                value={formData.tanggal_dari}
                                                onChange={(e) =>
                                                    setData(
                                                        "tanggal_dari",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full border border-gray-300 rounded-md shadow-sm p-2"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-gray-700">
                                                Tanggal Sampai
                                            </label>
                                            <input
                                                type="date"
                                                name="tanggal_sampai"
                                                value={formData.tanggal_sampai}
                                                onChange={(e) =>
                                                    setData(
                                                        "tanggal_sampai",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full border border-gray-300 rounded-md shadow-sm p-2"
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 mb-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Jam Dari
                                                </label>
                                                <input
                                                    type="time"
                                                    name="jam_dari"
                                                    value={formData.jam_dari}
                                                    onChange={(e) =>
                                                        setData(
                                                            "jam_dari",
                                                            e.target.value
                                                        )
                                                    }
                                                    className="w-full border border-gray-300 rounded-md shadow-sm p-2"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Jam Sampai
                                                </label>
                                                <input
                                                    type="time"
                                                    name="jam_sampai"
                                                    value={formData.jam_sampai}
                                                    onChange={(e) =>
                                                        setData(
                                                            "jam_sampai",
                                                            e.target.value
                                                        )
                                                    }
                                                    className="w-full border border-gray-300 rounded-md shadow-sm p-2"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-gray-700">
                                                Alamat
                                            </label>
                                            <input
                                                type="text"
                                                name="alamat"
                                                value={formData.alamat}
                                                onChange={(e) =>
                                                    setData(
                                                        "alamat",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full border border-gray-300 rounded-md shadow-sm p-2"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-gray-700">
                                                No. Telepon
                                            </label>
                                            <input
                                                type="text"
                                                name="no_telp"
                                                value={formData.no_telp}
                                                onChange={(e) =>
                                                    setData(
                                                        "no_telp",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full border border-gray-300 rounded-md shadow-sm p-2"
                                            />
                                        </div>
                                        <div className="mb-8">
                                            <label className="block text-sm font-medium text-gray-700">
                                                Pembayaran
                                            </label>
                                            <select
                                                name="pembayaran_kali"
                                                value={formData.cicilan}
                                                onChange={(e) =>
                                                    setData(
                                                        "cicilan",
                                                        parseInt(e.target.value)
                                                    )
                                                }
                                                className="w-full border border-gray-300 rounded-md shadow-sm p-2"
                                            >
                                                <option value={1}>
                                                    1 Kali
                                                </option>
                                                <option value={2}>
                                                    2 Kali
                                                </option>
                                            </select>
                                        </div>
                                        <Button
                                            type="submit"
                                            disabled={processing}
                                            className="w-full bg-red-700 text-white py-2 px-4 rounded-md hover:bg-red-800 transition duration-300"
                                            // onClick={handleBooking}
                                        >
                                            Pesan Sekarang
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Guest>
    );
}
