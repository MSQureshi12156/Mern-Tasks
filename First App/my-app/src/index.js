import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from './components/navbar';
import App from './App';
import Course from './components/course';
import Cards_title from './components/cards-title';
import Cards from './components/cards';
import Counter from './components/Counter';
import DisplayColor from './components/DisplayColor';
import ShowText from './components/displayText'
import CounterButton from './components/displayButton'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Course />
    <Cards_title />
    <Cards />
    <Counter />
    <DisplayColor />
    <ShowText />
    <CounterButton />
    
  </React.StrictMode>
);


