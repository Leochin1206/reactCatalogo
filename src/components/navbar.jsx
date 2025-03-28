import { Link } from "react-router-dom";
import home from "../assets/home.svg"
import movie from "../assets/theaters.svg"
import person from "../assets/person.svg"

export function Navbar() {

    const linkNav = [
        {
            img: home,
            link: "/"
        },
        {
            img: movie,
            link: "/Catalogo"
        }, 
        {
            img: person,
            link: "/Perfil"
        }
    ];

    return(
        <nav>
            <div className="flex items-center justify-center !p-2 !pt-3 gap-10 bg-black">
                {linkNav.map((icon, index) => (
                    <div key={index} className="transition ease-out duration-500 !p-1 border-b-3 border-b-black hover:border-b-[#D81F26]">
                        <Link to={icon.link}><img src={icon.img} className="w-[40px] h-auto"/></Link>
                    </div>
                ))}
            </div>
        </nav>
    )
}