import Key from "./Key";

const Keyboard = () => {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <div className="keyboard">
      <div className="line1">
        {keys1.map((key, idx) => {
          return <Key key={idx} keyVal={key}/>
        })}
      </div>
      <div className="line2">
        {keys2.map((key, idx) => {
          return <Key key={idx} keyVal={key}/>
        })}
      </div>
      <div className="line3">
        <Key keyVal={"DELETE"} bigKey={true}></Key>
        {keys3.map((key, idx) => {
          return <Key key={idx} keyVal={key}/>
        })}
         <Key keyVal={"ENTER"} bigKey={true}></Key>
      </div>
    </div>
  );
};

export default Keyboard;