import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Providers } from "./providers";

const roboto = Roboto({ weight:'500',subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The best pokedex",
  description: "Small application with the most popular monsters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
