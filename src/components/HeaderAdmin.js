const HeaderAdmin = () => {
    return `
    <header class=" bg-blue-950  text-white h-[80px] px-[80px] py-[20px] uppercase" >
        <ul class=" flex gap-[100px] justify-start items-center">
            <li><a href="/admin/project">Admin</a></li>
            <li><a href="/admin/project/add">Add</a></li>
        </ul>
    </header>
    
    `
}

export default HeaderAdmin;