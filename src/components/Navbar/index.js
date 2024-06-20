import React from "react";
import {Link as LinkR } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa"
import { Bio } from "../../data/constants";

const Nav = styled.div`
    background-color: ${({ theme })=> theme.card_light};
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media screen and  (max-width:960px){
        transition: 0.8s all ease;
    }
`;

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;
`
const NavLogo = styled(LinkR)`
    width: 80%;
    padding: 0 6px;
    display: flex;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    align-items: center;
    @media screen and (max-width: 640px){
        padding: 0 0px;
    }
`
const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%,50%);
        font-size: 1.5rem;
        cursor: pointer;
        color: ${({ theme })=> theme.text_primary};
    }
`;

const NavItems = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 35px;
    list-style: none;

    @media screen and (max-width: 768px) {
    display:none;
    }
`;

const NavLink = styled.a`
    color: ${({ theme })=>theme.text_primary};
    font-weight: 500;
    text-wrap: nowrap;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    &:hover{
        color: ${({ theme })=>theme.primary};
    }
`

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100%;
    padding: 0 6px;
    @media screen and (max-width: 640px) {
        display: none;
    }
`
const GitHubButton = styled.a`
    text-decoration: none;
    color: ${({ theme })=> theme.primary};
    background-color: transparent;
    border: 1px solid ${({ theme })=>theme.primary};
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    height: 70%;
    :hover{
        background-color: ${({ theme })=>theme.primary};
        color: ${({ theme })=>theme.white};
    }

    @media screen and (max-width: 640px){
        font-size: 0.8rem;
    }
`
export const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
    `

const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: -1000px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background-color: ${({ theme })=> theme.card};
    transition: all 0.5s ease-in-out;
    transform: ${({open})=>open? 'translateY(1000px)':'translateY(0)'}; 
    border-radius: 0 0 20 20px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.3);
    opacity: ${({open})=>(open?"1":"0")};
    z-index: ${({open})=>(open?"1":"-1")};
    `

const MobileMenuLinks = styled(LinkR)`
    color: ${({theme})=>theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    & hover {
        color: ${({theme})=>theme.primary};
    }
`
const Navbar = () =>{
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    return (
    <Nav>
        <NavContainer>
            <NavLogo to="/">
            <a href="/"
                style={{
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                    marginBottom: "20",
                    cursor: "pointer",
                }}
            >
                <DiCssdeck size="3rem"/><Span>Portfolio</Span>
            </a>
            </NavLogo>
            <MobileIcon>
                <FaBars
                    onClick={()=>{
                    setOpen(!open);
                }}/>
            </MobileIcon>
            <NavItems>
                <NavLink href="#about">Sobre mi</NavLink>
                <NavLink href="#skills">Habilidades</NavLink>
                <NavLink href="#experience">Experiencia</NavLink>
                <NavLink href="#projects">Proyectos</NavLink>
                <NavLink href="#education">Educación</NavLink>
            </NavItems>
            <ButtonContainer>
                <GitHubButton
                style={{
                    padding: "10px 16px",
                    color: "white",
                    width: "max-content",
                }}
                href={Bio.github}
                target="_blank"
                >WhatsApp</GitHubButton>
            </ButtonContainer>
        </NavContainer>
        {open &&
            <MobileMenu open={open}>
                <MobileMenuLinks href="#about" onClick={()=>{setOpen(!open);}}>
                    Sobre mi
                </MobileMenuLinks>
                <MobileMenuLinks href="#skills" onClick={()=>{setOpen(!open);}}>
                    Habilidades
                </MobileMenuLinks>
                <MobileMenuLinks href="#experience" onClick={()=>{setOpen(!open);}}>
                    Experiencia
                </MobileMenuLinks>
                <MobileMenuLinks href="#projects" onClick={()=>{setOpen(!open);}}>
                    Proyectos
                </MobileMenuLinks>
                <MobileMenuLinks href="#education" onClick={()=>{setOpen(!open);}}>
                    Educación
                </MobileMenuLinks>
                <GitHubButton
                    Style={{
                        padding: '10px 16px',
                        background: `${theme.primary}`,
                        color: "white",
                        width: "max-content",
                    }}
                    href={Bio.github}
                    target="_blank">
                        WhatsApp
                    </GitHubButton>
            </MobileMenu>
        }
    </Nav>)
}

export default Navbar