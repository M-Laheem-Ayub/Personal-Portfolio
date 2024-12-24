import './App.css';
import Header from './sections/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Hero from './sections/header/hero/Hero';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
    </div>
  );
}

export default App;
