const Navbar = () =>{
    return (
< nav className="w-screen bg-black text-4xl font-bold flex items-center">
<h1 className="text-5xl text-cyan-50 font-bold">
    snapverse
</h1>

<div className="flex gap-4">
    <button className="hover:text-cyan-400">
        feed
    </button>

    <button className="bg-cyan-500 text-blue-50 py-2">
sign up
    </button>

    <button className="border border-amber-50 px-4 py-2 rounded-lg">
        sign in
    </button>
</div>




</nav>

    )
};
export default Navbar;