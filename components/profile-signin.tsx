import { useSession } from "@/lib/auth-client";
import {SignOutBtn} from "@/components/sign-out-btn";
import { SignInLink } from "./sign-in-link";
import { ProfileBtn } from "./profile-btn";

export function ProfileOrSignIn() {
    const {data:session} = useSession();
    return (
        <div className="flex flex-row justify-center items-center">
            {session ? (
                <>
                <ProfileBtn />
                <SignOutBtn />
                </> 
            ) : (
                <SignInLink buttonText="Sign In" />
            )}
        </div>
    );
}