import { Link } from "lucide-react";
import { useSearchParams } from "next/navigation";

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
                    <div className="md:w-[400px]">
                        Your email has been verified successfully.
                        <Link href="/sign-in" className="btn btn-primary">Go To Sign In</Link>
                    </div>
                )}
            </div>
        </div>
    );
}