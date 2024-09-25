import { Link, NavLink } from "react-router-dom";

const AppHeader = () => {
    return (
        <header className="flex justify-around items-center h-20 bg-slate-50 border-b-2">
              <h1 className="text-3xl italic underline font-semibold">Shopping Cart</h1>
              <nav>
            <ul className="nav flex gap-10">
                <li>
                 <NavLink to="/" className={({ isActive }) => {
                   return isActive
                       ? "underline shadow-lg"  : "";
                   }}
                     >
                     Home
                    </NavLink>
                </li>
                <li>
                <NavLink to="/about"className={({ isActive }) => {
                            return isActive
                                ? "underline shadow-lg" : "";
                        }}
                        >
                         About
                        </NavLink>
                    
                </li>
                <li>
                    <NavLink to="/contact"className={({ isActive }) => {
                            return isActive
                                ? "underline shadow-lg" :  "";
                        }}
                        >
                        Contact
                        </NavLink>
                </li>
                <li>
                    <NavLink to="products"className={({ isActive }) => {
                            return isActive
                                ? "underline shadow-lg" : "";
                        }}
                        >
                        Products
                        </NavLink>
                </li>
                <li>
                    <NavLink to="/cart"className={({ isActive  }) => {
                            return isActive
                                ? "underline shadow-lg" : "";
                        }}
                        >
                        Cart
                        </NavLink>
                </li>
            </ul>
             </nav>
        </header>
    );    
  
};
export default AppHeader;