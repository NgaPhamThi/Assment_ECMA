import { getAll, remove } from "../../api/project"
import { useEffect, useState } from "../../lib"
import axios from 'axios'
import SliderBar from "../../components/sliderbar"
import HeaderAdmin from "../../components/HeaderAdmin"
const ProjectManagementPage = () => {
    const [projects, setProject] = useState([])
    useEffect(() => {
        getAll().then(({ data }) => setProject(data))

    }, [])
    console.log(projects)

    useEffect(() => {
        const btnList = document.querySelectorAll(".btn-remove")
        for (let btn of btnList) {
            const id = btn.dataset.id
            btn.addEventListener('click', () => {
                remove(id).then(() => {
                    const newProjectList = projects.filter((project) => {
                        return project.id != id
                    })
                    setProject(newProjectList);
                }).then(() => alert("Xóa Thành Công"))
            })
        }
    })
    return /*html*/`

     ${HeaderAdmin()}
    
    <main class="flex">
        <div class=" basis-1/6 slider bg-blue-950 text-white px-[70px] py-[10px] w-[400px]">
              ${SliderBar()}
        </div>
        <div class="table basis-5/6">
        <table class=" border-1">
        <thead class="">
            <tr class=" w-[100px]">
            <th class="np-table-row-list_admin">Stt</th>
            <th class="np-table-row-list_admin w-[200px] ">Project Title</th>
            <th class="np-table-row-list_admin w-[350px]">Project Content</th>
            <th class="np-table-row-list_admin ">Project Image</th>
            <th class="np-table-row-list_admin  w-[150px]">Project Url</th>
            <th class="np-table-row-list_admin ">Project Repository</th>
            <th class="np-table-row-list_admin w-[200px]">Action</th>
            </tr>
        </thead>
        <tbody>
            ${projects.map((project, index) => {
        return /*html*/`
                    <tr>
                        <td class="np-table-row-list_admin">${index + 1}</td>
                        <td class="np-table-row-list_admin">${project.title}</td>
                        <td class="np-table-row-list_admin">${project.description}</td>
                        <td class=" np-table-row-list_admin w-[150px] h-[200px]"><img src="${project.image}"></td>
                        <td class="np-table-row-list_admin w-[150px]">${project.url}</td>
                        <td class="np-table-row-list_admin">${project.repository}</td>
                        <td class="np-table-row-list_admin">
                            <button class="btn-remove px-[20px] py-[8px] rounded-lg bg-red-600" data-id="${project.id}">Delete</button>
                            <a class="px-[15px] py-[8px] rounded-lg bg-red-600" href="/admin/project/update/${project.id}"><button>Update</button></a>
                        </td>
                    </tr>
                `
    }).join("")}
        </tbody>
        </table>
                          

    
                

    
        </div>
    
        
    
    </main>
    
    
    `
}
export default ProjectManagementPage