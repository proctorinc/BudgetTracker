export const Input = ({ label, type, value, onChange, placeholder }) => {
  return (
    <>
      {label && (
        <label htmlFor={`${label}-input`} className="label">
          {label}
        </label>
      )}
      <input
        className="input input-bordered"
        id={`${label}-input`}
        type={type ? type : "text"}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </>
  );
};
