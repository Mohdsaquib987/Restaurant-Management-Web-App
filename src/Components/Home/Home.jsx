import './home.css'
import { useNavigate } from 'react-router-dom';
function Home(){
  const navigate = useNavigate();

    return (
      <div className="homecontainer" id='home'>
        <div className="content">
          <h2>Order your <br />favourite food here </h2>
          <p>Craving something tasty? Order your favorite dishes with ease and enjoy a delightful dining experience at our restaurant. From flavorful starters to satisfying main courses, our menu has something for everyone. Great food, cozy vibes — everything you love, all in one place!</p>
          <button onClick={() => navigate('/Menu')}>View Menu</button>
        </div>
      </div>
    );
  }
  
  export default Home;