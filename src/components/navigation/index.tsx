import { navlinks } from "../../config";
import { HashLink } from 'react-router-hash-link';
import { Logo } from "../../assets";
import { Nav } from "./styled";
import { BaseButton } from "../button";
import { Menu } from "../button/menu";
import { useEffect, useContext } from "react";
import { Context } from "../../context";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Navbar: React.FC<{ footerRef?: React.MutableRefObject<HTMLElement | null> }> = ({ footerRef }) => {
    const { openMenu, setOpenMenu } = useContext(Context);
    const navigate = useNavigate();
    useEffect(() => {
        if (openMenu) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "visible"
        }
    }, [openMenu])
    const handleLogoClick = () => {
        setOpenMenu(false);
        navigate("/");
    }
    return (
        <Nav>
            <Logo
                className="logo"
                onClick={handleLogoClick}
            />
            <ul>
                {navlinks.map((navlink, k) => {
                    return (
                        <li key={k}>
                            <HashLink
                                to={navlink.link}
                                smooth={true}
                                onClick={() => setOpenMenu(false)}
                                className={navlink.name}
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
                onClick={() => footerRef?.current?.scrollIntoView({ behavior: "smooth" })}
            >
                <Typography variant={"button"}>
                    Let's talk
                </Typography>
            </BaseButton>
            <Menu />
        </Nav >
    )
}