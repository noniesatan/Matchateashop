import aboutimg from "../../assets/img/aboutt.jpg";


const bgg = {
    backgroundColor : "hsl(56, 42%, 84%)",
   
};

export default function About(){
    return(
      <section id="About1">
        <div className="hero min-h-screen bg-base-200" style={bgg}>
  <div className="hero-content flex-col lg:flex-row">
    <img src={aboutimg} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold text-[#0a0a0a] text-center">About us</h1>
      
      <p className="py-6 text-center text-[#3b3632]">Experience the true essence of Japanese tea culture at our Matcha Cafe. Nestled in the heart of Japan, our cafe is a serene haven where tradition meets modernity, and where every cup tells a story.
     
     Our commitment to authenticity shines through in the quality of our matcha. Sourced from the lush green tea fields of Uji, Kyoto, our matcha is of the highest grade, ensuring a rich and flavorful experience with every sip.
     
       Step into our tranquil space, adorned with traditional Japanese decor, and feel the peaceful ambiance as you indulge in the art of tea. Our knowledgeable staff is dedicated to providing you with a genuine matcha experience, from the careful preparation to the presentation of each cup.
    
       Explore our menu featuring an array of matcha-infused treats, from traditional matcha tea to innovative matcha lattes and decadent matcha desserts. Each creation is crafted with precision to showcase the versatility and unique flavor profile of authentic matcha.
   
     
       Whether you are a matcha connoisseur or new to the world of Japanese tea, our Matcha Cafe welcomes you to embark on a journey of taste and tranquility. Join us in celebrating the beauty of matcha and the cultural heritage it represents.
     
     Arigatou Gozaimasu!</p>
        <div className="flex flex-row items-center justify-center">
          <button className="btn btn-primary">Get to know</button>
        </div>
      
    </div>
  </div>
</div>
</section>
    );




}