// import { Card } from "@/components/ui/card";
// import { CheckCircle } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogClose,
} from "@/components/ui/dialog"

interface EmailVerificationSentProps {
    title: string;
    description: string;
    open: boolean;
    onClose: () => void;
}

export default function AppDialog({ title, description, open, onClose }: EmailVerificationSentProps) {

    return (<Dialog open={open} onOpenChange={onClose}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
    )
}