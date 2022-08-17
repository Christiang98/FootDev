import React from "react"
import "./FormFeedback.css"

export const FormFeedback = () => {
  return (
    <>
      <div>
        <div className='logoFeedback'>
          <img className='imgLogo' src="https://i.postimg.cc/jqH6qFZx/ballch.png" />
          <h3 className='titleLogo'>FootDev</h3>
        </div>
        <h1 className='titleFeedback'>Necesitamos tu Feedback</h1>
        <h2 className="text">¿Encontraste un error? ¿Tenes una sugerencia? Nos interesa tu opinion, por favor dejalas en este formulario asi podemos mejorar!</h2>
        <form action="https://formsubmit.co/chrisu9855@gmail.com" method="POST" target="_blank" className="containerFormFeedback">
          <input className="inputFeedback" type="text" name="Sugerir seccion" placeholder="Sugerir seccion"  required></input>
          <input className="inputFeedback" type="text" name="Sugerir club" placeholder="Sugerir club"required></input>
          <input className="inputFeedback" type="text" name="Opinion de la pagina" placeholder="Opinion de la pagina" required></input>
          <button className="submitFeedback" type="submit">Enviar</button>
        </form>
      </div>
    </>
  )
}

export default FormFeedback