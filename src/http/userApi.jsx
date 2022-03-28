import axios from "axios"

export const RegistrationUser = async (email, password) => {
    const apiKey = 'AIzaSyCZ4NHXhfMxdr7taAKmeWcKKIMkFM8WNxQ'
    const {data} = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`
    , 
    {
        email, password, returnSecureToken: true 
    })
    return data;
}

export const AuthUser = async (email, password) => {
    const apiKey = 'AIzaSyCZ4NHXhfMxdr7taAKmeWcKKIMkFM8WNxQ'
    const {data} = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`
    , 
    {
        email, password, returnSecureToken: true 
    })
    return data;
}