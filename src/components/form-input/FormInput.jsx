import "./FormInput.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label className={`${otherProps.value.length ? "shrink" : null} form-input-label`} htmlFor="">
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
