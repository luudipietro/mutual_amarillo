import React from 'react'
import Convenio from '../Convenio/Convenio'
import "./Convenios.css"
const convenios = [
{
        id: 5,
        tittle: "CEF 18",
        description: "bla",
        imageUrl: 'cef.jpg'
    },
    {
        id: 1,
        tittle: "Bodega Don Angelo",
        description: "bla",
        imageUrl: 'bodega_angelo.jpg',     
   },
    {
        id: 2,
        tittle: "Nutricion: Tamara Petrella",
        description: "bla",
        imageUrl: 'tamara_petrella.jpg'
    },
    {
        id: 3,
        tittle: "El Quincho de Nacho",
        description: "bla",
        imageUrl: 'quincho_nacho.jpg'
    },
    {
        id: 4,
        tittle: "Academia Ingresar",
        description: "bla",
        imageUrl: 'academia_ingresar.jpg'
    },
    
    {
        id: 6,
        tittle: "Jockey Gym",
        description: "bla",
        imageUrl: 'jockey_gym.jpg'
    },
    {
        id: 7,
        tittle: "Lomas Aberturas",
        description: "bla",
        imageUrl: 'lomas_aberturas.jpg'
    },
    {
        id: 8,
        tittle: "Laboratorios Presti",
        description: "bla",
        imageUrl: 'presti_lab.jpg'
    },
    {
        id: 9,
        tittle: "Sancor Seguros",
        description: "bla",
        imageUrl: 'sancor_seguros.jpg'
    },
    {
        id: 10,
        tittle: "SV Baterias",
        description: "bla",
        imageUrl: 'sv_baterias.jpg'
    }
]

const Convenios = () => {
  return (
    <section className='convenios'>


        <div className='convenios__contenedor'>
            {convenios.map((element) => (
            <Convenio
                key={element.id}
                title={element.tittle}
                imageUrl={element.imageUrl}
            />
            ))}

        </div>



    </section>
    
  )
}

export default Convenios