import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import { store } from "./store/store";
import { Provider } from "react-redux";
import Cart from "./components/Cart/Cart";
import { useEffect, useState } from "react";

function App() {
  //Open state is for wheather cart is open or not
  const [open, setOpen] = useState(false);
  //Search state is for Filtering Product
  const [search, setSearch] = useState("");

  return (
    <Provider store={store}>
      <div className='App'>
        <Navbar setOpen={setOpen} setSearch={setSearch} />
        <Cart open={open} />
        <Products open={open} search={search} />
      </div>
    </Provider>
  );
}

export default App;
