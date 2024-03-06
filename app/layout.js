import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div className="navbar">
        <Link href="/" className="logo">
          Appleforum
        </Link>
        <Link href="/list">List</Link>
      </div>
      {children}
    </html>
  );
}
