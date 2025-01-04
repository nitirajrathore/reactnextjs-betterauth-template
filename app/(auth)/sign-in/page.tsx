"use client";

import SignIn from "@/components/sign-in";
import { SignUp } from "@/components/sign-up";
import { Tabs } from "@/components/ui/tabs2";
import VerifyEmail from "@/components/verify-email";
import { client } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
	const router = useRouter();

	useEffect(() => {
		client.oneTap({
			// for soft redirect
			// fetchOptions: {
			// 	onSuccess: () => {
			// 		router.push("/dashboard")
			// 	}
			// }
			// For hard redirect
			callbackURL: "/dashboard"
		});
	}, []);

	return (
		<div className="w-full">
			<div className="flex items-center flex-col justify-center w-full md:py-10">
				<div className="md:w-[400px]">
					<Tabs
						tabs={[
							{
								title: "Sign In",
								value: "sign-in",
								content: <SignIn />,
							},
							{
								title: "Sign Up",
								value: "sign-up",
								content: <SignUp />,
							},
							{
								title: "Verify Email",
								value: "verify-email",
								content: <VerifyEmail />,
							},
						]}
					/>
				</div>
			</div>
		</div>
	);
}
