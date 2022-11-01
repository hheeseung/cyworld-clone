import { IButtons } from "../../types/type";

function Button(props: IButtons) {
  return (
    <>
      <button onClick={props.onClick} className="button">
        {props.text}
      </button>
      <style jsx>{`
        .button {
          padding: 8px;
          font-size: 15px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          background-color: #d9d9d9;
          color: #666;
          font-weight: 600;
          margin: 10px;
        }
      `}</style>
    </>
  );
}

export default Button;
