import { BrowserRouter } from "react-router-dom";
import Layout from "./modules/Layouts/Layouts";
import './App.css'
import { Provider } from "react-redux";
import { store } from "./reducers/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>
  )
}

export default App;
