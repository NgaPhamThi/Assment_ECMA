import instance from "./instance";

const signup = (user) => {
    return instance.post(`/users`, user)

}
const getUsers = () => {
    return instance.get('/users')

}


export { signup, getUsers }