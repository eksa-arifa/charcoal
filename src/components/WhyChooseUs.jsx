import { CheckCircle, DollarSign, Filter } from "react-feather"



const WhyChooseUs = ()=>{
    return (
        <>
            <div className="wcu" id="wcu">
            <h2>Why Choose Us?</h2>
            <div className="flex-wrap">
                <div className="box">
                    <CheckCircle className="ilustration" />
                    <h2>Berkualitas</h2>
                </div>
                <div className="box">
                    <DollarSign className="ilustration"/>
                    <h2>Terjangkau</h2>
                </div>
                <div className="box">
                    <Filter className="ilustration"/>
                    <h2>Aman & terpercaya</h2>
                </div>
            </div>
            </div>
        </>
    )
}


export default WhyChooseUs