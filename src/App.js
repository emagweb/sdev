import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'
import Offer from './pages/Offer'
import Team from './pages/Team'
import Contact from './pages/Contact'

import logo from './assets/svg/logo-white.svg'

function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <div className="container">
          <div className="header__content">
            <div className="logo">
              <Link to="/"><img src={logo} alt="SlashDev Team" /></Link>
              <div>
                <h1 className="site-title">SlashDevTeam</h1>
                <small className="site-desc">We are building a digital world</small>
              </div>
            </div>
            <div className="nav">
              <Link className="header__link" to="/">Home</Link>
              <Link className="header__link" to="/offer">Offer</Link>
              <Link className="header__link" to="/team">Team</Link>
              <Link className="header__link" to="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="./designer.svg"
            render={() => <Link to="https://emagweb.github.io/sdev/designer.svg" />}
          />
          <Route
            path="./devops.svg"
            render={() => <Link to="https://emagweb.github.io/sdev/devops.svg" />}
          />
          <Route
            path="./frontend.svg"
            render={() => <Link to="https://emagweb.github.io/sdev/frontend.svg" />}
          />
          <Route
            path="./gamedev.svg"
            render={() => <Link to="https://emagweb.github.io/sdev/gamedev.svg" />}
          />
          <Route
            path="./hiring.svg"
            render={() => <Link to="https://emagweb.github.io/sdev/hiring.svg" />}
          />
          <Route
            path="./lawyer.svg"
            render={() => <Link to="https://emagweb.github.io/sdev/lawyer.svg" />}
          />
          <Route
            path="./marketing.svg"
            render={() => <Link to="https://emagweb.github.io/sdev/marketing.svg" />}
          />
          <Route
            path="./mobile.svg"
            render={() => <Link to="https://emagweb.github.io/sdev/mobile.svg" />}
          />
          <Route
            path="./pm.svg"
            render={() => <Link to="https://emagweb.github.io/sdev/pm.svg" />}
          />
          <Route
            path="./smm.svg"
            render={() => <Link to="https://emagweb.github.io/sdev/smm.svg" />}
          />
          <Route
            path="./software.svg"
            render={() => <Link to="https://emagweb.github.io/sdev/software.svg" />}
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App
