import { useEffect, useState } from "react"
import { Menu } from "react-feather"

import Logo from '../assets/logo.png'


const Navbar = ()=>{
    const [active, setActive] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const activeNavbar = ()=>{
        (active)? setActive(false) : setActive(true)
    }

    useEffect(()=>{
        window.onscroll = ()=>{
            if(document.documentElement.scrollTop > 100){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }
    }, [])

    return (
        <>
            <div className={`navbar ${(active)?'active':''} ${(scrolled)? 'scrolled' : ''}`}>
                <div className="title"><a href=""><img src={Logo} alt="logo" />BerkahCharcoal</a></div>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#wcu">Why Choose Us</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <a href="#" onClick={activeNavbar}><Menu/></a>
            </div>
        </>
    )
}


export default Navbar