import { Link } from "react-router-dom";

export function Nav(){
    return (
      <nav className="absolute right-6 ">
          <ul className="gap-3 uppercase hidden sm:flex">
            <Link to="/portfolio">
              <li className="text-md text-primary font-bold hover:cursor-pointer hover:text-secondary transform transition duration-300">Portfólio</li>
            </Link>
            <Link to="/sobre">
              <li className="text-md text-primary font-bold hover:cursor-pointer hover:text-secondary transform transition duration-300">Sobre</li>
            </Link>
            <Link to="/depoimentos">
              <li className="text-md text-primary font-bold hover:cursor-pointer hover:text-secondary transform transition duration-300">Depoimentos</li>
            </Link>
            <Link to="/contato">
              <li className="text-md text-primary font-bold hover:cursor-pointer hover:text-secondary transform transition duration-300">Contato</li>
            </Link>
          </ul>

          <ul className="gap-3 uppercase sm:hidden flex flex-col items-end mt-70">
            <Link to="/portfolio">
              <li className="text-md text-primary font-bold hover:cursor-pointer hover:text-secondary transform transition duration-300">Portfólio</li>
            </Link>
            <Link to="/sobre">
              <li className="text-md text-primary font-bold hover:cursor-pointer hover:text-secondary transform transition duration-300">Sobre</li>
            </Link>
            <Link to="/depoimentos">
              <li className="text-md text-primary font-bold hover:cursor-pointer hover:text-secondary transform transition duration-300">Depoimentos</li>
            </Link>
            <Link to="/contato">
              <li className="text-md text-primary font-bold hover:cursor-pointer hover:text-secondary transform transition duration-300">Contato</li>
            </Link>
          </ul>
          
        </nav>
    )
}