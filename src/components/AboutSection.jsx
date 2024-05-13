import { MessageCircle } from "react-feather"



const About = ()=>{
    return (
        <>
            <div className="about" id="about">
                <div className="left">
                    <img src="https://images.unsplash.com/photo-1613897807164-01263a2296e2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile" />
                </div>
                <div className="right">
                    <h2>About Us</h2>
                    <p>Kami menyediakan charcoal terbaik sepanjang masa.</p>
                    <a href="https://wa.link/dtsh68" className="btn"><MessageCircle/>Get In Touch!</a>
                </div>
            </div>
        </>
    )
}


export default About
