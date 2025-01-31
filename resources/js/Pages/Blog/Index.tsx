import Guest from "@/Layouts/GuestLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import { motion } from "framer-motion";

interface Blog {
    id: number;
    judul: string;
    gambar: string;
    konten: string;
}


export default function BlogPage({user}: {user?: {name: string}}) {
    const { props } = usePage();
    const data = props.blogs as Blog[];

    return (
        <Guest user={user}>
            <Head title="Blog" />
            {/* <!-- ===== Blog Grid Start ===== --> */}
            <section className="py-20 lg:py-25 xl:py-30">
                <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
                    <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
                        {data.map((blog) => (
                            <motion.div
                                key={blog.id}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        y: -20,
                                    },

                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                    },
                                }}
                                initial="hidden"
                                whileInView="visible"
                                transition={{ duration: 1, delay: 0.5 }}
                                viewport={{ once: true }}
                                className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
                            >
                                <Link
                                    href="#"
                                    className="relative block aspect-[368/239]"
                                >
                                    <img src={blog.gambar} alt={blog.judul} />
                                </Link>

                                <div className="px-4">
                                    <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
                                        <Link href={`/blog/blog-details`}>
                                            {`${blog.judul.slice(0, 40)}...`}
                                        </Link>
                                    </h3>
                                    <p className="line-clamp-3">
                                        {blog.konten}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* <!-- ===== Blog Grid End ===== --> */}
        </Guest>
    );
}
