import Guest from "@/Layouts/GuestLayout";
import { Button } from "@headlessui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import { Head, Link, usePage } from "@inertiajs/react";
import { IconButton } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { useState } from "react";

interface Paket {
    id: number;
    nama: string;
    kategori: { nama: string };
    gambar: string;
    deskripsi: string;
    harga_per_hari: number;
}

export default function PaketLayananPage({
    user,
}: {
    user?: { name: string };
}) {
    const { props } = usePage();
    const data = props.pakets as Paket[];

    const [searchTerm, setSearchTerm] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const filterData = data.filter((paket) =>
        paket.nama.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const paginateData = filterData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(filterData.length / itemsPerPage);

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
        color: "red" as const,
        onClick: () => handlePageChange(index),
    });

    return (
        <Guest user={user}>
            <Head title="Paket Layanan" />
            <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center">
                        {/* Input Search */}
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(event) =>
                                setSearchTerm(event.target.value)
                            }
                            placeholder="Cari Paket Layanan ..."
                            className="w-full md:w-1/2 rounded-lg border border-stroke px-4 py-2 shadow focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                        />
                        {/* Input Tanggal */}
                        <div className="flex gap-4">
                            <input
                                type="date"
                                value={startDate}
                                onChange={(event) =>
                                    setStartDate(event.target.value)
                                }
                                className="rounded-lg border border-stroke px-4 py-2 shadow focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                            />
                            <input
                                type="date"
                                value={endDate}
                                onChange={(event) =>
                                    setEndDate(event.target.value)
                                }
                                className="rounded-lg border border-stroke px-4 py-2 shadow focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-7.5 md:grid-cols-3 lg:grid-cols-3 xl:gap-10">
                        {paginateData.map((paket) => (
                            <motion.div
                                key={paket.id}
                                variants={{
                                    hidden: { opacity: 0, y: -20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                initial="hidden"
                                whileInView="visible"
                                transition={{ duration: 1, delay: 0.5 }}
                                viewport={{ once: true }}
                                className="rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
                            >
                                <Link
                                    href="#"
                                    className="relative block aspect-[368/239]"
                                >
                                    <img src={paket.gambar} alt={paket.nama} />
                                </Link>

                                <div className="px-4">
                                    <h3 className="mt-7.5 line-clamp-2 text-lg font-medium text-black dark:text-white">
                                        <Link href={`/blog/blog-details`}>
                                            {`${paket.nama.slice(0, 40)}`}
                                        </Link>
                                    </h3>
                                    <span className="mb-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                        {paket.kategori.nama}
                                    </span>
                                    <p className="line-clamp-3">
                                        {paket.deskripsi}
                                    </p>
                                    <div className="mt-4 flex justify-between">
                                        <p>{`Rp ${paket.harga_per_hari.toLocaleString()} / hari`}</p>
                                        <Button
                                            className="rounded-xl bg-red-500 px-4 py-2 text-white"
                                            onClick={() => alert("Booking Now")}
                                        >
                                            Booking Now
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-14 flex justify-center gap-4">
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
                        <div className="flex items-center gap-2">
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
            </section>
        </Guest>
    );
}
