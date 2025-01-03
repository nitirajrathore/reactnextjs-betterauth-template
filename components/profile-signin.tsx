import { useSession } from "@/lib/auth-client";
import Link from "next/link";
import {SignOutBtn} from "@/components/sign-out-btn";

export function ProfileOrSignIn() {
    const {data:session} = useSession();
    return (
        <div className="flex flex-row justify-center items-center">
            {session ? (
                <>
                <Link href="/profile" className="btn btn-secondary">Profile</Link>
                <SignOutBtn />
                </>
            ) : (
                <Link href="/sign-in" className="btn btn-primary">Sign In</Link>
            )}
        </div>
    );
}