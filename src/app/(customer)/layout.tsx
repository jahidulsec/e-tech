import Navbar from "@/container/navbar/Navbar";
import Footer from "@/container/footer/Footer";

export default function CustomerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen w-full h-full font-sans antialiased">
      <Navbar />
      <main className="w-full">{children}</main>
      <Footer />
    </div>
  );
}
