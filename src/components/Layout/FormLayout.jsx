import { AnimatedHeader } from "../Elements/AnimatedHeader";
import { Loader } from "../Elements/Loader";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

export const FormLayout = ({ title, children, isLoading }) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center bg-gray-100 text-gray-800 min-h-screen pb-36">
        <div className={`sm:max-w-sm w-full p-10`}>
          {title && <AnimatedHeader title={title} />}
          {isLoading ? (
            <div className="py-40">
              <Loader />
            </div>
          ) : (
            children
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
