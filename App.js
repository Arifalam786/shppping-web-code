import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Ship from './Ship';
import image from './img.jpg';
import paypal from './paypal.png';
import visa from './visa.png';
import master from './master.png';
import discover from './discover.png';
import google from './google-pay.png';
import phone from './PhonePe.png';
import inpost from './inpost-logo.png';
import fed from './fed.png';
import blue from './blue.png';
import delhi from './delhi.png';

import './App.css';

function App() {
  return (
    <div className="App">
      
      <Header />
      <Ship />
      <Content image={image} paypal={paypal} visa={visa} master={master} discover={discover} google={google} phone={phone} inpost={inpost} fed={fed} blue={blue} delhi={delhi}/>
      <Footer />
        
      
    </div>
  );
}

export default App;
