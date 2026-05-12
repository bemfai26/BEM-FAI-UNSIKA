# Panduan Admin BEM FAI UNSIKA

Sistem Admin Panel ini menggunakan **Firebase** untuk mengelola berita secara dinamis. Anda tidak perlu lagi mengedit file HTML secara manual untuk menambah berita.

## 1. Persiapan Akun (Hanya Sekali)
Akses ke Admin Panel dibatasi demi keamanan. Silakan ikuti langkah ini untuk pertama kali:
1. Hubungi pengembang atau buka [Firebase Console](https://console.firebase.google.com/).
2. Masuk ke menu **Authentication** > **Add User**.
3. Daftarkan Email dan Password admin.
4. Masuk ke **Firestore Database**, buat dokumen di koleksi `admins` dengan ID yang sama dengan `UID` user tersebut, lalu beri field `role: "admin"`.

## 2. Mengelola Berita
Buka halaman `/admin/login.html` pada website Anda.
Setelah login, Anda akan masuk ke **Dashboard**:

### Menambah Berita Baru
1. Klik tombol **Tulis Berita**.
2. Isi formulir dengan lengkap:
   - **Judul**: Judul yang menarik.
   - **Kategori**: Pilih kategori yang sesuai.
   - **Penulis**: Departemen terkait.
   - **URL Foto Utama**: Link foto dari hosting (misal: ImgBB).
   - **Isi Berita**: Detail berita (bisa pakai HTML dasar).
   - **Galeri**: Masukkan 4 link foto untuk bagian dokumentasi di bawah berita.
3. Klik **Simpan**. Berita akan langsung muncul di halaman depan dan halaman berita.

### Mengedit/Menghapus
1. Di tab **Kelola Berita**, Anda akan melihat daftar berita.
2. Gunakan ikon **Pensil** untuk mengedit atau ikon **Tempat Sampah** untuk menghapus.

## 3. Tips Foto
Karena website ini statis, kami menyarankan menggunakan layanan seperti **ImgBB**, **PostImages**, atau **Google Drive (Direct Link)** untuk menyimpan foto, kemudian salin "Direct Link" (yang berakhiran .jpg atau .png) ke dalam kolom URL di Dashboard.

---
© 2026 Departemen Kearsipan BEM FAI UNSIKA
