import './App.css';
import Biography from './components/Biography';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero/Hero';
import "./i18n"


function App() {
  return (
  <div className="flex flex-col min-h-screen mx-auto px-2 pt-4 ">
    <div className='sticky top-0 ...'><Header/></div>
    <div><Hero/></div>
    <div className='flex justify-center'><Biography/></div>
    <div className='flex justify-center'><Footer/></div>
</div>
  );
}

export default App;
