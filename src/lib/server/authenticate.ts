import { SECRET_JWT_KEY } from "$env/static/private";
import type { Cookies } from "@sveltejs/kit";
import jwt from "jsonwebtoken";

export function authenticate(cookies: Cookies): auth | undefined {
	let token = cookies.get("auth-token");
	if (!token) return undefined;
	try {
		const auth = jwt.verify(token, SECRET_JWT_KEY);
		if (!auth) return undefined;
		return auth as auth;
	} catch {
		return undefined;
	}
}