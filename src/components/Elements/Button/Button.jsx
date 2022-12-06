export const Button = ({ text, onClick, ...otherProps }) => {
  return (
    <button type="submit" className="btn" onClick={onClick} {...otherProps}>
      {text}
    </button>
  );
};
