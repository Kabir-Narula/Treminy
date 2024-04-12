/*
================
INTERFACES
================
*/

// Interface for the signup form data
export interface SignupFormData {
  profile_name: string
  phone_number: string
  email: string
  password: string
  confirmPassword: string
}

// Interface for the login form data
export interface LoginFormData {
  phoneNumber: string
  password: string
}

// Interface for the response from the verify OTP API
export interface VerifyOTPResponse {
  message: string
}
