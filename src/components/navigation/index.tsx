import { navlinks } from "../../config";
import { HashLink } from 'react-router-hash-link';
import { Logo } from "../../assets";
import { Nav } from "./styled";
import { BaseButton } from "../button";
import { Menu } from "../button/menu";

export const Navbar: React.FC<{}> = () => {
    return (
        <Nav>
            <Logo className="logo" />
            <ul>
                {navlinks.map((navlink, k) => {
                    return (
                        <li key={k}>
                            <HashLink
                                to={navlink.link}
                                smooth={true}
                            >
                                {navlink.name}
                            </HashLink>
                        </li>
                    )
                })}
            </ul>
            <BaseButton
                variant="contained"
                className="actionButton"
                disableElevation={true}
                sx={{
                    borderRadius: "31px",
                    fontSize: "20px",
                }}
            >
                Let's talk
            </BaseButton>
            <Menu />
        </Nav >
    )
}