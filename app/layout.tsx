import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Wrapper, WrapperWithQuery } from "@/components/wrapper";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
	title: {
		template: `%s | ${process.env.NEXT_PUBLIC_APP_NAME}`,
		default: `${process.env.NEXT_PUBLIC_APP_NAME}`,
	},
	description: `${process.env.NEXT_PUBLIC_APP_DESCRIPTION}`,
	metadataBase: new URL(process.env.NEXT_PUBLIC_APP_METABASE || "http://localhost:3000"),
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="icon" href="/favicon/favicon.ico" sizes="any" />
			</head>
			<body className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
				<ThemeProvider attribute="class" defaultTheme="dark">
					<Wrapper>
						<WrapperWithQuery>{children}</WrapperWithQuery>
					</Wrapper>
					<Toaster richColors closeButton />
				</ThemeProvider>
			</body>
		</html>
	);
}
