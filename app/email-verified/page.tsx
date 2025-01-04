'use client';

import { useSearchParams } from "next/navigation";
import { SignInLink } from "@/components/sign-in-link";

export default function EmailVerificationPage() {
    const searchParams = useSearchParams();
    const error = searchParams.get("error");
    return (
        <div className="w-full">
            <div className="flex items-center flex-col justify-center w-full md:py-10">
                {error ? (
                    <div className="md:w-[400px] text-red-500">
                        There was an error verifying your email. Please try again.
                    </div>
                ) : (
                    <>
                        <div className="md:w-[400px] flex items-center justify-center">
                            Your email has been verified successfully.
                        </div>
                        <SignInLink buttonText="Sign In"/>
                    </>
                )}
            </div>
        </div>
    );
}