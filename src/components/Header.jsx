import React from 'react'

const Header = () => {
  return (
    <>
    <header className="container  sm:ml-11 justify-center mt-3 mb-3 flex-wrap flex-col gap-3 inline-block">
      <h1 className="text-8xl text-white text-center">SINGULAR </h1>
      <p className="text-6xl text-white text-center ml-8">Jazz en viu</p> 
      <p className="text-white text-3xl text-center ml-8">+34 689593263</p>
    </header>
    <hr className="border-white border-solid border-2 ml-10 mr-10" />
    </>
  
  )
}

export default Header