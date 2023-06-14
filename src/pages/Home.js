import Header from '../components/header';
import Footer from '../components/footer';
import { getAll } from '../api/project';
import { useEffect, useState } from '../lib';
const HomePage = () => {
  const [product, setProduct] = useState([])
  useEffect(() => {
    getAll().then(({ data }) => {
      return setProduct(data)
    })
  }, [])
  console.log(product)
  return /*html*/`
     ${Header()}
        <main class="mb-[100px]">
            <div class="banner">
                <img src="https://haisenpetfood.com/wp-content/uploads/2022/11/01-banner-oem-odm.jpg" alt="">
            </div>
            <div class=""
              <div class="">
                <img src="https://haisenpetfood.com/wp-content/uploads/2022/11/02-%E7%94%B5%E8%AF%9D-1536x488.jpg" alt="">
              </div>
              <div class=" text-center py-[80px] px-[350px]">
                  <h2 class=" text-[40px] font-medium">OUR PRODUCTS</h2>
                  <p class="text-[18px]">We provide multi-product consolidation services, according to the degree of customization, the minimum order quantity is determined. meet your multi-category procurement needs.</p>
              </div>
      
              <div class="Product grid grid-cols-3 pl-[100px]">
                  ${product.map((item) => {
    return/*html*/` 
                      <div class="text-center border-2 w-[400px] h-[550px] mb-[50px]">
                        <img class=" w-[350px] h-[350px]"
                          src="${item.image}"
                          alt="">
                        <h3 class=" font-medium text-[20px] py-[10px]">${item.title}</h3>
                        <p class="px-[50px] mb-[20px]">Nutrisource Best Dry Pet Food,Custom Beef Dry Pet Food for cat</p>
                        <a class="text-white no-underline bg-blue-500 py-[8px] px-[30px] rounded-lg" href="/project/${item.id}">Show detail</a>
                    </div>  
                   
                    `
  }).join("")}
  </div>
            <div class="grid grid-cols-2 my-[100px] gap-[100px] px-[100px]">
                      <div class=" border-2">
                        <img src="https://img.websosanh.vn/v10/users/review/images/2h4j2gk4kf53h/meo-co-duoc-an-thuc-an-cho-cho-khong.jpg?compress=85" alt="">
                      </div>
                      <div class=" pt-[50px]">
                        <h2 class="text-[40px] pb-[20px]">OEM ODM FACTORY DISPLAY</h2>
                        <ul>
                          <li class="text-[20px] pb-[20px]">300000+square meters of factory</li>
                          <li class="text-[20px] pb-[20px]">The annual output of 60000+ tons</li>
                          <li class="text-[20px] pb-[20px]">Modern automatic production line</li>
                          <li class="text-[20px] pb-[20px]">High-quality raw materials</li>
                          <li class="text-[20px] pb-[20px]">Advanced production technology</li>
                        </ul>
                        
                        <button class=" border-[1px] px-[15px] py-[5px] rounded-lg bg-yellow-500">View More</button>
                      </div>
                   </div>
                   <div class="">
                   <img src="https://haisenpetfood.com/wp-content/uploads/2022/11/06-%E9%80%9A%E6%A0%8F-1536x410.jpg" alt="">
                   </div>
      
      
                   <div class=" my-[150px] mx-[80px]">
                      <div class="text-center mb-[80px] text-[30px]"> <h2>LATEST NEWS</h2></div>
                     
                      <div class="grid grid-cols-3 gap-[20px]">
                        <div class=" border-2 p-[30px] cursor-pointer">
                          <img class=" w-[380px] h-[250px]" src="https://haisenpetfood.com/wp-content/uploads/2022/10/07-%E6%96%87%E7%AB%A0%E5%9B%BE-%E5%B7%A5%E5%8E%82-300x202.jpg" alt="">
                            <h3 class=" my-[10px] text-[20px] font-medium">Haisen Pet Food Company Profile</h3>
                            <p>Haisen Huachong Import and Export (Zhuozhou) Co., Ltd. was established on September 27, 2018. It is a company specializing in the production and sales of</p>
                        </div>
                        <div class=" border-2 p-[30px] cursor-pointer">
                          <img class=" w-[380px] h-[250px]"  src="https://haisenpetfood.com/wp-content/uploads/2022/10/07-%E6%96%87%E7%AB%A0%E5%9B%BE-%E7%8B%97-300x202.jpg" alt="">
                            <h3 class=" my-[10px] text-[20px] font-medium">All You Need To Know About Dog Food</h3>
                            <p>All You Need To Know About Dog Food Pet owners should develop the habit of reading pet food labels and learn to decipher important information</p>
                        </div>
                        <div class=" border-2 p-[30px] cursor-pointer">
                          <img class=" w-[380px] h-[250px]"  src="https://haisenpetfood.com/wp-content/uploads/2022/10/07-%E6%96%87%E7%AB%A0%E5%9B%BE-cat-300x202.jpg" alt="">
                            <h3 class=" my-[10px] text-[20px] font-medium">10 Fruits & Veggies That Are Safe & Healthy For Your Cat</h3>
                            <p>10 Fruits & Veggies That Are Safe & Healthy For Your Cat It may come as a surprise to many that our carnivores cats don’t</p>
                      </div>
                      </div>
                    </div>
      </div>
        </main>
        <footer>
        ${Footer()}
        </footer>
        
    `
}

export default HomePage