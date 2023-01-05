import { AnimatedHeader } from "../Elements/AnimatedHeader";
import { Loader } from "../Elements/Loader";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

export const Layout = ({ title, subtitle, children, isLoading, size }) => {
  let maxWidth = "sm:max-w-xl";

  if (size === "sm") {
    maxWidth = "sm:max-w-sm";
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center bg-gray-100 text-gray-800 min-h-screen pb-36">
        <div className={`${maxWidth} w-full p-4 flex-grow`}>
          {title && <AnimatedHeader title={title} subtitle={subtitle} />}
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
