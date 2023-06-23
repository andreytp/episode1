import styles from './App.module.css';

function App() {
  return (
  <div className={styles.App}>
  <GetNameComponent name="Andrii" age={50} email="my@andriico.cloud"/>
  <GetNameComponent name="Julia" age={47} email="julia@andriico.cloud"/>
  <GetNameComponent name="Vova" age={24} email="vova@andriico.cloud"/>
  </div>);
}

const GetNameComponent = (props) => {
  return (<div className={styles.name}>
    <h1>{props.name}</h1>
    <h2>{props.age}</h2>
    <h3>{props.email}</h3>
    </div>);
}
export default App;
 