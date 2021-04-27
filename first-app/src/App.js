import React from 'react';
import './App.css';
import Header from './component/Header';
import SubHeader from './component/SubHeader';
import Main from './component/Main';
import Footer from './component/Footer';
import '@fortawesome/fontawesome-free/css/all.css';

// import Index from './component/Index';
function App() {
  return (
    <React.Fragment>
        {/* <Index/> */}
        <Header/>
        <SubHeader/>
        <Main/>
        <Footer/>
    </React.Fragment>
  );

}

export default App;
