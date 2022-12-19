import { AnimatedHeader } from "../Elements/AnimatedHeader";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

export const Layout = ({ title, subtitle, size, children, back }) => {
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
      <Navbar back={back} />
      <div className="flex flex-col items-center bg-gray-100 text-gray-800 min-h-screen pb-36">
        <div className={`${widthScaling} w-full p-4`}>
          <AnimatedHeader title={title} subtitle={subtitle} />
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};
