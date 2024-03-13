import { useContext } from "react";
import { AppContext } from "../App";

const Key = (props) => {
  const keyVal = props.keyVal;
  const bigKey = props.bigKey;
  const { board, setBoard, currAttempt, setCurrAttempt } = useContext(AppContext);

  const selectLetter = () => {
    const newBoard = [...board];
    const { attempt, letterPos } = currAttempt;
    newBoard[attempt][letterPos] = keyVal;
    const currLetterPos = letterPos === 4 ? 0 : letterPos + 1;
    const currAttemptPos = currLetterPos === 0 ? attempt + 1 : attempt;
    setCurrAttempt({attempt: currAttemptPos, letterPos: currLetterPos});
    setBoard(newBoard);
  };

  return (
    <div className="key" id={bigKey && "big"} onClick={selectLetter}>
      {keyVal}
    </div>
  );
};

export default Key;