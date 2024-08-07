import "./style.css"
import Perfil from "../../assets/perfil.png"

function About() {
  return (
    <section className="flex flex-col md:flex-row space-x-[10rem]" id="about">
      <div className="head-line space-y-8 content-center">
        <p className="name text-2xl">
          Olá, meu nome é Wesley.
        </p>
        <p className="presentation text-3xl">
          Sou desenvolvedor de software e aberto a novas oportunidades.
        </p>
      </div>
      <div className="my-photo">
        <img className="rounded-lg" src={Perfil} alt="Foto do Wesley"/>
      </div>
    </section>
  )
}

export default About
