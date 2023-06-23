import './App.css';

function App() {
  return (
  <div className="App"> 
  <GetNameComponet name="Andrii" age={50} email="my@andriico.cloud"/>
  <GetNameComponet name="Julia" age={47} email="julia@andriico.cloud"/>
  <GetNameComponet name="Vova" age={24} email="vova@andriico.cloud"/> 
  </div>);
}

const GetNameComponet = (props) => {
  return (<div>
    <h1>{props.name}</h1>
    <h2>{props.age}</h2>
    <h3>{props.email}</h3>
    </div>);
}
export default App;
 