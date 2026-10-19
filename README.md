# Kios Presensi Guru (PWA)

Aplikasi web satu halaman yang bisa dipasang seperti aplikasi dan tetap berjalan **tanpa internet**.
Dipakai pada tablet di tiap gedung: guru mengetuk namanya, lalu menekan Hadir.

Semua data tersimpan di peramban perangkat masing-masing. Tidak ada server dan tidak ada data yang dikirim ke mana pun.

## Isi paket

| Berkas | Fungsi |
|---|---|
| `index.html` | Aplikasi (huruf dan pustaka Excel sudah ditanam di dalamnya) |
| `manifest.webmanifest` | Nama, ikon, dan tampilan saat dipasang |
| `sw.js` | Membuat aplikasi tetap terbuka tanpa internet |
| `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png`, `favicon-32.png`, `favicon-48.png` | Ikon aplikasi |
| `LISENSI.txt` | Lisensi pihak ketiga (SheetJS, huruf Manrope dan Amiri) |

## Memasang di GitHub Pages

1. Buat repositori **Public** baru di GitHub, mis. `presensi-guru`.
2. Ekstrak ZIP ini, lalu unggah **isinya** (bukan folder pembungkusnya): **Add file > Upload files**, pilih/seret **semua berkas** dari hasil ekstrak (paket ini sengaja tanpa folder, jadi bisa diunggah dari HP maupun komputer). Pastikan `index.html` berada di **paling atas** repositori, lalu **Commit changes**.
3. Buka **Settings > Pages**. Pada *Build and deployment*, pilih **Deploy from a branch**, cabang `main`, folder `/ (root)`, lalu **Save**.
4. Tunggu 1-3 menit. Alamatnya: `https://NAMA-AKUN.github.io/presensi-guru/`

Pemasangan memerlukan alamat **https** (GitHub Pages sudah https).

## Memasang di perangkat

- **Android/komputer (Chrome atau Edge):** buka alamatnya, lalu pilih **Install app** / **Tambahkan ke layar utama**.
- **iPhone/iPad (Safari):** **Bagikan > Tambah ke Layar Utama**.

Buka sekali saat tersambung internet supaya aplikasi tersimpan untuk pemakaian offline. Setelah itu aplikasi dapat dibuka tanpa internet.

## Memperbarui

Ganti `index.html` di repositori lalu commit. Perangkat mengambil versi baru di latar belakang saat online; versi baru tampil pada pembukaan berikutnya (buka dua kali bila perlu). Bila perlu memaksa semua berkas diunduh ulang, ubah `VERSI` di `sw.js` (mis. `v1` menjadi `v2`).

## Pertama kali dipakai: impor data

Repositori ini **tidak memuat data apa pun** karena situs GitHub Pages bersifat publik. Data dimasukkan sekali dari Excel di setiap perangkat, lalu tersimpan di peramban perangkat itu dan tetap ada saat offline.

- Buka menu **Data**, pilih berkas `Data_Guru_Jadwal_Terisi.xlsx` (data induk, dipakai di ketiga tablet), periksa pratinjau, tekan **Terapkan data ini**.
- Format Excel-nya menyamping, tanpa kode: sheet **Guru** (satu guru satu baris; tiap hari berisi Kls | Jam | Fan), **Jam**, dan **Kelas** (jenjang dan gedung tiap kelas). Tombol **Unduh template (Excel)** pada menu Data menghasilkan berkas dengan sheet **Petunjuk**.
- Lalu di **Pengaturan**, pilih **Gedung tablet ini**.
- Pengaturan lain (singkatan nama, apresiasi datang lebih awal, suara) diatur per tablet di menu **Pengaturan**.

Berkas Excel dibagikan lewat cara pribadi (flashdisk atau pesan langsung), bukan lewat repositori. Jangan ikut mengunggah berkas `.xlsx` ke repositori.

Data tersimpan per perangkat dan per alamat situs. Bila alamat berganti (mis. nama repositori diubah), data tidak ikut berpindah; impor ulang dari Excel. Dua repositori di akun yang sama berbagi satu alamat induk (`NAMA-AKUN.github.io`) sehingga penyimpanan peramban bisa bercampur bila dibuka di peramban yang sama; aplikasi ini sudah memakai nama penyimpanan yang berbeda satu sama lain.

## Lisensi pihak ketiga

SheetJS (Apache-2.0) serta huruf Manrope dan Amiri (SIL OFL 1.1) ditanam di dalam `index.html`. Teks lengkap ada di `LISENSI.txt`.
