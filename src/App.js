import style from './App.module.scss';
import Homepage from './containers/Homepage';

function App() {
  return (
    <div className={style["wrapper"]}>
      <Homepage />
    </div>
  );
}

export default App;
