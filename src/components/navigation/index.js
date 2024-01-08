import { navlinks } from "../../config";
import { HashLink } from 'react-router-hash-link';
import { Logo } from "../../assets";

export const Navbar = () => {
    return (
        <nav>
            <Logo />
            <ul>
                {navlinks.map((navlink, k) => {
                    return (
                        <li key={k}>
                            <HashLink
                                to={navlink.link}
                            >
                                {navlink.name}
                            </HashLink>
                        </li>
                    )
                })}
            </ul>
        </nav >
    )
}