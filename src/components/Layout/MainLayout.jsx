import { AnimatedHeader } from "../Elements/AnimatedHeader";
import { Footer } from "../Footer";
import { MainNav } from "../Navbar/MainNav";

export const MainLayout = ({ title, children }) => {
  return (
    <>
      <MainNav />
      <div className="flex flex-col items-center bg-gray-100 text-gray-800 min-h-screen pb-36">
        <div className="sm:max-w-xl w-full p-4">
          <AnimatedHeader title={title} />
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};
