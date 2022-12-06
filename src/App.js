import "./App.css";
import { Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import List from "./Components/List/List";
import { Provider } from "react-redux";
import store from "./Components/Redux/Store";
import Cart from "./Components/Cart/Cart";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
