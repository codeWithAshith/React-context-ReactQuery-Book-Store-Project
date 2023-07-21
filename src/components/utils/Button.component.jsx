import React from "react";
import { BUTTON_TYPE } from "../../constants";

const ButtonComponent = ({
  label,
  clickHandler,
  variant = BUTTON_TYPE.OUTLINED,
}) => {
  return (
    <div>
      {variant === BUTTON_TYPE.FILLED ? (
        <button
          className={`border border-red-600 bg-red-600 px-2 py-1 rounded text-white`}
          onClick={clickHandler}
        >
          {label}
        </button>
      ) : (
        <button
          className={`border border-blue-400 bg-blue-100 px-2 py-1 rounded text-slate-900`}
          onClick={clickHandler}
        >
          {label}
        </button>
      )}
    </div>
  );
};

export default ButtonComponent;
