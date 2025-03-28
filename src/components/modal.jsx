import { useEffect } from "react"

export function Modal({ isOpen, onClose, children }) {

    useEffect(() => {
        const handleEsc = (e) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white shadow-lg max-w-md w-full !p-6 relative">
                <button onClick={onClose} className="absolute top-2 right-3 text-[22px] font-bold text-gray-600 hover:text-red-500">
                    ×
                </button>
                {children}
            </div>
        </div>
    )
}