
const Header = () => {
    return /*html*/`
    <div class="content-warper font-Karla  text-base mx-auto  bg-slate-200">
    <header class="p-6 mx-auto content-warper font-Karla  text-base  bg-slate-200">
        <nav class="flex flex-row justify-between items-center relative">
            <div class="logo basis-1/6 text-center text-2xl font-medium text-lime-700  cursor-pointer pl-[80px]">
                    <img class="" src="https://haisenpetfood.com/wp-content/uploads/2022/10/%E6%B5%B7%E6%A3%AElogo-Google-01-1024x304.png" alt="">
            </div>   
            <ul id="np-top-menu"
                class="basis-3/6 hidden lg:flex lg:items-center lg:justify-end lg:gap-20 uppercase text-sm pt-5 pr-[200px]">
                <li>
                    <a class="no-underline text-gray-500 cursor-pointer hover:tw-text-black
                    relative after:lg:tw-mt-1 after:lg:tw-absolute after:lg:tw-bottom-0  after:lg:tw-left-0 after:lg:tw-bg-life-Coffee after:lg:tw-h-0.5 after:lg:tw-w-0 hover:after:lg:tw-w-full
                    after:lg:tw-transition-all after:lg:tw-ease-out after:lg:tw-duration-300" href="/">Home Page</a>
                </li>
                <li>
                    <a class="no-underline text-gray-500 cursor-pointer hover:tw-text-black
                    relative after:lg:tw-mt-1 after:lg:tw-absolute after:lg:tw-bottom-0  after:lg:tw-left-0 after:lg:tw-bg-life-Coffee after:lg:tw-h-0.5 after:lg:tw-w-0 hover:after:lg:tw-w-full
                    after:lg:tw-transition-all after:lg:tw-ease-out after:lg:tw-duration-300" href="/about">About</a>
                </li>
                <li>
                    <a class="no-underline text-gray-500 cursor-pointer hover:tw-text-black
                    relative after:lg:tw-mt-1 after:lg:tw-absolute after:lg:tw-bottom-0  after:lg:tw-left-0 after:lg:tw-bg-life-Coffee after:lg:tw-h-0.5 after:lg:tw-w-0 hover:after:lg:tw-w-full
                    after:lg:tw-transition-all after:lg:tw-ease-out after:lg:tw-duration-300" href="/project">Project</a>
                </li>
               
            </ul>
            <ul
                class="basis-2/6 lg:basis-1/6 pt-5  flex justify-end lg:justify-start items-center ml-16 uppercase text-sm text-gray-500 font-medium">
                <li>
                    <a class="no-underline  text-gray-600 flex items-center" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class=" w-5 h-5 inline-block">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        <span class="mx-2">Cart</span>
                        <span class="text-xs text-center rounded-full px-1.5 bg-green-600 text-white">0</span>
                    </a>
                </li>
            </ul>
            <div class="basis-1/6 lg:hidden flex items-center cursor-pointer px-2 sm:px-4">
                <img id="" class="w-[40px] h-[30px]" src="./public/image/favicon/anh.jpg"></img>

            </div>
        </nav>
    </header>
</div>
    `
}

export default Header;