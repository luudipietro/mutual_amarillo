import React from "react";

import Organigram from "../../componentes/Organigram/Organigram";

const NuestraMutual = () => {
  return (
    <>
      <section className="nosotros">
        <h1> Sobre nosotros</h1>
        <div>
            <div>
        <h2>Nuestra Historia</h2>
        <p>
          La Mutual nace inspirada en más de tres décadas de trabajo, compromiso
          y desarrollo comunitario que dieron forma al Club Educador de Futbol
          Social y Cultural 18, fundado en 1989. Esa trayectoria, marcada por la
          formación de miles de chicos y familias tucumanas, hoy se proyecta en
          una nueva etapa que amplía su alcance a toda la comunidad. La mutual
          se crea como una entidad independiente, con identidad y objetivos
          propios, pero con la misma esencia que impulsó al club: promover el
          bienestar, la participación y el crecimiento conjunto.
        </p>
        </div>
        <div>
        <h2>Nuestros Valores</h2>
        <p>
          Nuestros Valores Creemos en los vínculos que se construyen con
          honestidad, compromiso y cercanía. Confianza: la base de todo proyecto
          que perdura. Solidaridad: ayudarnos entre todos para seguir creciendo.
          Transparencia: cada acción, con responsabilidad y claridad. Cercanía:
          estar presentes, escuchar y acompañar. Compromiso social: trabajar por
          una comunidad más unida y justa.
        </p>
        </div>
        </div>
      </section>
      

      <section className="organigrama">
        <h2>Nuestra Estructura</h2>
        <Organigram/>
      </section>
     
    </>
  );
};

export default NuestraMutual;
