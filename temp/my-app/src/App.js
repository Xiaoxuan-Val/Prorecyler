import React, {Component} from 'react';
import './App.css';
import Home from "./pages/Login/Login";
//import Login from "./pages/Login/Loginwindow"

import {
  BrowserRouter,
  Switch,
  Route,
  link,
  useParams,
} from "react-router-dom";

class App extends Component {
  state = {
    login: false,
    user: {},
    user_id: "",

    
  };

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <a className = "home" href = "/">EPORTFOLIO</a>
        <nav>
          <ul className = "navbarlinks">
            <li><a href="/">Home</a></li>
            <li><a href="/profile">View ePortfolios</a></li>
          </ul>
        </nav>
      </header>

      <div className = "contentWrapper">
        {
          <BrowserRouter>
                <Switch>
                    <Route exact path = "/" component={Home} />
                </Switch>
          </BrowserRouter>
          }
      </div>

      <footer className="footer-distributed">

        <div className = "footer-left">
          <div className = "footerAbout">
            <h1 className = "logo">ePORTFOLIO</h1>
            <br />
            <div className = "footerDesc">
              ePortfolio is a website to create your own eportfolio for the world.
              <br />
              interested? Sign up now!
            </div>
          </div>
        </div>

        <div className = "footer-center">
        </div>

        <div className = "footer-right">
            <ul>Made by:
                <li>Jed Park 837037 </li>
                <li>Weijie Lin 905673 </li>
                <li> Yu Xiang Zhang 910861 </li>
                <li> Lachlan McKeith 996258 </li>

                
            </ul>
            <br />
            <div className = "copyright">&copy; ePortfolio 2020</div>
        </div>

      </footer>

    </div>
    );
  }
}

export default App;