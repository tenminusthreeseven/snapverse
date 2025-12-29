
import "./navbar.css";





const Navbar = () =>{
    return(
        <div className="w-screen bg-black text-amber-300 flex items-center justify-between px-8 py-4">


            <h1 className="snapverse">
                Snapverse
            </h1>



            <div className="title ">
                <button className="text-2xl text-amber-50  ">
                    feed
                </button>


                <button className="button ">
Login
                </button>
                <button className="text-2xl text-amber-50">
                    sign up
                </button>
            </div>
        </div>
    )
};
export default Navbar;