export const SignInErrors = (message) => {

    switch(message) {
        case "auth/invalid-email":
            return "You entered an invalid e-mail address."
            break;
        case "auth/weak-password":
            return "Your password must be a minimum of 6 digits!"
            break;
        case "auth/internal-error":
            return "A system error occurred while Sign Up."
            break
        case "auth/wrong-password":
            return "You entered an invalid password!"
            break
        default:
       return "Something Wrong : " + message
    }
}