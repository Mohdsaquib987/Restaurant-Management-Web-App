import chef1 from '../../assets/chef1.jpeg';
import chef2 from '../../assets/chef2.jpg';
import chef3 from '../../assets/chef3.jpg';
import chef4 from '../../assets/chef4.jpg';
import image1 from '../../assets/paneerbutmasala.jpg';
import image2 from '../../assets/garlic-noodles.jpeg';
import './chef.css'

// import React, { useEffect } from 'react';
// import 'aos/dist/aos.css'; // Import AOS styles
// import AOS from 'aos';



function ChefCard({ imgSrc, name, expertise }) {
  
  return (
    <div className="card"  >
      <img src={imgSrc} alt={name} className="chef-img" />
      <h3 className="chef-name">{name}</h3>
      <p className="chef-work">{expertise}</p>
    </div>
  );
}

function Dish({ id, imgSrc, name }) {
  return (
    <div className="dish" id={id}>
      <img src={imgSrc} alt={name} />
      <h3>{name}</h3>
    </div>
  );
}

function Chefs() {
  // useEffect(() => {
  //   AOS.init({ duration: 800, once: true }); // Initialize AOS with options
  // }, []);
    return(
            <div>
                <div className="ourchefs">
                    <h1>Our Golden Chefs</h1>
                    <div className="chefcards" >
                    <ChefCard imgSrc={chef1} name="Chef Deepali" expertise="Starter Expert" />
                    <ChefCard imgSrc={chef2} name="Chef Rohit" expertise="Dessert Expert" />
                    <ChefCard imgSrc={chef3} name="Chef Ananya Iyer" expertise="Noodles Expert" />
                    <ChefCard imgSrc={chef4} name="Chef Pankaj" expertise="Non-Veg Expert" />
                    </div>
                </div>
                <div className='dishes'>
                  <h1>Top Dishes</h1>

                  <div className="topdishes">
                    <Dish id="dish1" imgSrc={image1} name="Paneer-Butter-Masala" />
                    <Dish id="dish2" imgSrc={image2} name="Garlic-Noodles" />
                  </div>
                </div>
            </div>
    );
}
export default Chefs;