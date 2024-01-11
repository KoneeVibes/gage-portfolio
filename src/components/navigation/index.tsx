import { navlinks } from "../../config";
import { HashLink } from 'react-router-hash-link';
import { Logo } from "../../assets";
import { Nav } from "./styled";
import { BaseButton } from "../button";
import { Menu } from "../button/menu";
import { useEffect, useContext } from "react";
import { Context } from "../../context";

export const Navbar: React.FC<{}> = () => {
    const { openMenu } = useContext(Context)
    useEffect(() => {
        if (openMenu) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "visible"
        }
    }, [openMenu])
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
                    zIndex: 10,
                }}
            >
                Let's talk
            </BaseButton>
            <Menu />
        </Nav >
    )
}