import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import UserCard from "./user-card";
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
			<div className="flex gap-4 flex-col items-end">
			{session?.user.role === "admin" && (
				<div>
					<AdminBtn />
				</div>
				)}

				<div className="w-full">
				<UserCard
					session={JSON.parse(JSON.stringify(session))}
					activeSessions={JSON.parse(JSON.stringify(activeSessions))}
				/>
				</div>
			</div>
		</div>
	);
}
