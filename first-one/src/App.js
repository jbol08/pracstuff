// import logo from './logo.svg';
import './App.css';
import Heading from './header';
import Footer from './footer';
import Title from './note'


function App() {
  return (
    <div className="App">
      <header className="header">
        <Heading />
       </header>
      <body>
        <Title />
        </body>
      <footer><Footer /></footer>
    </div>
  );
} 

export default App;
