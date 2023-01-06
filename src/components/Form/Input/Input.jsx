export const Input = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  ...otherProps
}) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={`${label}-input`} className="label">
          {label}
        </label>
      )}
      <input
        className="bg-white py-2 px-3 border-2 border-gray-300 rounded-md"
        id={`${label}-input`}
        type={type ? type : "text"}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        {...otherProps}
      />
    </div>
  );
};
