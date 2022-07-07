
const errors = (inputs) => {

    let errorMessages = {}
    
    if (inputs.username.trim() == "") {
        errorMessages.username = "Username required"
    }

    if (!inputs.email) {
        errorMessages.email = "Email required"
    } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
        errorMessages.email = "Email is invalid"
    }

    if (!inputs.password) {
        errorMessages.password = "Password is required"
    } else if (inputs.password.length < 6) {
        errorMessages.password = "Password must be at least 6 characters"
    }

    if (!inputs.confirmPassword) {
        errorMessages.confirmPassword = "Password confirmation is required"
    } else if (inputs.password !== inputs.confirmPassword) {
        errorMessages.confirmPassword = "Passwords do not match"
    }

    return errorMessages;
}

export default errors
 
