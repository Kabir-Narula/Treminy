// /*
// ==============================
// Functions to handle JWT tokens
// ==============================
// */

// import { jwtDecode } from 'jwt-decode'

// // ---------- CREATE A TOKEN IN LOCAL STORAGE ----------
// const createToken = (token: string) => {
//   localStorage.setItem('token', token)
// }

// // ---------- GET A TOKEN FROM LOCAL STORAGE ----------
// const getToken = () => {
//   return localStorage.getItem('token')
// }

// // ---------- REMOVE A TOKEN FROM LOCAL STORAGE ----------
// const removeToken = () => {
//   localStorage.removeItem('token')
// }

// // ---------- DECODE A TOKEN ----------
// const decodeToken = (token: string) => {
//   return jwtDecode(token)
// }

// // ---------- FETCH THE USER INFO FROM THE TOKEN ----------
// const getUserInfo = (token: string) => {
//   const decodedToken = decodeToken(token)
//   return decodedToken.sub
// }

// export { createToken, getToken, removeToken, decodeToken, getUserInfo }
