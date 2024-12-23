import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function TambahPenduduk() {
    const { data, setData, post, errors } = useForm({
        nik: "",
        nama: "",
        tanggal_lahir: "",
        jenis_kelamin: "",
        alamat: "",
        status_keluarga: "",
        agama: "",
        pendidikan: "",
        pekerjaan: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("penduduk.store"));
    };

    return (
        <AuthenticatedLayout>
            <Head title={`Tambah Data`} />

            <div className="mb-8 ml-3">
                <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-200">
                    Tambah Data Penduduk
                </h2>
            </div>

            <div className="flex flex-col gap-10 ">
                <div className="rounded-xl border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                    <div className="max-w-full overflow-x-auto">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="nik"
                                        className="mb-2.5 block text-black dark:text-white"
                                    >
                                        NIK
                                    </label>
                                    <input
                                        type="text"
                                        id="nik"
                                        value={data.nik}
                                        onChange={(e) =>
                                            setData("nik", e.target.value)
                                        }
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                    {errors.nik && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.nik}
                                        </p>
                                    )}
                                </div>
                                
                                <div>
                                    <label
                                        htmlFor="nama"
                                        className="mb-2.5 block text-black dark:text-white"
                                    >
                                        Nama
                                    </label>
                                    <input
                                        type="text"
                                        id="nama"
                                        value={data.nama}
                                        onChange={(e) =>
                                            setData("nama", e.target.value)
                                        }
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                    {errors.nama && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.nama}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="tanggal_lahir"
                                        className="mb-2.5 block text-black dark:text-white"
                                    >
                                        Tanggal Lahir
                                    </label>
                                    <input
                                        type="date"
                                        id="tanggal_lahir"
                                        value={data.tanggal_lahir}
                                        onChange={(e) =>
                                            setData(
                                                "tanggal_lahir",
                                                e.target.value
                                            )
                                        }
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                    {errors.tanggal_lahir && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.tanggal_lahir}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="jenis_kelamin"
                                        className="mb-2.5 block text-black dark:text-white"
                                    >
                                        Jenis Kelamin
                                    </label>
                                    <select
                                        id="jenis_kelamin"
                                        value={data.jenis_kelamin}
                                        onChange={(e) =>
                                            setData(
                                                "jenis_kelamin",
                                                e.target.value
                                            )
                                        }
                                        className="w-full rounded border-[1.5px] h-13 border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    >
                                        <option value="Laki-laki">
                                            Laki-laki
                                        </option>
                                        <option value="Perempuan">
                                            Perempuan
                                        </option>
                                    </select>
                                    {errors.jenis_kelamin && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.jenis_kelamin}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="alamat"
                                        className="mb-2.5 block text-black dark:text-white"
                                    >
                                        Alamat
                                    </label>
                                    <input
                                        type="text"
                                        id="alamat"
                                        value={data.alamat}
                                        onChange={(e) =>
                                            setData("alamat", e.target.value)
                                        }
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                    {errors.alamat && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.alamat}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="status_keluarga"
                                        className="mb-2.5 block text-black dark:text-white"
                                    >
                                        Status Keluarga
                                    </label>
                                    <input
                                        type="text"
                                        id="status_keluarga"
                                        value={data.status_keluarga}
                                        onChange={(e) =>
                                            setData(
                                                "status_keluarga",
                                                e.target.value
                                            )
                                        }
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                    {errors.status_keluarga && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.status_keluarga}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="agama"
                                        className="mb-2.5 block text-black dark:text-white"
                                    >
                                        Agama
                                    </label>
                                    <input
                                        type="text"
                                        id="agama"
                                        value={data.agama}
                                        onChange={(e) =>
                                            setData("agama", e.target.value)
                                        }
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                    {errors.agama && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.agama}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="pendidikan"
                                        className="mb-2.5 block text-black dark:text-white"
                                    >
                                        Pendidikan
                                    </label>
                                    <input
                                        type="text"
                                        id="pendidikan"
                                        value={data.pendidikan}
                                        onChange={(e) =>
                                            setData(
                                                "pendidikan",
                                                e.target.value
                                            )
                                        }
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                    {errors.pendidikan && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.pendidikan}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="pekerjaan"
                                        className="mb-2.5 block text-black dark:text-white"
                                    >
                                        Pekerjaan
                                    </label>
                                    <input
                                        type="text"
                                        id="pekerjaan"
                                        value={data.pekerjaan}
                                        onChange={(e) =>
                                            setData("pekerjaan", e.target.value)
                                        }
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                    {errors.pekerjaan && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.pekerjaan}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="mt-6 justify-end flex">
                                <button
                                    type="submit"
                                    className="px-4 py-2 mb-6 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 focus:ring focus:ring-blue-300"
                                >
                                    Simpan
                                </button>
                                
                            </div>
                        </form>
                    </div>
                </div>
                {/* Tombol Back
                <div className="mt-1">
                    <Link
                        href="/penduduk"
                        className="inline-block px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        Kembali
                    </Link>
                </div> */}
            </div>
        </AuthenticatedLayout>
    );
}
