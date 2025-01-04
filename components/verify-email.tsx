"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { client } from "@/lib/auth-client";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import AppDialog from "./verification-email-sent";
import { useRouter } from "next/navigation";

export default function VerifyEmail() {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);
	const [showEmailSentModal, setShowEmailSentModal] = useState(false);

	return (
		<Card className="z-50 rounded-md rounded-t-none max-w-md">
			<CardHeader>
				<CardTitle className="text-lg md:text-xl">Resend Verification Email</CardTitle>
				<CardDescription className="text-xs md:text-sm">
					Enter your email below to resend verification email
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="grid gap-4">
					<div className="grid gap-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							placeholder="m@example.com"
							required
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							value={email}
						/>
					</div>
					<Button
						type="submit"
						className="w-full"
						disabled={loading}
						onClick={async () => {
							await client.sendVerificationEmail(
								{
									email: email,
									callbackURL: "/email-verified",
								},
								{
									onRequest: () => {
										setLoading(true);
									},
									onResponse: () => {
										setLoading(false);
										setShowEmailSentModal(true);
									},
									onError: (ctx) => {
										toast.error(ctx.error.message);
									},
								},
							);
						}}
					>
						{loading ? <Loader2 size={16} className="animate-spin" /> : "Send Verification Email"}
					</Button>
					{showEmailSentModal && (
						<AppDialog
							title={"Check your email"}
							description={`Please check your inbox for ${email} and click on the link to verify your account.`}
							open={showEmailSentModal}
							onClose={() => {
								setShowEmailSentModal(false);
								router.push("/sign-in")
							}}
						/>
					)}
					
				</div>
			</CardContent>
		</Card >
	);
}
