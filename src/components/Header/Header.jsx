import NavBarItem from './NavBarItem.jsx';
import "./style.css"
import GithubIcon from "../../assets/github-mark.png"
import LinkedinIcon from "../../assets/linkedin-50.png"

export default function Header(){
  return (
    <header className="flex flex-wrap items-center justify-between mx-2 md:mx-4">
      <h1 className="text-center text-2xl md:text-3xl font-bold py-8 w-1/4">Wesley Santos</h1>
      <nav className="flex items-center gap-2 md:gap-[4vw] flex-row justify-center navbar w-full md:w-1/2">
        <ul className="list-none m-0 p-0">
          <NavBarItem text="Sobre" link="/about" actived={true}></NavBarItem>
          <NavBarItem text="Projetos" link="/projects" actived={false}></NavBarItem>
          <NavBarItem text="Contato" link="/contact" actived={false}></NavBarItem>
        </ul>
      </nav>
      <div className="w-1/4 flex space-x-6">
        <a href="https://www.linkedin.com/in/wesley-santos-020aa61b1/" target="_blank">
          <img className="size-5 md:size-7" src={LinkedinIcon} alt="linkedin"/>
        </a>
        <a href="https://github.com/FWsantos" target="_blank">
          <img className="size-5 md:size-7" src={GithubIcon} alt="github"/>
        </a>
      </div>
    </header>
  )
}
