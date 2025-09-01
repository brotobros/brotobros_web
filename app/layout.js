import "./globals.css";
import Header from "@/components/common/Header";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export const metadata = {
  title: "Brotobros",
  description: "We Code The Future",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-900">
        <SmoothScrollProvider>
          <Header />
          <main>{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}