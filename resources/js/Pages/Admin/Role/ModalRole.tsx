import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import React from "react";

interface ModalFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ModalRole({ isOpen, onClose }: ModalFormProps) {
    const { data, setData, post, processing, reset } = useForm({
        name: "",
        guard_name: "",
        
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setData(
            name as
                | "name" | "guard_name",
                
            value
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("roles.store"), {
            onSuccess: () => {
                reset();
                onClose();
            },
        });
    };

    if (!isOpen) return null;

    return (
        <Transition appear show={isOpen} as={React.Fragment}>
            <Dialog as="div" className="relative z-10" onClose={onClose}>
                <Transition.Child
                    as={React.Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={React.Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-lg bg-white dark:bg-black p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-500"
                                >
                                    Tambah Role
                                </Dialog.Title>
                                <form className="mt-4" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                        <input
                                            type="text"
                                            name="name"
                                            value={data.name}
                                            onChange={handleChange}
                                            placeholder="Nama Role"
                                            className="border rounded p-2 dark:bg-gray-800"
                                            required
                                        />
                                        
                                        <select
                                            name="guard_name"
                                            value={data.guard_name}
                                            onChange={handleChange}
                                            className="border rounded p-2 dark:bg-gray-800"
                                            required
                                        >
                                            <option value="">Pilih Guard Name</option>
                                            <option value="web">Web</option>
                                            <option value="api">Api</option>
                                        </select>
                                        
                                    </div>
                                    <div className="mt-8 flex justify-end gap-2">
                                        <button
                                            type="button"
                                            className="bg-gray-500 text-white px-4 py-2 rounded"
                                            onClick={onClose}
                                        >
                                            Batal
                                        </button>
                                        <button
                                            type="submit"
                                            className="bg-red-700 text-white px-4 py-2 rounded"
                                            disabled={processing}
                                        >
                                            Simpan
                                        </button>
                                    </div>
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}