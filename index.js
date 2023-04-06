import axios from "axios"


//deneme
// axios('https://jsonplaceholder.typicode.com/users/1')
// .then(response =>console.log(response.data))


const getUserAndPost = async (id) =>{
    const { data:user } = await axios(`https://jsonplaceholder.typicode.com/users/${id}`)

    const { data:post } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)

    return [user,post]
}

export default getUserAndPost
