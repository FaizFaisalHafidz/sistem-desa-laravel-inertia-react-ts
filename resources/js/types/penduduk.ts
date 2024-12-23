interface Penduduk {
    id: number;
    nik: string;
    nama: string;
    tanggal_lahir: string;
    jenis_kelamin: string;
    alamat: string;
    status_keluarga: string;
    agama: string;
    pendidikan: string;
    pekerjaan: string;
}

export interface PendudukProps {
    penduduks: Penduduk[];
    pagination: {
        current_page: number;
        last_page: number;
        total: number;
    };
    search: string;
    [key: string]: any;
}