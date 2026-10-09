import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DreamDeploy — Digital Experiences Built With Purpose",
  description:
    "DreamDeploy creates websites, applications, dashboards and brand experiences for businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
