import Tracker from "./component/pricetracker";

import Header from "./component/header";
import Footer from "./component/footer";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

function App()
{
 return(
    <>
    <Header/>
    <Tracker/>
   <Footer/>
    </>
 )
}

export default App;
