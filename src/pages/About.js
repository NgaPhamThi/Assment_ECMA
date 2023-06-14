import Header from "../components/header"
import Footer from "../components/footer"
const AboutPage = () => {
    return /*html*/`
        ${Header()}
        <main>
        <div class="banner">
        <img src="https://haisenpetfood.com/wp-content/uploads/2022/11/01-banner-%E5%B7%A5%E5%8E%82.jpg" alt="">
        </div>
        <div class="row grid grid-cols-2 gap-[30px] my-[100px] mx-[80px]">
        <div class="image">
          <img class=" w-[600px] h-[700px]" src="https://haisenpetfood.com/wp-content/uploads/2022/11/our-company%EF%BC%88520x640%EF%BC%89.jpg" alt="">
        </div>
        <div class="text pt-[30px]">
          <h2 class="mb-[20px] text-[40px] font-bold">OUR COMPANY</h2>
          <p class="text-[20px]">Haisen Huachong Import and Export (Zhuozhou) Co., Ltd. was established on September 27, 2018. It is a company
            specializing in the production and sales of pet products. Including pet food, pet cleaning products, pet
            supplies, etc. The products are sold to more than 50 countries and regions all over the world.
            The company’s pet food factory covers an area of 500 acres. It is a modern pet food production enterprise
            integrating scientific research, production, and sales. It has a scientific quality management system, perfect
            production, research and development, sales, and testing systems. The company has a strong technical force and
            strict enterprise management. It also employs experts in the pet food industry, and also communicates and
            cooperates with well-known foreign companies in the pet industry for continuous innovation and development. Thus
            it forms the company independent research and development, evaluation, and testing system. The company has built
            a new modern production workshop, and the first phase has an annual production capacity of 50,000 tons of pet
            food.</p>
            <div class="flex gap-[30px]">
            <div class="">
              <ul class="flex gap-[20px] m-[20px]">
                <li class=" text-white bg-yellow-600 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </li>
                <li>Professional Specialist</li>
              </ul>
              <ul class="flex gap-[20px] m-[20px]">
                <li class=" text-white bg-yellow-600 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </li>
                <li>Precise Builders</li>
              </ul>
            </div>
            <div class="">
              <ul class="flex gap-[20px] m-[20px]">
                <li class=" text-white bg-yellow-600 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </li>
                <li>Brilliant Ideas</li>
              </ul>
              <ul class="flex gap-[20px] m-[20px]">
                <li class=" text-white bg-yellow-600 rounded-full"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </li>
                <li>24/7 Assiatance</li>
              </ul>
            </div>
          </div>
              </div>
        </div>
        <div class=" bg-slate-100 py-[80px] ">
            <div class=" mb-[80px] mx-[80px]">
                <h3 class=" font-bold text-[40px]">What We Offer</h3>
                <p class=" text-[18px]">We are always aiming to exceed customer expectations and provide creative solutions to meet any kind of demand. Keeping up with the emerging trends, market needs and combining them with our technical and creative expertise.</p>
            </div>
            <div class="grid grid-cols-3 gap-[30px] mx-[80px]">
                <div class="np-About-colum-div">
                    <img class="np-about-colum-img" src="https://haisenpetfood.com/wp-content/uploads/2022/11/%E4%B8%89%E5%BC%A0%E5%B0%8F%E5%9B%BE-%E4%BA%BA.jpg" alt="">
                    <div class=" np-about-colum-div-text">
                        <h3 class=" np-about-colum-h3-text">Quality Service</h3>
                        <p  class="np-about-colum-p-text">Haisen has a passionate team who work passionately to provide customers with the best custom pet food solutions and innovative problem-solving for customers.</p>
                    </div>
                    
                </div>
                <div class="np-About-colum-div">
                    <img class="np-about-colum-img" src="https://haisenpetfood.com/wp-content/uploads/2022/11/%E4%B8%89%E5%BC%A0%E5%B0%8F%E5%9B%BE-%E5%AE%9A%E5%88%B6%E5%8C%85%E8%A3%85.jpg" alt="">
                    <div class="np-about-colum-div-text">
                        <h3 class=" np-about-colum-h3-text">Packaging Customization</h3>
                        <p class="np-about-colum-p-text">Based on customer requirements, regular belonging packaging bags,such as stand up bags,4 side seal bags,flat bottom bags,ect.</p>
                    </div>
                   
                </div>
                <div class="np-About-colum-div">
                    <img class="np-about-colum-img" src="https://haisenpetfood.com/wp-content/uploads/2022/11/%E4%B8%89%E5%BC%A0%E5%B0%8F%E5%9B%BE-%E8%AF%81%E4%B9%A6.jpg" alt="">
                    <div class="np-about-colum-div-text">
                        <h3 class=" np-about-colum-h3-text">Strength Certification</h3>
                        <p class="np-about-colum-p-text">Our capabilities in production guarantee the safety and satisfying results of your OEM/ODM products.</p>
                    </div>
                    
                </div>
            </div>

        </div>




        <div class=" py-[80px] ">
            <div class=" mb-[80px] mx-[80px]">
                <h3 class="  font-bold text-[40px]">Our Expert Team</h3>
                <p class=" text-[18px]">We have a professional R&D team with more than 20 years of experience!</p>
            </div>
            <div class="grid grid-cols-3 gap-[30px] mx-[80px]">
                <div class="np-About-colum-div">
                    <img class="np-about-colum-img-1" src="https://haisenpetfood.com/wp-content/uploads/2022/11/400x480%E4%B8%9A%E5%8A%A1%E7%85%A7%E7%89%87-lotus.jpg" alt="">
                    <div class=" np-about-colum-div-text-1">
                        <h3 class=" np-about-colum-h3-text">Lotus</h3>
                        <button class=" border-[1px] px-[15px] py-[5px] rounded-lg bg-yellow-500">Sales Manager</button>
                    </div>
                    
                </div>
                <div class="np-About-colum-div">
                    <img class="np-about-colum-img-1" src="https://haisenpetfood.com/wp-content/uploads/2022/11/400x480%E4%B8%9A%E5%8A%A1%E7%85%A7%E7%89%87-harris.jpg" alt="">
                    <div class="np-about-colum-div-text-1">
                        <h3 class=" np-about-colum-h3-text">Summer</h3>
                        <button class=" border-[1px] px-[15px] py-[5px] rounded-lg bg-yellow-500">Sales Manager</button>
                    </div>
                   
                </div>
                <div class="np-About-colum-div">
                    <img class="np-about-colum-img-1" src="https://haisenpetfood.com/wp-content/uploads/2022/11/400x480%E4%B8%9A%E5%8A%A1%E7%85%A7%E7%89%87-summer.jpg" alt="">
                    <div class="np-about-colum-div-text-1">
                        <h3 class=" np-about-colum-h3-text">Harris</h3>
                        <button class=" border-[1px] px-[15px] py-[5px] rounded-lg bg-yellow-500">Sales Manager</button>
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

export default AboutPage