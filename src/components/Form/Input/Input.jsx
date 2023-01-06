export const Input = ({
  label,
  id,
  type,
  placeholder,
  form,
  match,
  ...otherProps
}) => {
  const {
    register,
    formState: { errors },
  } = form;
  let validators = {};
  let inputType = "text";

  if (type === "password") {
    inputType = "password";
    validators = {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must be at least 8 characters",
      },
    };
  } else if (type === "email") {
    validators = {
      required: "Email is required",
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: "Enter a valid email address",
      },
    };
  }

  if (match) {
    validators = {
      ...validators,
      validate: (value) =>
        (match && value === form.watch(match)) || `Must match ${match}`,
    };
  }

  return (
    <div className="flex flex-col">
      {label && (
        <label
          htmlFor={`${id}-form-input`}
          className="label text-gray-500 font-light text-xl"
        >
          {label}
        </label>
      )}
      <input
        className="bg-gray-50 placeholder-gray-400 py-2 px-3 border-2 border-gray-300 rounded-md"
        id={`${id}-form-input`}
        type={inputType}
        placeholder={label}
        {...register(id, validators)}
        {...otherProps}
      />
      {errors[id] && (
        <span className="font-extralight text-sm text-gray-900">
          {errors[id]?.message}
        </span>
      )}
    </div>
  );
};
