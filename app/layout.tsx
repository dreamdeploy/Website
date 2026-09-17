
import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "DreamDeploy — We Build. We Deploy. Your Dream Goes Live.",
  description: "DreamDeploy turns ideas into designed, engineered, and deployed digital products — from first sketch to App Store and production.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
