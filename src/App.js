import './App.css';
import Header from "./component/header";
import {Content} from "./component/content";
import {data} from "./textContent/data";
import {Trynow} from "./component/Trynow";
import Footer from "./component/footer";
import "./component/adaptive.css"

function App() {

  return (
    <div className="App">
        <Header />
        <Content prop={data}/>
        <Trynow />
        <Footer prop={data}/>
    </div>
  );
}

export default App;
