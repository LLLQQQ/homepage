import style from './App.module.scss';
import Mainpage from './containers/Mainpage';

function App() {
  return (
    <div className={style["wrapper"]}>
      <Mainpage />
    </div>
  );
}

export default App;
