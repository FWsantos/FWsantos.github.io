import "./style.css"

function About(params) {
  return (
    <section className="flex space-x-[10rem]" id="about">
      <div className="head-line space-y-8 content-center">
        <p className="name text-2xl">
          Olá, meu nome é Wesley.
        </p>
        <p className="presentation text-3xl">
          Sou desenvolvedor de software e aberto a novas oportunidades.
        </p>
      </div>
      <div className="my-photo">
        <img className="rounded-lg" src="/src/assets/perfil.png" alt="Foto do Wesley"/>
      </div>
    </section>
  )
}

export default About
