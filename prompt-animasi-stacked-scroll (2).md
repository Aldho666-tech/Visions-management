# Prompt Animasi: Parallax Scroll Section (Visions Management)

## Konteks Project
- Framework: Next.js (`"use client"`)
- Library animasi: **Framer Motion** (sudah dipakai di `Navbar.tsx`, `ProjectModal.tsx`, `TalentModal.tsx`)
- Styling: Tailwind CSS
- Palet warna:
  - `#171717` — dark utama
  - `#1D2622` — dark green (footer/modal)
  - `#C79B63` — gold accent
  - `#F8F7F4` — cream/putih teks
- Tipografi: `font-heading`, tracking huruf lebar (`tracking-[0.2em]` s/d `tracking-[0.45em]`), uppercase

## Kebutuhan
Efek **parallax scroll** — semua section jalan terus mengikuti scroll (tidak berhenti/pin), tapi elemen background dan foreground bergerak dengan **kecepatan berbeda** sehingga ada kesan kedalaman (depth), dan transisi antar section terasa **menyambung mulus** tanpa jeda/patah.

---

## Prompt Siap Pakai

> Buatkan efek **parallax scroll** untuk seluruh section halaman ini menggunakan **Framer Motion** (`useScroll` + `useTransform`), konsisten dengan komponen lain di project yang sudah pakai Framer Motion (Navbar, Modal).
>
> Ketentuan:
> 1. Gunakan satu `useScroll()` global di level page (bukan per-section) untuk mendapatkan `scrollYProgress` keseluruhan halaman, supaya semua section terasa terhubung dalam satu aliran scroll yang sama.
> 2. Di tiap section, elemen background (gambar/dekorasi/gradient) bergerak **lebih lambat** dari elemen foreground (teks/CTA/kartu) menggunakan `useTransform(scrollYProgress, [start, end], [0%, -20%])` untuk background, dan `[0%, -5%]` untuk foreground — beda rasio kecepatan ini yang menciptakan efek depth.
> 3. Tambahkan **fade + translate-Y halus** saat section masuk/keluar viewport (`opacity: 0 → 1`, `y: 40px → 0`) memakai `whileInView` agar transisi antar section terasa menyatu, bukan section yang tiba-tiba muncul/hilang.
> 4. Antar section **tidak ada gap/jeda visual** — hilangkan margin besar antar `<section>`, gunakan background yang saling overlap tipis atau gradient transisi di ujung tiap section supaya sambungannya mulus (contoh: bagian bawah section A fade ke warna section B).
> 5. Section tetap scroll normal (bukan sticky/pin) — user tetap bisa scroll cepat melewati semua section, efeknya murni di pergerakan relatif elemen dalamnya.
> 6. Pertahankan palet warna (`#171717`, `#1D2622`, `#C79B63`, `#F8F7F4`) dan gaya tipografi existing (tracking lebar, uppercase, `font-heading`) — jangan ubah desain, cukup tambahkan layer parallax + transisi.
> 7. Pastikan `<Navbar />` tetap `fixed z-40` di atas semua section dan tidak terpengaruh efek parallax.
> 8. Kurangi intensitas parallax di mobile (misal jarak transform dikecilkan setengahnya atau dimatikan di bawah breakpoint `md`) demi performa dan menghindari efek "jerky" di perangkat lemah.

---

## Catatan Implementasi
- Buat 1 komponen reusable `<ParallaxLayer offset={...}>` yang membungkus elemen background per section, supaya tinggal dipasang ulang di tiap section tanpa duplikasi logic.
- Test di scroll cepat (fling) dan scroll pelan/trackpad — pastikan tidak ada flicker atau elemen "kedutan" saat kecepatan scroll tinggi.
- Kalau section punya gambar besar sebagai background, pastikan gambar sedikit lebih besar dari container (`scale-110` atau `h-[120%]`) supaya saat parallax bergerak tidak muncul area kosong di tepi.
- Gunakan `will-change: transform` pada layer yang di-animate untuk performa GPU yang lebih baik, terutama di section dengan gambar berat.
