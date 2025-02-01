import { CheckCircle, XCircle } from "lucide-react";

export default function SweetAlertModal({ isOpen, onClose, type, message }) {
    return (
        isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-96 text-center">
                    {/* Icon Success atau Error */}
                    {type === "success" ? (
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                    ) : (
                        <XCircle className="w-16 h-16 text-red-500 mx-auto" />
                    )}

                    {/* Judul Pesan */}
                    <h2 className="text-xl font-semibold mt-4 text-gray-800 dark:text-white">
                        {message}
                    </h2>

                    {/* Tombol OK */}
                    <button
                        onClick={onClose}
                        className="mt-6 px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
                    >
                        OK
                    </button>
                </div>
            </div>
        )
    );
}
