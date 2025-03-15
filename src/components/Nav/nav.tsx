import { Link } from "react-router-dom";

export function Nav(){
    return (
        <ul className="flex gap-3 uppercase">
          <Link to="/sobre">
             <li className="text-md text-primary font-bold hover:cursor-pointer hover:text-active">Sobre</li>
          </Link>
          <Link to="/contato">
             <li className="text-md text-primary font-bold hover:cursor-pointer hover:text-active">Contato</li>
          </Link>
        </ul>
    )
}