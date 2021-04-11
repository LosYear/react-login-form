import React from "react";
import "./styles.scss";

const getLabelByState = (state) => {
  if (state === "loading") {
    return "Loading";
  }

  return undefined;
};

const Spinner = ({ state }) => (
  <span
    className={`spinner spinner_${state}`}
    role="status"
    aria-label={getLabelByState(state)}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="spinner__tick spinner__icon"
      aria-hidden="true"
      role="img"
    >
      <path
        fill="currentColor"
        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
      />
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 352 512"
      className="spinner__cross spinner__icon"
      aria-hidden="true"
      role="img"
    >
      <path
        fill="currentColor"
        d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
      />
    </svg>
  </span>
);

// Button states: normal, loading, success, error

const Button = ({ label, state = "normal", type }) => (
  <button
    className={`button button_state_${state}`}
    disabled={state !== "normal"}
    type={type}
  >
    <span className="button__layer button__layer_caption">{label}</span>
    <span className="button__layer button__layer_spinner">
      <Spinner state={state} />
    </span>
  </button>
);

export default Button;
