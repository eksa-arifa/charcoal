


const Contact = ()=>{
    return(
        <>
            <div className="contact" id="contact">
                <h2>Contact Us</h2>
                <div className="flex">
                    <div className="left">
                        <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=bontang&t=&z=10&ie=UTF8&iwloc=&output=embed"></iframe>
                    </div>
                    <div className="right">
                        <form action="">
                            <div className="gap">
                                <label htmlFor="nama">Nama:</label>
                                <input type="text" placeholder="Samsudin" id="nama" />
                            </div>
                            <div className="gap">
                                <label htmlFor="email">Email:</label>
                                <input type="email" placeholder="samsudin@eksrifaa.my.id" id="email" />
                            </div>
                            <div className="gap">
                                <label htmlFor="subject">Subject:</label>
                                <input type="text" placeholder="Informasi Lain" id="subject" />
                            </div>
                            <div className="gap">
                                <label htmlFor="message">Message:</label>
                                <textarea id="message" placeholder="Assalamualaikum Wr.Wb..."></textarea>
                            </div>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact