import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"

export function Header() { 
    return(
        <header className="flex items-center justify-center !pt-6 bg-black">
            <Link to="/"><img src={Logo}  className="!p-4 w-[150px] h-auto"/></Link>
        </header>
    )
}