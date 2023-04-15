import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import English from './lang/en.json';
import Spanish from './lang/es.json';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import Quiz from './pages/Quiz/Quiz';
import './App.scss';
import Footer from './components/Footer/Footer';

export const LanguageSelector = createContext();

function App() {
  const [locale, setLocale] = useState(navigator.language);
  const [messages, setMessages] = useState(English);

  useEffect(() => {
    switch (locale) {
      case 'es-ES':
        setMessages(Spanish);
        break;
      default:
        setMessages(English);
    }
  }, [locale]);

  return (
    <BrowserRouter>
      <LanguageSelector.Provider value={{ language: locale, setLanguage: setLocale }}>
        <IntlProvider messages={messages} locale={locale}>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/:category/:id' element={<MovieDetail></MovieDetail>}></Route>
            <Route path='/quiz' element={<Quiz></Quiz>}></Route>
          </Routes>
        </IntlProvider>
        <Footer></Footer>
      </LanguageSelector.Provider>
    </BrowserRouter>
  );
}

export default App;
