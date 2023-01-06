export const Form = ({ onSubmit, children }) => {
  return (
    <form className="flex flex-col gap-3" onSubmit={onSubmit}>
      {children}
    </form>
  );
};
