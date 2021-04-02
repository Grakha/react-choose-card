import "./Button.css";

const Button = ({onSubmit}) => {
  return (
    <button onClick={onSubmit} type="button" className="btn btn-prmary">
      Submit
    </button>
  );
};

export default Button;