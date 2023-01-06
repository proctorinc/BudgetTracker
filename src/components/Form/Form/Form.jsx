export const Form = ({ onSubmit, form, children }) => {
  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      {children}
    </form>
  );
};
