// @ts-ignore
export const api = axios.create({
    // baseURL: 'https://bcw-sandbox.herokuapp.com/api',
    baseURL: 'mongodb+srv://student:student@cluster0.msnee.mongodb.net/GregsListAPI?retryWrites=true&w=majority',
    timeout: 10000
})
