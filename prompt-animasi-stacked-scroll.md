# Prompt Animasi: Stacked Scroll Section (Visions Management)

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
Efek scroll di mana setiap section **menumpuk (stack)** di atas section sebelumnya, dan section baru hanya muncul setelah section sebelumnya **habis di-scroll**, sehingga semua section terasa nyambung tanpa jeda.

---

## Prompt Siap Pakai

> Buatkan efek **stacked scroll section** untuk halaman ini menggunakan **Framer Motion** (`useScroll` + `useTransform`) agar konsisten dengan komponen lain di project (Navbar dan Modal sudah pakai Framer Motion).
>
> Ketentuan:
> 1. Bungkus semua section (`<Hero />`, `<About />`, `<Services />`, dst) dalam satu parent wrapper `<div className="relative">`.
> 2. Tiap section punya container setinggi `200vh`, berisi inner `<section className="sticky top-0 h-screen overflow-hidden">` — supaya section "menempel" selama user scroll di dalam container tersebut.
> 3. Gunakan `useScroll({ target: sectionRef, offset: ["start start", "end start"] })` per section, lalu `useTransform` scrollYProgress menjadi:
>    - `scale`: dari `1` → `0.9` (section mengecil saat mulai tertutup)
>    - `opacity`: dari `1` → `0.6` (section meredup saat mulai tertutup)
> 4. Section berikutnya scroll masuk dari bawah menutupi section sebelumnya (efek tumpuk kartu, mirip Awwwards / Apple.com), bukan sekadar geser sejajar.
> 5. Section baru baru pindah/terlihat penuh **setelah** scroll progress section sebelumnya mencapai akhir — dicapai otomatis lewat kombinasi `sticky` + tinggi container `200vh`, tanpa ada jeda/patah antar section.
> 6. Pertahankan palet warna (`#171717`, `#1D2622`, `#C79B63`, `#F8F7F4`) dan gaya tipografi existing (tracking lebar, uppercase, `font-heading`) — jangan ubah desain, cukup tambahkan wrapper + logic scroll.
> 7. Pastikan `<Navbar />` tetap `fixed z-40` di atas seluruh stacked section, tidak ikut ketutup atau ikut mengecil.
> 8. Nonaktifkan efek stack ini di mobile (breakpoint `lg:` ke atas saja) — di mobile scroll normal biasa demi performa dan supaya tidak berat.

---

## Catatan Implementasi
- Setiap `SectionWrapper` idealnya jadi 1 komponen reusable yang menerima `children`, `index`, dan `zIndex` supaya urutan tumpukan (`z-index`) section selanjutnya selalu lebih tinggi dari sebelumnya.
- Testing wajib di scroll cepat (fling) dan scroll pelan, pastikan transisi tetap smooth di kedua kondisi.
- Kalau ada section dengan tinggi konten yang beda-beda drastis, sesuaikan tinggi container (`200vh`, bisa `250vh` untuk section lebih panjang) per section, bukan pukul rata.
