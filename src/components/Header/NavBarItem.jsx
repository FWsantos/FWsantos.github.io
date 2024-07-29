export default function NavBarItem({text, link, actived}) {
  return (
    <li className="float-left">
      <a className="block text-center px-3.5 py-4" href="#">
        {text}
      </a>
    </li>
  );
}
