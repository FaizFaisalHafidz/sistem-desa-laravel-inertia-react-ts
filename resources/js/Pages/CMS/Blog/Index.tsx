import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Button } from "@headlessui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import { Head, usePage } from "@inertiajs/react";
import { IconButton } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Blog {
    id: number;
    judul: string;
    slug: string;
    gambar: string;
    created_by: string;
    updated_by: string;
    is_published: boolean;
}

//rolerole

export interface RoleProps extends PageProps {
    flash?: {
        success?: string;
        error?: string;
    };
}

export default function RolePage() {
    const { props } = usePage();
    const data = props.blogs as Blog[];

    const [isModalOpen, setModalOpen] = useState(false);

    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const { flash } = usePage<RoleProps>().props;

    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success); // Menampilkan pesan sukses
        } else if (flash?.error) {
            toast.error(flash.error); // Menampilkan pesan error
        }
    }, [flash]);

    const filteredData = data.filter((item) =>
        item.judul.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const paginateData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // console.log(paginateData);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const prev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const next = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const getItemProps = (index: number) => ({
        variant:
            currentPage === index ? ("filled" as const) : ("text" as const),
        color: "blue-gray" as const,
        onClick: () => handlePageChange(index),
    });

    const [theme, setTheme] = useState<"light" | "dark">("light");
    useEffect(() => {
        const currentTheme = document.documentElement.classList.contains("dark")
            ? "dark"
            : "light";
        setTheme(currentTheme as "light" | "dark");
    }, []);

    // const [selectedRole, setSelectedRole] = useState<Roles | null>(null);
    // const [isModalEditOpen, setModalEditOpen] = useState(false);

    // const handleEditClick = (role: Roles) => {
    //     setSelectedRole(role);
    //     setModalOpen(true);
    // };

    return (
        <AuthenticatedLayout>
            <Head title="Roles" />

            <ToastContainer
                theme={theme as "light" | "dark"}
                position="top-right"
                autoClose={3000}
            />

            <div className="mb-8 ml-3">
                <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-200">
                    Manajemen Blog
                </h2>
            </div>

            <div className="flex items-center mb-8">
                {/* <SearchBar value={searchTerm} onChange={setSearchTerm} /> */}

                <div className="mb-4">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                        placeholder="Cari Role..."
                        className="w-60 rounded-md border px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-black"
                    />
                </div>
                <Button
                    onClick={() => setModalOpen(true)}
                    className="flex items-center gap-2 mb-4 px-4 py-2 cursor-pointer bg-red-700 text-white rounded-md shadow-sm hover:bg-red-600  ml-4"
                >
                    Tambah Blog
                </Button>
            </div>

            <div className="flex flex-col gap-10 ">
                <div className="rounded-xl border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                    <div className="max-w-full overflow-x-auto overflow-y-auto">
                        <table className="w-full table-auto">
                            <thead>
                                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                                    <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                        Gambar
                                    </th>
                                    <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                                        Judul
                                    </th>
                                    <th className="py-4 px-4 font-medium text-black dark:text-white">
                                       Slug
                                    </th>
                                    <th className="py-4 px-4 font-medium text-black dark:text-white">
                                        Status
                                    </th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {paginateData.map((blog) => (
                                    <tr key={blog.id}>
                                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                            <img
                                                src={blog.gambar}
                                                alt=""
                                                className="h-20 w-20 rounded-lg"
                                            />
                                        </td>
                                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                            <p className="text-black dark:text-white">
                                                {blog.judul}
                                            </p>
                                        </td>
                                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                            <p className="text-black dark:text-white">
                                                {blog.slug}
                                            </p>
                                        </td>
                                        
                                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                            {blog.is_published ? (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                    Published
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                    Unpublished
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Pagination */}
                <div className="mt-4 flex justify-center items-center gap-4">
                    <div className="flex items-center gap-4">
                        <Button
                            className="flex items-center gap-2"
                            onClick={prev}
                            disabled={currentPage === 1}
                        >
                            <ArrowLeftIcon
                                strokeWidth={2}
                                className="h-4 w-4"
                            />{" "}
                            Previous
                        </Button>
                        <div className="flex items-center gap-2 dark">
                            {Array.from(
                                { length: totalPages },
                                (_, i) => i + 1
                            ).map((page) => (
                                <IconButton
                                    key={page}
                                    {...getItemProps(page)}
                                    placeholder=""
                                    onPointerEnterCapture={() => {}}
                                    onPointerLeaveCapture={() => {}}
                                >
                                    {page}
                                </IconButton>
                            ))}
                        </div>

                        <Button
                            className="flex items-center gap-2"
                            onClick={next}
                            disabled={currentPage === totalPages}
                        >
                            Next
                            <ArrowRightIcon
                                strokeWidth={2}
                                className="h-4 w-4"
                            />
                        </Button>
                    </div>
                </div>
                {/* End Pagination */}
            </div>
        </AuthenticatedLayout>
    );
}
