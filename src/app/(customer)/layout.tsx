import Footer from "@/container/footer/Footer";
import Header from "@/container/header/Header";

export default function CustomerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen w-full h-full font-sans antialiased">
      <Header />
      <main className="w-full my-6">{children}</main>
      <Footer />
    </div>
  );
}
