export const Button = ({ text, onClick, ...otherProps }) => {
  return (
    <button className="btn" onClick={onClick} {...otherProps}>
      {text}
    </button>
  );
};
