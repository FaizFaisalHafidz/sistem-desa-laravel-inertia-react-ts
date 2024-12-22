import Header from '@/Components/Header';
import Sidebar from '@/Components/Sidebar';
import { usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode, useState } from 'react';

export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className='dark:bg-boxdark-2 dark:text-bodydark'>
            <div className='flex h-screen overflow-hidden'>
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>

                <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>

                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
                    <main>
                        <div className='mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10'>
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
