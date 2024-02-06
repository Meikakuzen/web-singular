import React from 'react'
import Image from '../assets/guit.jpg'

const Section = () => {
  return (
    <section className="text-white text-xl mt-8 ml-3">
      <h3 className="text-xl2 font-bold mb-8 text-center md:text-2xl xl:text-4xl">Música en directe a hotels, petits locals i bars</h3>
      <div className="flex flex-col justify-center md:justify-center lg:flex-row">
        <img className="max-w-2xl" src={Image} alt="guitarra"/>
        <div className="ml-3 flex flex-col align-center xl:gap-10">
          <p className="mt-3"> El nom d'aquesta web es singular. </p> 
          <p className="mt-3">Singular ja que molts/es guitarristes, amb els anys, desenvolupem un estil singular
          que ens caracteritza i defineix, amb un sò i una manera d'abordar el diapasó amb personalitat.</p>
          <p className="mt-3">En la meva trajectòria he tingut la sort de rebre formació amb professors del Taller de Músics i d'altres músics que sense estar regularitzats 
            en escoles de renom, són grans professionals del jazz. Així i tot, la meva formació és majoritàriament autodidacta i no soc massa acadèmic.
          </p>
          <p className="mt-3">Singular perquè la formació que ofereixo és en primera persona del singular, jo mateix!</p>
          <p className="mt-3">Soc jo amb un equip portàtil (amplificador + guitarra + mp4) qui toco al damunt d'standards de jazz, amenitzant el teu local i fent gaudir al personal
          d'una vetllada inoblidable amb un o dos passes a convenir.</p>
          <p className="mt-3">Assoleixo diferents estils: standards de jazz, jazz-blues, smooth jazz, jazz fusion, chicago blues, chill out...</p>
          <p className="mt-3">Sempre a un volum agradable, d'una manera suau i dinàmica, creativa i lúdica amb l'objectiu d'acompanyar els/les assistents amb música en directe
          agradable feta amb gust i delicadesa.</p>
        </div>
      </div>
    </section>
    
  )
}

export default Section