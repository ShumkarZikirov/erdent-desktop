import './App.scss';
import Header from "./components/main/header";
import React from "react";
import Footer from "./components/main/footer";
import Main from "./pages/main";
import FotterFoot from "./components/main/footer-foot";
import ChangeLife from "./components/main/change-life";
function App() {
  return (
    <div className="App">

      <div className={'App-main'}>
        <React.Fragment>
          <Header />
        </React.Fragment>
        <Main />
      </div>
      <ChangeLife />
      <Footer />
      <FotterFoot />
    </div>
  );
}

export default App;
