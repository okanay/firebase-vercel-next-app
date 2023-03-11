export const SignUpErrors = (message) => {

    switch (message) {
        case "auth/invalid-email":
            return "You entered an invalid e-mail address."
        case "auth/weak-password":
            return "Your password must be a minimum of 6 digits!"
        case "auth/internal-error":
            return "A system error occurred while Sign Up!"
        case "auth/email-already-in-use":
            return "Email address is already in use!"
        case "undefined":
            return "A system error occurred while Sign In."
        default:
            return "Something Wrong : " + message
    }
}