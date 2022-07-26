import MainContainer from "../components/MainContainer";
import styles from "../styles/counter.module.css";
import counter from "../store/counter";
import { observer } from "mobx-react-lite";

const Counter = observer(() => {
  return (
    <MainContainer keywords={"counter"}>
      <div className="counter">
        <div id="text">{counter.total}</div>
        <div className="btns">
          <button className="btn" onClick={() => counter.increment()}>
            +
          </button>
          <button className="btn" onClick={() => counter.decrement()}>
            -
          </button>
        </div>
      </div>
    </MainContainer>
  );
});

export default Counter;
