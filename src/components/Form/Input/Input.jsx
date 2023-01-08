import { Warning } from "phosphor-react";

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
        className={`${
          error ? "ring-4" : ""
        } ring-black ring-opacity-30 border-gray-300 border-2 bg-gray-50 placeholder-gray-400 py-2 px-3 rounded-md my-1`}
        id={`${label}-form-input`}
        type={type ? type : "text"}
        placeholder={label}
        {...register}
        {...otherProps}
      />
      {error && (
        <span className="flex items-center gap-1 font-extralight text-sm text-gray-900">
          <Warning size={12} weight="light" />
          {error}
        </span>
      )}
    </div>
  );
};
