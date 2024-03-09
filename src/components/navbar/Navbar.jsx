import { Link } from "react-router-dom";



const Navbar = () => {
    // navList Data
    const navList = (
        <ul className="flex space-x-3 text-white font-medium text-md px-5 mx-5 ">
            {/* Home */}
            <li className="px-3 mt-1">
                <Link to={'/'}>Home</Link>
            </li>

            {/* All Product */}
            <li className="px-3 mt-1">
                <Link to={'/allproduct'}>Our Pets</Link>
            </li>

            {/* Signup */}
            <li >
            <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><Link to={'/signup'}>Signup</Link></button>
                
            </li>

           

            {/* Admin */}
            {/* <li>
                <Link to={'/'}>Admin</Link>
            </li> */}

            {/* logout */}
            <li >
            <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            <a href=""></a>
            Login</button>
            </li>

            {/* Cart */}
    

            <li className="px-3 mt-1 ">
            
                <Link to={'/cart'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />

                    </svg>
                    

                    
                </Link>
            </li>
        </ul>
    )
    return (
        <nav className=" sticky top-0 bg-brown-600">
            {/* main  */}
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
                {/* left  */}
                <div className="left py-3 lg:py-0">
                    <Link to={'/'}>
                    <h2 className=" font-bold text-white text-2xl text-center">Petmate</h2>
                    </Link>
                </div>

                {/* right  */}
                <div className="right flex justify-center mb-4 lg:mb-0">
                    {navList}
                </div>

        
            </div>
        </nav>
    );
}

export default Navbar;