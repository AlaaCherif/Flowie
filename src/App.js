import './App.css';
import Nav from './components/Nav/Nav';
import Title from './components/Title/Title';
import Header from './components/UI/Navbar/Header';
import Slide from './components/Slide/Slide';
import Welcome from './components/Welcome/Welcome';
import Featured from './components/Featured/Featured';
import Footer from './components/Footer/Footer';

//you really need to change that slideshow thing it sucks so much
function App() {
  return (
    <>
      <Header />
      <div className='flex'>
        <Title />
        <Nav />
        <Slide />
        <Welcome />
        <Featured />
      </div>
      <Footer />
    </>
  );
}
export default App;
