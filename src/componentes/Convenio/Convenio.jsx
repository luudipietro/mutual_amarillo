import React from 'react'
import "./Convenio.css"

const Convenio = ({ title, imageUrl }) => {
  return (
    <div className="convenio">
    <a href="#">
      {imageUrl && <img src={`${import.meta.env.BASE_URL}/images/${imageUrl}`} alt={title} className="convenio-image" />}
    </a>
    </div>

  )
}

export default Convenio;