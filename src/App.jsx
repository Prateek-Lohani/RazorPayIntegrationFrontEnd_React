import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Paymentsuccess from "./components/Paymentsuccess";
import Paymentfailed from "./components/Paymentfailed";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/paymentSuccess" element={<Paymentsuccess/>}/>
        <Route path="/paymentFailed" element={<Paymentfailed/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
