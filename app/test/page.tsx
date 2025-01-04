'use client';

import { Button } from "@/components/ui/button";
import AppDialog from "@/components/verification-email-sent";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Dashboard() {
    const [showEmailSentModal, setShowEmailSentModal] = useState(false);
    const router = useRouter();
    const email = "your@email.com"
    return (
        <>
        <Button onClick={() => setShowEmailSentModal(true)}>Show Email Sent Modal</Button>
        {showEmailSentModal &&  
            <div className="w-full">
                <div className="flex gap-4 flex-col">
                    <AppDialog 
                        title={"Check your email"}
                        description={`We have sent you an email with a link to verify your account. Please check your inbox for ${email} and click on the link to verify your account.`}   
                        open={showEmailSentModal} 
                        onClose={() => {setShowEmailSentModal(false);
                            router.push("/sign-in")
                        }}
                    />
                </div>
            </div>
    }
        </>
    )
}