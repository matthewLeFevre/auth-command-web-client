import React from "react";

export default function Form({ children, ...rest }) {
  return (
    <form className='grid--gap' {...rest}>
      {children}
    </form>
  );
}

export function Input({
  type = "text",
  error = false,
  label,
  col = "col--12",
  ...rest
}) {
  return (
    <div className={`form__field ${col}`}>
      {label ? <label className='form__input__label'>{label}</label> : null}
      {type !== "text-area" ? (
        <input className='form__input' type={type} {...rest} />
      ) : (
        <textarea className='form__input' {...rest} />
      )}
      {error ? <label className='form__input__error'>{error}</label> : null}
    </div>
  );
}

export function Field({ col = "col--12", children }) {
  return <div className={`form__field ${col}`}>{children}</div>;
}
