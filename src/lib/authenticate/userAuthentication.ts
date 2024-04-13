// /*
// =======================================
// Functions to handle user authentication
// =======================================
// */

// import { SignupFormData, LoginFormData } from '@/interfaces'
// import { getToken, getUserInfo } from './jwtHandling'

// // ---------- SIGNUP FUNCTION ----------
// const registerUser = async (formData: SignupFormData): Promise<void> => {
//   // Make a POST request to the backend
//   const response = await fetch(
//     `${import.meta.env.VITE_API_URL}/users/register`,
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     },
//   )

//   const data = await response.json() // Parsing the JSON response body

//   // Check if the registration was successful
//   if (response.ok) {
//     return { success: true, token: data.access_token }
//   } else {
//     return { success: false, message: data.message }
//   }
// }

// // ---------- LOGIN FUNCTION ----------
// const loginUser = async (formData: LoginFormData): Promise<void> => {
//   // Make a POST request to the backend
//   const response = await fetch(`${import.meta.env.VITE_API_URL}/users/login`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       phone_number: formData.phoneNumber,
//       password: formData.password,
//     }),
//   })

//   const data = await response.json() // Parsing the JSON response body

//   // Check if the login was successful
//   if (response.ok) {
//     return { success: true, token: data.access_token }
//   } else {
//     return { success: false, message: data.message }
//   }
// }

// // ---------- LOGIN WITH GOOGLE FUNCTION ----------
// const loginWithGoogle = async (accessToken: string): Promise<void> => {
//   // Fetch user info using the access token
//   const userInfoResponse = await fetch(
//     'https://www.googleapis.com/oauth2/v3/userinfo',
//     {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     },
//   )

//   const userInfo = await userInfoResponse.json()

//   // Make a POST request to the backend with all details that we fetched
//   const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/google`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       profile_name: userInfo.name,
//       email: userInfo.email,
//       profile_picture: userInfo.picture,
//     }),
//   })

//   const data = await response.json()

//   // Check if the registration was successful
//   if (response.ok) {
//     return { success: true, token: data.access_token }
//   } else {
//     return { success: false, message: data.message }
//   }
// }

// // ---------- OTP VERIFICATION FUNCTION ----------
// const verifyOTP = async (
//   otp: string,
//   token: string,
//   isResend: Boolean = false,
// ): Promise<void> => {
//   // Decode the token to get the user's phone number
//   const decodedToken = getUserInfo(token)
//   const phoneNumber = decodedToken.phone_number
//   let response = null

//   console.log(decodedToken)

//   if (isResend) {
//     // Make a POST request to the backend to resend the OTP
//     response = await fetch(`${import.meta.env.VITE_API_URL}/users/resend-otp`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         phone_number: phoneNumber,
//       }),
//     })
//   } else {
//     // Make a POST request to the backend
//     response = await fetch(`${import.meta.env.VITE_API_URL}/users/verify-otp`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         otp: otp,
//         phone_number: phoneNumber,
//       }),
//     })
//   }

//   const data = await response.json() // Parsing the JSON response body

//   // Check if the OTP verification was successful
//   if (response.ok) {
//     return { success: true, message: data.message }
//   } else {
//     return { success: false, message: data.message }
//   }
// }

// export { registerUser, loginWithGoogle, loginUser, verifyOTP }
