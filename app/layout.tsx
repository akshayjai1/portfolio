import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akshay Jain | Principal Full Stack Engineer",
  description:
    "Akshay Jain is a principal full stack engineer with 12+ years of experience building product platforms, frontend systems, backend services, and cloud delivery workflows.",
  applicationName: "Akshay Jain — Portfolio",
  openGraph: {
    title: "Akshay Jain | Principal Full Stack Engineer",
    description:
      "12+ years building dependable products across frontend, backend, cloud, and platform engineering.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Akshay Jain | Principal Full Stack Engineer",
    description:
      "12+ years building dependable products across frontend, backend, cloud, and platform engineering.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
