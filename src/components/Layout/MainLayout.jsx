export const MainLayout = ({ children }) => {
  return (
    <div className="flex justify-center">
        <div className="sm:max-w-xl w-full p-4">
        {children}
    </div>
    </div>
  )
}