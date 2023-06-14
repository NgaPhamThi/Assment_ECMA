import { getUsers } from "../api/auth";
import { useEffect, useState } from "../lib";
import { router } from "../lib";
const Signin = () => {
  const [user, setUser] = useState([])
  useEffect(() => {
    console.log(user);

    const signupForm = document.querySelector('#signin-form')
    signupForm.addEventListener('submit', (event) => {
      event.preventDefault()
      const userNew = {
        "username": document.querySelector('#username').value,
        "email": document.querySelector('#email').value,
        "password": document.querySelector('#password').value,

      }
      getUsers().then(({ data }) => {
        data.forEach(item => {
          if (item.username == userNew.username && item.email == userNew.email && item.password == userNew.password) {
            router.navigate('/admin/project')
            alert("Đăng ký thành công")
          }
        });

      })

    })

  }, [])


  return /*html*/`
    <main class=" bg-blue-400 h-[800px] pl-[500px] pt-[100px]">
       
    <form class="h-[400px] w-[500px] " id="signin-form">
    <div class="mb-6">
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
    <input type="text" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
    </div>
    <div class="mb-6">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
      <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required>
    </div>
    <div class="mb-6">
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
      <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
    </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Signin</button>
    </form> 
          </main>
    
    `
}

export default Signin;