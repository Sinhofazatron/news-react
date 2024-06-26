import {Button} from "shared/ui/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../model/slice/counterSlice";
import {getCounterValue} from "../model/selectors/getCounterValue/getCounterValue";

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue)

  const plus = () => {
    dispatch(counterActions.plus())
  }

  const minus = () => {
    dispatch(counterActions.minus())
  }

  return (
     <div>
      <h1 data-testid='value-title'>{counterValue}</h1>
       <Button data-testid='increment-btn' onClick={plus}>plus</Button>
       <Button data-testid='decrement-btn' onClick={minus}>minus</Button>
     </div>
  );
};
