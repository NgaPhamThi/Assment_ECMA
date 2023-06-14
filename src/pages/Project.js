import Header from "../components/header"
import Footer from "../components/footer"
import { useEffect, useState } from "../lib"
import { getAll } from "../api/project"
const ProjectPage = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        getAll().then(({ data }) => setProduct(data))
    }, [])

    console.log(product)
    return /*html*/`
      ${Header()}
      <main>
      <div class=" flex my-[50px] gap-[50px] mx-[50px]">
        <div class="basis-1/6">
        <ul>
        <li class="">
        <div class="flex  gap-[10px] bg-yellow-500 px-[20px] py-[10px] my-[2px] text-white">
            <div class=" pt[20px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    class=" w-[20px] h-[20px] text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
                <div class=" uppercase font-medium text-[20px]">Product</div>
        </div>
        </li>
    <li class="">
        <div class="flex  gap-[10px]  bg-blue-400 px-[20px] py-[10px] my-[2px] text-white">
            <div class="icon pt[20px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    class=" w-[20px] h-[20px] text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
             <div class=""><a href="">Cat Foot</a></div>
        </div>
     </li>
     <li class="">
     <div class="flex  gap-[10px]  bg-blue-400 px-[20px] py-[10px] my-[2px] text-white">
         <div class="icon">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                 class=" w-[20px] h-[20px] text-white">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
             </svg>
         </div>
         <div class=""><a href="">Dog Foot</a></div>
         
     </div>
  </li>
  <li class="">
  <div class="flex  gap-[10px]  bg-blue-400 px-[20px] py-[10px] my-[2px] text-white">
      <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              class=" w-[20px] h-[20px] text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
      </div>
      <div class=""><a href="">Pet Treats</a></div>
  </div>
</li>
</ul>
        </div>
        <div class="basis-5/6">
        
        <div class="Product grid grid-cols-3 ">
       
          ${product.map((item) => {
        return /*html*/`
                <div class=" border-2 w-[350px] h-[550px] mb-[50px] pt-[10px]">
                    <img class="ml-[25px]  w-[300px] h-[300px]"
                        src="${item.image}"
                        alt="">
                        <div class=" ml-[25px]">
                        <h3 class="  font-medium text-[20px] py-[10px]">${item.title}</h3>
                        <p class=" mb-[20px] mr-[30px]">Nutrisource Best Dry Pet Food,Custom Beef Dry Pet Food for cat</p>
                        <a class="text-white no-underline bg-blue-500 py-[8px] px-[30px]  rounded-lg" href="/project/${item.id}">Show detail</a>
                        </div>  
                 </div>
             `
    }).join("")}
            
          

</div></div>
      </div>
</main>
  
     ${Footer()}
    
            `
}

export default ProjectPage