// TambahData.tsx
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage } from "@inertiajs/react";

interface Kategori {
    id: number;
    nama: string;
}

interface Paket {
    nama: string;
    kategori_id: number;
    deskripsi: string;
    gambar: File | null;
    harga_per_hari: string;
    is_active: boolean;
}

export default function TambahData({ kategori }: { kategori: Kategori[] }) {
    const { props } = usePage();
    const pakets = props.paket as Paket;

    const { data, setData, post, reset, errors } = useForm({
        nama: pakets.nama,
        kategori_id: pakets.kategori_id,
        deskripsi: pakets.deskripsi,
        gambar: null,
        harga_per_hari: pakets.harga_per_hari,
        is_active: true,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("manajemen-paket.store"));
    };

    return (
        <AuthenticatedLayout>
            <Head title="Edit Data" />

            <div className="mb-8 ml-3">
                <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-200">
                    Edit Data
                </h2>
            </div>

            <div className="flex flex-col gap-10">
                <div className="rounded-xl border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                    <form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-2 gap-6"
                    >
                        <div>
                            <label className="mb-2.5 block font-medium text-black dark:text-white">
                                Nama
                            </label>
                            <input
                                type="text"
                                className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                value={data.nama}
                                onChange={(e) =>
                                    setData("nama", e.target.value)
                                }
                            />
                            {errors.nama && (
                                <div className="text-red-500 text-sm">
                                    {errors.nama}
                                </div>
                            )}
                        </div>

                        {/* Dropdown Kategori */}
                        <div>
                            <label className="mb-2.5 block font-medium text-black dark:text-white">
                                Kategori
                            </label>
                            <select
                                className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                value={data.kategori_id}
                                onChange={(e) =>
                                    setData("kategori_id", Number(e.target.value))
                                }
                            >
                                {kategori.map((item, index) => (
                                    <option key={index} value={item.id}>
                                        {item.nama}
                                    </option>
                                ))}
                            </select>
                            {errors.kategori_id && (
                                <div className="text-red-500 text-sm">
                                    {errors.kategori_id}
                                </div>
                            )}
                        </div>

                        <div>
                            <label className="mb-2.5 block font-medium text-black dark:text-white">
                                Gambar
                            </label>
                            <input
                                type="file"
                                className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                onChange={(e) =>
                                    setData(
                                        "gambar",
                                        e.target.files?.[0] || null
                                    )
                                }
                            />
                            {errors.gambar && (
                                <div className="text-red-500 text-sm">
                                    {errors.gambar}
                                </div>
                            )}
                        </div>

                        <div>
                            <label className="mb-2.5 block font-medium text-black dark:text-white">
                                Harga per Hari (Rp)
                            </label>
                            <input
                                type="number"
                                className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                value={data.harga_per_hari}
                                onChange={(e) =>
                                    setData("harga_per_hari", e.target.value)
                                }
                            />
                            {errors.harga_per_hari && (
                                <div className="text-red-500 text-sm">
                                    {errors.harga_per_hari}
                                </div>
                            )}
                        </div>

                        <div className="col-span-2">
                            <label className="mb-2.5 block font-medium text-black dark:text-white">
                                Status Aktif
                            </label>
                            <div
                                className="relative inline-flex items-center cursor-pointer"
                                onClick={() =>
                                    setData("is_active", !data.is_active)
                                }
                            >
                                <div
                                    className={`w-11 h-6 rounded-full transition-colors duration-300 ${
                                        data.is_active
                                            ? "bg-indigo-600"
                                            : "bg-gray-300"
                                    }`}
                                ></div>
                                <div
                                    className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300 transform ${
                                        data.is_active
                                            ? "translate-x-5"
                                            : "translate-x-0"
                                    }`}
                                ></div>
                            </div>
                            <span className="ml-3 text-sm text-gray-700">
                                {data.is_active ? "Aktif" : "Tidak Aktif"}
                            </span>
                        </div>

                        <div className="col-span-2">
                            <label className="mb-2.5 block font-medium text-black dark:text-white">
                                Deskripsi
                            </label>
                            <textarea
                                className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                value={data.deskripsi}
                                onChange={(e) =>
                                    setData("deskripsi", e.target.value)
                                }
                            ></textarea>
                            {errors.deskripsi && (
                                <div className="text-red-500 text-sm">
                                    {errors.deskripsi}
                                </div>
                            )}
                        </div>

                        <div className="col-span-2 flex justify-end mb-4">
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 bg-red-700 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 focus:bg-red-700 active:bg-indigo-900 focus:outline-none focus:ring focus:ring-indigo-300 disabled:opacity-25 transition"
                            >
                                Simpan
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
