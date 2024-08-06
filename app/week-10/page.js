"use client";

import { useUserAuth } from "./_utils/auth-context";
import Page from "./shopping-list/page";

export default function SignInPage() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    async function handleSignIN() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }

    // console.dir(user);

    return (
        <main>
            <header>
                <h1 className="text-3xl">Shopping List Page</h1>
            </header>
            {user ? (
                // user IS logged in
                <div>
                    <p className="text-lg">Welcome, {user.displayName}</p>
                    <p className="text-lg">{user.email}</p>
                    <button onClick={handleSignOut} className="text-lg hover:underline">Sign Out</button>
                    <div>
                        <Page />
                    </div>
                </div>
            ) : (
                // user IS NOT logged in
                <div>
                    <button onClick={handleSignIN} className="text-lg m-2 hover:underline">Sign In</button>
                </div>
            )}
        </main>
    );
}
