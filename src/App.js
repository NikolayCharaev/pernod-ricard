import './scss/style.scss'
import Header from './components/Header/Header';
import Slogan from './components/Slogan/Slogan';
import About from './components/About/About';
import Sustainability from './components/Sustainability/Sustainability';
import Organization from './components/Organization/Organization';
import Quote from './components/Quote/Quote';
import Brand from './components/Brand/Brand';
import News from './components/News/News';
import Footer from './components/Footer/Footer'



function App() {
  return (
   <> 
    <Header/>
    <Slogan/>
    <About/>
    <Sustainability/>
    <Organization/>
    <Quote/>
    <Brand/>
    <News/>
    <Footer/>
   </>  
  );
}

export default App;
