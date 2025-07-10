// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex-center',
        // flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f1f5f9',
        color: '#0e7490',
        fontFamily: 'sans-serif',
      }}
    >
      <h1 style={{ fontSize: 48, fontWeight: 700, marginBottom: 16 }}>
        404 - Not Found
      </h1>
      <p style={{ fontSize: 18, marginBottom: 32 }}>
        Halaman yang kamu cari tidak ditemukan.
      </p>
      <Link
        href="/"
        style={{
          background: '#0e7490',
          color: '#fff',
          padding: '10px 24px',
          borderRadius: 6,
          fontWeight: 600,
          textDecoration: 'none',
        }}
      >
        Kembali ke Beranda
      </Link>
    </main>
  );
}