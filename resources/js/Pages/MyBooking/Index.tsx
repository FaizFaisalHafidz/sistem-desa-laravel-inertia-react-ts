import Guest from "@/Layouts/GuestLayout";
import { Head, usePage } from "@inertiajs/react";

interface Booking {
    kode: string;
    paket: {nama: string};
    tanggal_dari: string;
    tanggal_sampai: string;
    jam_dari: string;
    jam_sampai: string;
    alamat: string;
    status: string;
}

export default function MyBookingPage({
    user,
}: {
    user?: { name: string };
}) {
    const {props} = usePage();
    const data = props.bookings as Booking[];

    return (
        <Guest user={user}>
            <Head title="MyBooking" />

            <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {data.map((booking) => (
                            <div key={booking.kode} className="rounded-lg bg-white p-6 shadow-md">
                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold">{booking.paket.nama}</h3>
                                    <p className="text-sm text-gray-500">Kode: {booking.kode}</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-sm">
                                        <span className="font-medium">Tanggal:</span>{' '}
                                        {booking.tanggal_dari} - {booking.tanggal_sampai}
                                    </p>
                                    <p className="text-sm">
                                        <span className="font-medium">Jam:</span>{' '}
                                        {booking.jam_dari} - {booking.jam_sampai}
                                    </p>
                                    <p className="text-sm">
                                        <span className="font-medium">Alamat:</span> {booking.alamat}
                                    </p>
                                    <div className="mt-4">
                                        <span className={`rounded-full px-3 py-1 text-xs ${
                                            booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                            booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                                            'bg-gray-100 text-gray-800'
                                        }`}>
                                            {booking.status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Guest>
    );
}
