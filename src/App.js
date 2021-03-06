import './App.css';
import Header from './components/Header';
import VieweOption from './components/VieweOptions';
import PizzaBlock from './components/PizzaBlock';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <VieweOption />
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
