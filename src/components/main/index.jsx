import  Matcha_1 from "../../assets/img/Matcha_1.jpg";

export default function Main(){
    const borderrad = {
    borderRadius: "30px",
    margin:"10px"

    };
    const h155 = {
        color: "black",
        fontfamily: "poppins",
        margin: "10px",


    };
    


    return(
        <div className="main-container">
            <div className="maincontain">
                <h1 className="text-[52px] font-[bold] font-poppins" style={h155}> 
                Fuji Pure Matcha Cafe'</h1>
                <p>Discover the antique and real matcha from Japan with japanese atmosphere Now, Pure matcha is coming to Australia and our first branch is in Chatwood (Sydney, Australia)</p>
            </div>
            <div className="mainphoto">
                <img src={Matcha_1 } alt="" style={borderrad} className="shadow-md"/>
            
            
            </div>
        
        </div>
    );

}