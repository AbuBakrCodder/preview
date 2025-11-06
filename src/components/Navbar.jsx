import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <nav className="bg-[#001d3d] w-[300px] text-white h-[99.9vh] px-2 py-5 fixed top-0 left-0 z-10">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                    <NavLink to="/" className="text-2xl font-semibold"><i className="fa-solid fa-desktop"></i> Dashboard</NavLink>
                </div>
                <h2 className="text-lg font-semibold uppercase">Entities</h2>
                <ul className="flex flex-col gap-2">
                    <li><NavLink to="/" className="text-xl font-semibold transition-all hover:text-blue-300"><i className="fa-solid fa-border-all"></i> Users</NavLink></li>
                    <li><NavLink to="/products" className="text-xl font-semibold transition-all hover:text-blue-300"><i className="fa-solid fa-border-all"></i> Products</NavLink></li>
                    <li><NavLink to="#" className="text-xl font-semibold transition-all hover:text-blue-300"><i className="fa-solid fa-border-all"></i> Categories</NavLink></li>
                    <li><NavLink to="#" className="text-xl font-semibold transition-all hover:text-blue-300"><i className="fa-solid fa-border-all"></i> Orders</NavLink></li>
                    <li><NavLink to="#" className="text-xl font-semibold transition-all hover:text-blue-300"><i className="fa-solid fa-border-all"></i> Reviews</NavLink></li>
                    <li><NavLink to="#" className="text-xl font-semibold transition-all hover:text-blue-300"><i className="fa-solid fa-border-all"></i> Promo_Codes</NavLink></li>
                    <li><NavLink to="#" className="text-xl font-semibold transition-all hover:text-blue-300"><i className="fa-solid fa-border-all"></i> Change Paswords</NavLink></li>
                    <li><NavLink to="#" className="text-xl font-semibold transition-all hover:text-blue-300"><i className="fa-solid fa-border-all"></i> API docs</NavLink></li>
                </ul >
            </div>
        </nav>
    )
}

export default Navbar

