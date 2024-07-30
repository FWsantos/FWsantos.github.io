import "./style.css"

function About(params) {
  return (
    <section className="flex space-x-[10rem]">
      <div>
        <p>
          Olá, meu nome é Wesley.
        </p>
        <p>
          Sou desenvolvedor de software e estou sempre em busca de novos desafios. 
        </p>
      </div>
      <div className="my-photo">
        <img className="rounded-lg" src="/src/assets/perfil.png" alt="Foto do Wesley"/>
      </div>
    </section>
  )
}

export default About
