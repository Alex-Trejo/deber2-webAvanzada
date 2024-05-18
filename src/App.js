import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppHeader from './components/common/header';
import AppFooter from './components/common/footer';
import AppHome from './views/home';
import Information from './views/information';
/* import Features from './views/features';
import HowItWorks from './views/how-it-works';
import FAQ from './views/faq';
import Pricing from './views/pricing';
import Contact from './views/contact'; */

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  return (

      <Layout className="mainLayout">
        <Header>
          <AppHeader/>
        </Header>
        <Content>
          {/* <AppHome/> */}
          {/* <Information/> */}
          <Routes>
            <Route path="/" element={<AppHome />} />
            <Route path="/information" element={<Information />} />
{/*             <Route path="/features" element={<Features />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </Content>
        <Footer>
          <AppFooter/>
        </Footer>
      </Layout>
  );
}

export default App;
