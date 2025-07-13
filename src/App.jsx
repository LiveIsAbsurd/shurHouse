import './App.css'
import logo from "./assets/logo.jpg";
import MobileHeader from './components/mobileHeader';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutShur from './components/AboutShur';
import joke from './assets/joke.jpg';
import {useState} from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  const [jokeState, setJokeState] = useState(false);

  const jokeClick = (jokeState) => {
    setJokeState(!jokeState)
  }

  return (
    <BrowserRouter>
      <div className='main'>
        <MobileHeader click = {() => jokeClick(jokeState)} />
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path="/"
              element={jokeState ?
                 <div className='joke'>
                  <img className='logo' src={joke} />
                  </div> : 
                 <img className='logo' src={logo} />}
            />
          </Routes>
          <Routes>
            <Route
              path="/aboutsh"
              element={<AboutShur link = "/aboutsh" />}
            />
          </Routes>
          <Routes>
            <Route
              path="/aboutmh"
              element={<AboutShur link = "/aboutmh" />}
            />
          </Routes>
          <Routes>
            <Route
              path="/pay"
              element={<AboutShur link = "/pay" />}
            />
          </Routes>
          <Routes>
            <Route
              path="/koll"
              element={<AboutShur link = "/koll" />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App
