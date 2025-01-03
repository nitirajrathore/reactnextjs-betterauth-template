import { createAuthClient } from "better-auth/react";
import {
	adminClient,
	oneTapClient,
	genericOAuthClient,
} from "better-auth/client/plugins";
import { toast } from "sonner";

export const client = createAuthClient({
	plugins: [
		adminClient(),
		oneTapClient({
			clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
		}),
		genericOAuthClient(),
	],
	fetchOptions: {
		onError(e) {
			if (e.error.status === 429) {
				toast.error("Too many requests. Please try again later.");
			}
		},
	},
});

export const {
	signUp,
	signIn,
	signOut,
	useSession,
} = client;
