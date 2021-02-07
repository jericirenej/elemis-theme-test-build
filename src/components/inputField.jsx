import React, { Fragment, useState } from "react";
import { BsCheck as ValidationOKIcon, BsX as ValidationErrorIcon } from "react-icons/bs";

const InputField = props => {
  const {
    message,
    type,
    id,
    category,
    defaultText,
    onSingleValidate,
    onInputHandle,
  } = props;

  const [blurred, setBlur] = useState(0);

  return (
    <Fragment>
      <input
        type={type}
        id={id}
        className={
          onSingleValidate({ category }, message[category]) &&
          message[category].length &&
          "validate-error"
        }
        placeholder={defaultText}
        onChange={input => onInputHandle(input.target.value, category)}
        value={message[category]}
        onBlur={() => setBlur(blurred + 1)}></input>
      {blurred > 0 ? (
        onSingleValidate(category, message[category]) ? (
          <p className="invalid-input">
            <ValidationErrorIcon className="icon" /> {onSingleValidate(category, message[category])}
          </p>
        ) : (
          <p className="valid-input">
            <ValidationOKIcon className="icon" />
          </p>
        )
      ) : (
        <p></p>
      )}
    </Fragment>
  );
};

export default InputField;
