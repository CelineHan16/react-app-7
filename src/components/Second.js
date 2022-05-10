import Third from "./Third";

function Second({ output }) {
  return (
    <div className="Second">
      <Third output={output} />
    </div>
  );
}

export default Second;