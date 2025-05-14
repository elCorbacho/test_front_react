import './App.css';
import Sections from './components/Sections';
import Header from './components/Header';
import Footer from './components/Footer';
import IntroModal from './components/IntroModal/IntroModal';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="app-content">
        <Sections />
      </main>
      <Footer />
      <IntroModal />
    </div>
  );
}

export default App;