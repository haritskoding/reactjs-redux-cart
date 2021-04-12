
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import './App.css';
import Nav from './components/Nav';
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Toko from "./pages/Toko";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/details/:id" exact component={Details} />
        <Route path="/toko/:id" exact component={Toko} />
      </Provider>
    </Router>
  );
}

export default App;
