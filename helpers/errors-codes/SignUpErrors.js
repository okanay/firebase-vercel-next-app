export const SignUpErrors = (message) => {

    switch(message) {
        case "auth/invalid-email":
            return "You entered an invalid e-mail address."
            break;
        case "auth/weak-password":
            return "Your password must be a minimum of 6 digits!"
            break;
        case "auth/internal-error":
            return "A system error occurred while Sign Up!"
            break
        case "auth/email-already-in-use":
            return "Email address is already in use!"
            break
        default:
       return "Something Wrong : " + message
    }
}