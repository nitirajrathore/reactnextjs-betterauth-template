import { SignInButton, SignInFallback } from "@/components/sign-in-btn";
import { Suspense } from "react";

export default async function Home() {
	const features = [
		"Email & Password",
		"Organization | Teams",
		"Passkeys",
		"Multi Factor",
		"Password Reset",
		"Email Verification",
		"Roles & Permissions",
		"Rate Limiting",
		"Session Management",
	];
	return (
		<div className="min-h-[80vh] flex items-center justify-center overflow-hidden no-visible-scrollbar px-6 md:px-0">
			<main className="flex flex-col gap-4 row-start-2 items-center justify-center">

					<Suspense fallback={<SignInFallback />}>
						{/* @ts-ignore */}
						<SignInButton />
					</Suspense>

			</main>
		</div>
	);
}
