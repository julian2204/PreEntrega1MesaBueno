import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    
    <div className='App'>
      <div className='container'>
        <NavBar/>
      </div> 
      <div className='container'>
        <ItemListContainer item1= "Perro" item2= "GATO" item3= "amigo"/>
      </div>
    </div>
  );
}

export default App;
