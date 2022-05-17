import "./App.css";
import { AppRoutes } from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={2000} theme="colored" />
      <AppRoutes />
    </div>
  );
}

export default App;
