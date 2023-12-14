import { MessageCircle } from "react-feather"



const About = ()=>{
    return (
        <>
            <div className="about" id="about">
                <div className="left">
                    <img src="https://rukminim1.flixcart.com/image/850/1000/kxkqavk0/poster/p/9/l/medium-koe-no-katachi-anime-girls-anime-boys-fan-art-digital-art-original-imagayfsrzntj2yu.jpeg?q=90" alt="profile" />
                </div>
                <div className="right">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quos laboriosam cumque deserunt, iusto architecto assumenda adipisci corporis reprehenderit aut aperiam delectus unde ullam est, doloremque inventore aspernatur quibusdam, iure officiis? Exercitationem quis neque quod sint. Veritatis quisquam ea sit quam, possimus velit culpa. Molestias, recusandae. Illo animi error rerum in, nulla repellendus, reprehenderit nam omnis dignissimos iste dolorum earum.</p>
                    <a href="https://wa.link/dtsh68" className="btn"><MessageCircle/> Get In Touch!</a>
                </div>
            </div>
        </>
    )
}


export default About