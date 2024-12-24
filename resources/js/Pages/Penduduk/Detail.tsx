import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";

interface AuthProps {
    user: {
        id: number;
        name: string;
        email: string;
    };
}

interface Penduduk {
    id: number;
    nik: string;
    nama: string;
    tanggal_lahir: string;
    jenis_kelamin: string;
    alamat: string;
    status_keluarga: string;
    agama: string;
    pendidikan: string;
    pekerjaan: string;
    created_at?: string;
    updated_at?: string;
}

interface PageProps {
    auth: AuthProps;
    penduduk: Penduduk;
    [key: string]: any;
}

function formatTanggal(tanggal: string): string {
    const date = new Date(tanggal);
    return new Intl.DateTimeFormat("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(date);
}


export default function DetailPenduduk() {
    const { penduduk } = usePage<PageProps>().props;

    return (
        <AuthenticatedLayout>
            <Head title={`Detail Penduduk - ${penduduk.nama}`} />

            <div className="mb-8 ml-3">
                <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-200">
                    Detail Penduduk - {penduduk.nama}
                </h2>
            </div>

            <div className="flex flex-col gap-10 ">
                <div className="rounded-xl border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                    <div className="max-w-full overflow-x-auto">
                        <table className="table-auto w-full">
                            <tbody>
                                {[
                                    { label: "NIK", value: penduduk.nik },
                                    { label: "Nama", value: penduduk.nama },
                                    {
                                        label: "Tanggal Lahir",
                                        value: formatTanggal(penduduk.tanggal_lahir),
                                    },
                                    {
                                        label: "Jenis Kelamin",
                                        value: penduduk.jenis_kelamin,
                                    },
                                    { label: "Alamat", value: penduduk.alamat },
                                    {
                                        label: "Status Keluarga",
                                        value: penduduk.status_keluarga,
                                    },
                                    { label: "Agama", value: penduduk.agama },
                                    {
                                        label: "Pendidikan",
                                        value: penduduk.pendidikan,
                                    },
                                    {
                                        label: "Pekerjaan",
                                        value: penduduk.pekerjaan,
                                    },
                                ].map((row, index) => (
                                    <tr
                                        key={index}
                                        className="mb-4  border-gray-200"
                                    >
                                        <td className="font-bold py-2">
                                            {row.label}
                                        </td>
                                        <td className="py-2">{row.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Tombol Back */}
                <div className="mt-1">
                    <Link
                        href="/penduduk"
                        className="inline-block px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        Kembali
                    </Link>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
