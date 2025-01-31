// TambahData.tsx
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage } from "@inertiajs/react";


interface Kategori {
    id: number;
    nama: string;
}

export default function TambahData() {
    const {props} = usePage();
    const kategori = props.kategori as Kategori;

    const { data, setData, post, reset, errors } = useForm({
        nama: kategori.nama,
       
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("kategori-paket.update", kategori.id));
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
                        className="grid grid-cols-1 gap-6"
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
