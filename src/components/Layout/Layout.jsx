import { AnimatedHeader } from "../Elements/AnimatedHeader";
import { Footer } from "../Footer";
import { MainNav } from "../Navbar/MainNav";

export const Layout = ({ title, size, children, returnUrl }) => {
  const calculateWidthScaling = () => {
    let scaling = "sm:max-w-xl";

    if (size === "lg") {
      scaling = "sm:max-w-4xl";
    } else if (size === "sm") {
      scaling = "sm:max-w-md";
    } else if (size === "xs") {
      scaling = "sm:max-w-sm";
    }
    return scaling;
  };

  const widthScaling = calculateWidthScaling();

  return (
    <>
      <MainNav returnUrl={returnUrl} />
      <div className="flex flex-col items-center bg-gray-100 text-gray-800 min-h-screen pb-36">
        <div className={`${widthScaling} w-full p-4`}>
          <AnimatedHeader title={title} />
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};
