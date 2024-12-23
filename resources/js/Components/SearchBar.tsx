interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
    return (
        <div className="mb-4">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Cari nama atau email..."
                    className="w-60 rounded-md border px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-black"
                />
            </div>
    );
}