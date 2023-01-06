export const Input = ({
  label,
  type,
  placeholder,
  error,
  register,
  ...otherProps
}) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label
          htmlFor={`${label}-form-input`}
          className="label text-gray-500 font-light text-xl"
        >
          {label}
        </label>
      )}
      <input
        className="bg-gray-50 placeholder-gray-400 py-2 px-3 border-2 border-gray-300 rounded-md"
        id={`${label}-form-input`}
        type={type ? type : "text"}
        placeholder={label}
        {...register}
        {...otherProps}
      />
      {error && (
        <span className="font-extralight text-sm text-gray-900">{error}</span>
      )}
    </div>
  );
};
