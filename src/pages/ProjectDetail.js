import { getAll } from "../api/project"
import { useEffect, useState } from "../lib"
import Header from "../components/header";
import Footer from "../components/footer";
const ProjectDetailPage = ({ id }) => {
    console.log(typeof id);
    const [products, setProduct] = useState([])
    useEffect(() => {
        getAll().then(({ data }) => setProduct(data))

    }, [])
    console.log(products);
    const product = products.find((item) => item.id === +id)
    if (!product) return null

    return /*html*/`
     ${Header()}
    <main>
    <div class="banner">
        <img src="https://haisenpetfood.com/wp-content/uploads/2022/11/01-banner-%E5%8E%9F%E6%96%99.jpg"
        alt="">
    </div>

    <div class="flex mt-[100px]">
    <div class="slider basis-1/6 pl-[50px]">
        
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
    <div class=" basis-3/6">
          <div class=" ml-[70px]">
                <div class=" w-[550px] h-[600px]  text-center">
                    <img src="${product.image}" alt="">
                </div>
                <ul class=" flex gap-[20px] pl-[60px]">
                    <li><img class=" w-[100px] h-[100px]" src="${product.image}" alt=""></li>
                    <li><img class=" w-[100px] h-[100px]" src="https://haisenpetfood.com/wp-content/uploads/2022/11/93A3962-100x100.jpg" alt=""></li>
                    <li><img class=" w-[100px] h-[100px]" src="https://haisenpetfood.com/wp-content/uploads/2022/11/93A3723-100x100.jpg" alt=""></li>
                    <li><img class=" w-[100px] h-[100px]" src="https://haisenpetfood.com/wp-content/uploads/2022/11/93A3721-100x100.jpg" alt=""></li>
                </ul>
                
            </div>
    </div>
    <div class=" basis-2/6">
        <h3 class=" text-[30px] mb-[30px] font-bold">${product.title}</h3>
        <p class=" text-[20px]">${product.description}</p>
        </div>

   </div>
   <div class=" my-[150px] pl-[380px]">
             <hr class="text-[4px] text-black pb-[20px]">
            <div class=" pb-[30px]">
            <h3 class=" font-bold text-[30px]">Product Specifications</h3>
            </div>
            <div class="">
            <table class=" border-2 w-[1080px]">
                
                <thead>
                <tr>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td class=" border-2 py-[10px] pl-[20px]">Item Type:</td>
                    <td class=" border-2 py-[10px] pl-[20px]">Natural sea fish cat food</td>
                </tr>
                <tr>
                    <td class=" border-2 py-[10px] pl-[20px]">Life stage:</td>
                    <td class=" border-2 py-[10px] pl-[20px]">Puppy & kitten, Adult, All</td>
                </tr>
                <tr>
                    <td class=" border-2 py-[10px] pl-[20px]">Supply Ability</td>
                    <td class=" border-2 py-[10px] pl-[20px]">30 Ton/Tons per Day</td>
                </tr>
                <tr>
                    <td class=" border-2 py-[10px] pl-[20px]">Main Material:</td>
                    <td class=" border-2 py-[10px] pl-[20px]">Sea fish</td>
                </tr>
                <tr>
                    <td class=" border-2 py-[10px] pl-[20px]">Logo:</td>
                    <td class=" border-2 py-[10px] pl-[20px]">Customized Logo</td>
                </tr>
                <tr>
                    <td class=" border-2 py-[10px] pl-[20px]">Feature:</td>
                    <td class=" border-2 py-[10px] pl-[20px]">Eco-Friendly, Stocked</td>
                </tr>
                <tr>
                    <td class=" border-2 py-[10px] pl-[20px]">Use:</td>
                    <td class=" border-2 py-[10px] pl-[20px]">cat</td>
                </tr>
                </tbody>
            </table>
            </div>

            <div class="">
                <h3 class=" font-bold text-[30px] my-[50px]">Product Display</h3>
                <div class="">
                    <img src="https://haisenpetfood.com/wp-content/uploads/2022/11/%E8%AF%A6%E6%83%85%E9%A1%B5-%E5%85%A8%E4%BB%B7%E6%88%90%E5%B9%B4%E7%8C%AB%E7%B2%AE%E7%89%9B%E8%82%89%E5%91%B3%EF%BC%88%E5%9C%86%E5%BD%A2%EF%BC%89_01.jpg" alt="">
                </div>
                <div class="">
                    <img src="https://haisenpetfood.com/wp-content/uploads/2022/11/%E8%AF%A6%E6%83%85%E9%A1%B5-%E7%8C%AB%E7%B2%AE_05-894x1024.jpg" alt="">
                </div>
                <div class="">
                    <img src="https://haisenpetfood.com/wp-content/uploads/2022/11/%E8%AF%A6%E6%83%85%E9%A1%B5-%E7%8C%AB%E7%B2%AE_06.jpg" alt="">
                </div>
                <div class="">
                    <img src="https://haisenpetfood.com/wp-content/uploads/2022/11/%E8%AF%A6%E6%83%85%E9%A1%B5-%E7%8C%AB%E7%B2%AE_07.jpg" alt="">
                </div>
            </div>

    </div>
    <div class="grid grid-cols-4 gap-[20px] mx-[60px]">
             <div class="text-center border-2 w-[320px] h-[400px] mb-[50px] cursor-pointer">
                    <img class=" w-[300px] h-[300px]"
                      src="https://haisenpetfood.com/wp-content/uploads/2022/11/%E4%B8%BB%E5%9B%BE-%E9%B1%BC%E8%82%89-300x300.jpg"
                      alt="">
                    <h3 class=" font-bold text-[18px] py-[10px] px-[10px]">Hot Selling OEM ODM Multiple Flavors Pet Food Cat Dog Snack Cans</h3>
            </div> 
            <div class="text-center border-2 w-[320px] h-[400px] mb-[50px] cursor-pointer">
                    <img class=" w-[300px] h-[300px]"
                      src="https://haisenpetfood.com/wp-content/uploads/2022/11/%E4%B8%BB%E5%9B%BE-%E6%80%BB-300x300.jpg"
                      alt="">
                    <h3 class=" font-bold text-[18px] py-[10px] px-[10px]">18 Grams Hot Selling Beef Flavor Pet Dog Cat Snacks For Cat Food Wet</h3>
            </div> 
            <div class="text-center border-2 w-[320px] h-[400px] mb-[50px] cursor-pointer">
                    <img class=" w-[300px] h-[300px]"
                      src="https://haisenpetfood.com/wp-content/uploads/2022/11/%E8%B0%B7%E6%AD%8C%E7%8B%97%E7%B2%AE%E4%B8%BB%E5%9B%BE%E7%B2%89%E8%89%B2-%E7%89%9B%E8%82%89%E5%91%B3%EF%BC%88%E5%9C%86%E5%BD%A2%EF%BC%89.jpg"
                      alt="">
                    <h3 class=" font-bold text-[18px] py-[10px] px-[10px]">Nutrisource Best Dry Pet Food,Custom Beef Dry Pet Food For Dog</h3>
            </div> 
            <div class="text-center border-2 w-[320px] h-[400px] mb-[50px] cursor-pointer">
                    <img class=" w-[300px] h-[300px]"
                      src="https://haisenpetfood.com/wp-content/uploads/2022/11/%E7%8C%AB%E7%B2%AE%E4%B8%BB%E5%9B%BE-%E5%85%A8%E4%BB%B7%E7%8C%AB%E7%B2%AE%E7%9B%8A%E7%94%9F%E8%8F%8C%EF%BC%88%E5%BF%83%E5%BD%A2%EF%BC%89.jpg"
                      alt="">
                    <h3 class=" font-bold text-[18px] py-[10px] px-[10px]">Natural Raw Materials Multiple Shapes Pet Cats Like Nutritious Balanced With Probiotics</h3>
            </div> 
    </div>

</main>

${Footer()}
        
    `
}


export default ProjectDetailPage