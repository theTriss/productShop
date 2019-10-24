export const required = (value, valueName) => value ? undefined : `${valueName} is required`;
export const emailCheck = (value) => /^[\w.%+-]+@\w+\.[a-z]{2,4}$/.test(value) ? undefined : `incorect email`; 
export const repeatPassword = (value, checkValue) => value === checkValue ? undefined : `password not match`; 
export const minLength = (minLength) => (value, valueName) => 
    (value && value.length >= minLength) ? undefined : `${valueName} min symbols is ${minLength}`