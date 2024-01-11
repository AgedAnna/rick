import './App.css';
import Home from './home';
import CustomNavbar from './navbar';

import Sobre from './sobre';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <section className="home">
        <Home />
      </section>
      <section className="sobre">
        <Sobre />
      </section>
    </div>
  );
}

export default App;
