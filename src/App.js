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
              <Link to="/sdev/"><img src={logo} alt="SlashDev Team" /></Link>
              <div>
                <h1 className="site-title">SlashDevTeam</h1>
                <small className="site-desc">We are building a digital world</small>
              </div>
            </div>
            <div className="nav">
              <Link className="header__link" to="/sdev/">Home</Link>
              <Link className="header__link" to="/sdev/offer">Offer</Link>
              <Link className="header__link" to="/sdev/team">Team</Link>
              <Link className="header__link" to="/sdev/contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <Routes>
          <Route path="/sdev/" element={<Home />} />
          <Route path="/sdev/offer" element={<Offer />} />
          <Route path="/sdev/team" element={<Team />} />
          <Route path="/sdev/contact" element={<Contact />} />
          <Route
            path="./vacancies.json"
            render={() => <Link to="https://emagweb.github.io/sdev/data/vacancies.json" />}
          />
          <Route
            path="./widget.js"
            render={() => <Link to="https://emagweb.github.io/sdev/js/widget.js" />}
          />
          <Route
            path="./widget.css"
            render={() => <Link to="https://emagweb.github.io/sdev/css/widget.css" />}
          />
          <Route
            path="./backend.svg"
            render={() => <Link to="https://emagweb.github.io/sdev/icons/backend.svg" />}
          />
          <Route
            path="./designer.svg"
            render={() => <Link to="https://emagweb.github.io/sdev/icons/designer.svg" />}
          />
          <Route
            path="./devops.svg"
            render={() => <Link to="https://emagweb.github.io/sdev/icons/devops.svg" />}
          />
          <Route
            path="./frontend.svg"
            render={() => <Link to="https://emagweb.github.io/sdev/icons/frontend.svg" />}
          />
          <Route
            path="./gamedev.svg"
            render={() => <Link to="https://emagweb.github.io/sdev/icons/gamedev.svg" />}
          />
          <Route
            path="./hiring.svg"
            render={() => <Link to="https://emagweb.github.io/sdev/icons/hiring.svg" />}
          />
          <Route
            path="./lawyer.svg"
            render={() => <Link to="https://emagweb.github.io/sdev/icons/lawyer.svg" />}
          />
          <Route
            path="./marketing.svg"
            render={() => <Link to="https://emagweb.github.io/sdev/icons/marketing.svg" />}
          />
          <Route
            path="./mobile.svg"
            render={() => <Link to="https://emagweb.github.io/sdev/icons/mobile.svg" />}
          />
          <Route
            path="./pm.svg"
            render={() => <Link to="https://emagweb.github.io/sdev/icons/pm.svg" />}
          />
          <Route
            path="./smm.svg"
            render={() => <Link to="https://emagweb.github.io/sdev/icons/smm.svg" />}
          />
          <Route
            path="./software.svg"
            render={() => <Link to="https://emagweb.github.io/sdev/icons/software.svg" />}
          />
          
          <Route
            path="./cover.png"
            render={() => <Link to="https://emagweb.github.io/sdev/email/cover.png" />}
          />
          <Route
            path="./eij.png"
            render={() => <Link to="https://emagweb.github.io/sdev/email/eij.png" />}
          />
          <Route
            path="./heyboss.png"
            render={() => <Link to="https://emagweb.github.io/sdev/email/heyboss.png" />}
          />
          <Route
            path="./odb.png"
            render={() => <Link to="https://emagweb.github.io/sdev/email/odb.png" />}
          />
          <Route
            path="./offzmi.png"
            render={() => <Link to="https://emagweb.github.io/sdev/email/offzmi.png" />}
          />
          <Route
            path="./advogram.png"
            render={() => <Link to="https://emagweb.github.io/sdev/email/advogram.png" />}
          />

          <Route
            path="./adv-code-as.png"
            render={() => <Link to="https://emagweb.github.io/sdev/email/adv-code-as.png" />}
          />
          <Route
            path="./adv-code-gp.png"
            render={() => <Link to="https://emagweb.github.io/sdev/email/adv-code-gp.png" />}
          />
          <Route
            path="./off-code-as.png"
            render={() => <Link to="https://emagweb.github.io/sdev/email/off-code-as.png" />}
          />
          <Route
            path="./off-code-gp.png"
            render={() => <Link to="https://emagweb.github.io/sdev/email/off-code-gp.png" />}
          />
          <Route
            path="./hb-code-as.png"
            render={() => <Link to="https://emagweb.github.io/sdev/email/hb-code-as.png" />}
          />
          <Route
            path="./hb-code-gp.png"
            render={() => <Link to="https://emagweb.github.io/sdev/email/hb-code-gp.png" />}
          />
          <Route
            path="./odb-code-as.png"
            render={() => <Link to="https://emagweb.github.io/sdev/email/odb-code-as.png" />}
          />
          <Route
            path="./odb-code-gp.png"
            render={() => <Link to="https://emagweb.github.io/sdev/email/odb-code-gp.png" />}
          />
          <Route
            path="./eij-code-as.png"
            render={() => <Link to="https://emagweb.github.io/sdev/email/eij-code-as.png" />}
          />
          <Route
            path="./eij-code-gp.png"
            render={() => <Link to="https://emagweb.github.io/sdev/email/eij-code-gp.png" />}
          />
          

        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App
