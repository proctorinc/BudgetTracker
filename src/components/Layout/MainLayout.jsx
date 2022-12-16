export const MainLayout = ({ children }) => {
  return (
    <div className="flex justify-center bg-gray-100 text-gray-800">
      <div className="sm:max-w-xl w-full p-4">{children}</div>
    </div>
  );
};
