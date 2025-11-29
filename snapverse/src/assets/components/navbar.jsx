import React from 'react'

const   Navbar = () => {
  return (
    <nav className = "w-full bg-stone-500 text-white px-20 flex text-white p-9 flex items-center">
      <h1 className = "text-6xl font-bold tracking-wide">
            snapverse
      </h1>
      {/*Buttons*/}
      <div className ="flex gap-4 ml-auto">
        <button className = " px-5 py-2 text-amber-50 font-sans rounded-3xl text-4xl font-bold rounded-2xl hoveer:bg-gray-200">
          LOGIN
        </button>
      </div>
    </nav>
  )
}

export default Navbar
