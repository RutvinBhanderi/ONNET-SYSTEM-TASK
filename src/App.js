import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import { store } from "./store/store";
import { Provider } from "react-redux";
import Cart from "./components/Cart/Cart";
import { useEffect, useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
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
