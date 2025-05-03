import './aboutus.css'
import Chefs from './chefs';
function Aboutus(){
  
    return (
      
      <div>
        
        <div className="aboutContainer" id='aboutus'>
          <div className="firstcont">
            <h2>About Us</h2>
            <p>Welcome to <b>GARAM DHARAM</b> where passion for food meets excellence in service. Our journey began with a simple vision — to create a warm and welcoming space where guests can enjoy delicious meals crafted with the freshest ingredients. At the heart of our restaurant is a dedicated management team committed to delivering exceptional dining experiences. From sourcing quality produce to ensuring smooth daily operations, our managers work tirelessly behind the scenes to uphold the highest standards of food safety, cleanliness, and customer satisfaction. Whether it’s a cozy dinner, a family celebration, or a casual hangout with friends, we strive to make every visit memorable. Join us and taste the difference that great management and genuine hospitality can make.</p>

          </div>
          <div className="secondcont"><img src="/cartoonimg.jpeg" alt="" /></div>
        </div>
        <Chefs />
        
      </div>

    );
  }
  
  export default Aboutus;