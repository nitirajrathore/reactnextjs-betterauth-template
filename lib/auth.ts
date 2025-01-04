import { betterAuth } from "better-auth";
import {
	admin,
	oneTap,
	oAuthProxy,
	openAPI,
} from "better-auth/plugins";
// import { LibsqlDialect } from "@libsql/kysely-libsql";
import { reactResetPasswordEmail } from "./email/rest-password";
import { nextCookies } from "better-auth/next-js";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/prisma/prisma";
import { sendEmail } from "./email/emailer";
 
export const auth = betterAuth({
	appName: process.env.NEXT_PUBLIC_APP_NAME || "NextJs Template App",
	database: prismaAdapter(prisma, {
		provider: "postgresql",
	  }),
		session: {
		freshAge: 0,
	},
	emailVerification: {
		sendVerificationEmail: async function ({ user, url }) {
			const res = await sendEmail({
				to: user.email,
				subject: "Verify your email address",
				html: `<a href="${url}">Verify your email address</a>`,
			});
			console.log(res, user.email);
		},
		autoSignInAfterVerification: false,
		sendOnSignUp: true,
	},
	account: {
		accountLinking: {
			trustedProviders: ["google", "github"],
		},
	},
	emailAndPassword: {
		enabled: true,
		sendResetPassword: async function ({ user, url }) {
			await sendEmail({
				to: user.email,
				subject: "Reset your password",
				react:{ element: reactResetPasswordEmail({
					username: user.email,
					resetLink: url,
				})},
			});
		},
		requireEmailVerification: true,
		autoSignIn: false,
	},
	socialProviders: {
		github: {
			clientId: process.env.GITHUB_CLIENT_ID || "",
			clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
		},
		google: {
			clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
		},
	},
	plugins: [
		openAPI(),
		admin(),
		oneTap(),
		oAuthProxy(),
		nextCookies(),
	],
});
