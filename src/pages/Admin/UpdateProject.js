import { update, getOne } from "../../api/project"
import { router, useEffect, useState } from "../../lib"
import HeaderAdmin from "../../components/HeaderAdmin"
import SliderBar from "../../components/sliderbar"

const UpdateProjectPage = ({ id }) => {
    const [project, setProject] = useState({})
    useEffect(() => {
        getOne(id).then(({ data }) => setProject(data))
    }, [])
    console.log(project)
    useEffect(() => {
        const updateForm = document.querySelector("#update-form")
        updateForm.addEventListener("submit", (event) => {
            event.preventDefault()
            const newData = {
                "id": id,
                "title": document.querySelector("#title").value,
                "description": document.querySelector("#description").value,
                "image": document.querySelector("#image").value,
                "url": document.querySelector("#url").value,
                "repository": document.querySelector("#repository").value
            }
            update(newData).then(() => { router.navigate("/admin/project") })
                .then(() => alert("Update Thành Công"))
        })
    })
    return /*html*/`
    ${HeaderAdmin()}
    
    <main class="flex gap-4">
      <div class=" basis-1/6  slider bg-blue-950 text-white px-[70px] py-[10px]">
            ${SliderBar()}
      </div>
      <div class="table basis-5/6 px-[30px]">
              
              <form id="update-form">
                  <div class="mb-6">
                  <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">title</label>
                  <input value="${project.title}" type="text" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required>
                  </div>
                  <div class="mb-6">
                  <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">description</label>
                  <input value="${project.description}" type="text" id="description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                  </div>
                  <div class="mb-6">
                  <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">image</label>
                  <input value="${project.image}" type="text" id="image" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                  </div>
                  <div class="mb-6">
                  <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">url</label>
                  <input value="${project.url}" type="text" id="url" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                  </div>
                  <div class="mb-6">
                  <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">repository</label>
                  <input value="${project.repository}" type="text" id="repository" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                  </div>
                  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update Product</button>
              </form>

  
      </div>
  
      
  
  </main>
    `
}

export default UpdateProjectPage