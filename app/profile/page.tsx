import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import UserCard from "./user-card";
import { OrganizationCard } from "./organization-card";
import AccountSwitcher from "@/components/account-switch";
import { Link } from "lucide-react";
import {AdminBtn} from "@/components/admin-btn";

export default async function ProfilePage() {
	const [session, activeSessions] =
		await Promise.all([
			auth.api.getSession({
				headers: await headers(),
			}),
			auth.api.listSessions({
				headers: await headers(),
			}),
		]).catch((e) => {
			throw redirect("/sign-in");
		});
	return (
		<div className="w-full">
			<div className="flex gap-4 flex-col">
				<UserCard
					session={JSON.parse(JSON.stringify(session))}
					activeSessions={JSON.parse(JSON.stringify(activeSessions))}
				/>
				{session?.user.role === "admin" && (
					<AdminBtn />
				)}
			</div>
		</div>
	);
}
