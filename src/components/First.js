import Second from "./Second";

function First(props) {
  return (
    <div className="First">
      <Second output={props.output} />
    </div>
  );
}

export default First;