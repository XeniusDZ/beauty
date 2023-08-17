import './App.css';
import Nav from './components/navbar';
import './index.css'
import Body from './components/upperbody';
import Products from './components/products';
import Footer from './components/footer';
import Banner2 from './components/banner2';
import Upper_image from './components/upperimage';
import image from "./images/spa.avif"
import SimpleSlider from './components/carousel';


function App() {
  return (
    <>
    <div className='min-w-[850px]'>
    <Nav />
    <Body />
    <Products/>
    <Banner2/>
    <div className="flex mx-16 justify-center gap-16 my-8">
            <Upper_image image={image} text={"Random lol"} paragraph={["salam lol","lmao"]}/>
            <Upper_image image={image} text={"Random lol"} paragraph={["salam lol","lmao"]}/>
            <Upper_image image={image} text={"Random lol"} paragraph={["salam lol","lmao"]}/>
    </div>


    <Footer/>
    
    </div>
    

    </>
  );
}

export default App;
    