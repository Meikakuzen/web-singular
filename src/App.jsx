import React from 'react'
import Header from './components/Header'
import Section from './components/Section'



const App = () => {
  return (
    <>
    <div className="flex justify-center">
    <Header />
    </div>
    <hr className="text-white"/>
    <div className="flex flex-row justify-around mt-3 ml-4 lg:ml-0">
      <h2 className="text-white text-lg">Música en directe</h2>
      <h2 className="text-white text-lg">Acompanyament amb bases multi-instrumentals</h2>
      <h2 className="text-white text-lg">Equip propi</h2>
    </div>
    <main>
      <Section />     
    </main>
    </>
  )
}

export default App