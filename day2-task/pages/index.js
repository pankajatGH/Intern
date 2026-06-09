import Image from "next/image";
import Link from 'next/link'
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <Link href="/posts">
  <button style={{
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    padding: '10px 28px',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '12px'
  }}>
    View Posts
  </button>
</Link>
  );
}
