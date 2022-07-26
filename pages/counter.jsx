import MainContainer from "../components/MainContainer";
import styles from "../styles/counter.module.css";
import counter from "../store/counter";
import { observer } from "mobx-react-lite";
import { Button} from 'antd';

const Counter = observer(() => {
  return (
    <MainContainer keywords={"counter"}>
      <div className="counter">
        <div id="text">{counter.total}</div>
        <div className="btns">
          <Button type="primary" className="btn" onClick={() => counter.increment()}>+</Button>
          <Button type="primary" className="btn" onClick={() => counter.decrement()}>-</Button>
        </div>
      </div>
    </MainContainer>
  );
});

export default Counter;
