import Guest from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";

export default function NotFoundPage() {
    return (
        <Guest>
            <Head title="404 Not Found" />
            <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                    <div className="container mx-auto px-4 py-8">
                        <img src="/images/notfound/notfound.svg" alt="" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <h2 className="text-2xl font-semibold mb-4">
                                    Halaman tidak ditemukan
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    Halaman yang Anda cari tidak ditemukan.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Guest>
    );
}
