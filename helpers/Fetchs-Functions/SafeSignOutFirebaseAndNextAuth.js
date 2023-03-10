import {SafeSignOutFetch} from "./SafeSignOutFetch";
import {signOut} from "next-auth/react";

export const SafeSignOutFirebaseAndNextAuth = () => {
    SafeSignOutFetch().then(res => {
        if (res.ok) {
            signOut({callbackUrl: "/signin"}).then(response => {
            })
        }
    })
}