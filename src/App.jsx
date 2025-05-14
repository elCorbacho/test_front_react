import React from 'react';
import Footer from './components/Footer/Footer';
import './App.css';
import Sections from './components/Sections';
import Header from './components/Header';
import IntroModal from './components/IntroModal/IntroModal';
import QuickLinks from './components/QuickLinks/QuickLinks';
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
