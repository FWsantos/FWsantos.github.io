import NavBarItem from './NavBarItem.jsx';
import "./style.css"

export default function Header(){
  return (
    <header>
      <nav className="flex items-center gap-[4vw] flex-row justify-center navbar">
        <ul className="list-none m-0 p-0">
          <NavBarItem text="Sobre" link="/home" actived={true}></NavBarItem>
          <NavBarItem text="Projetos" link="/about" actived={false}></NavBarItem>
          <NavBarItem text="Contato" link="/contact" actived={false}></NavBarItem>
        </ul>
      </nav>
    </header>
  )
}
