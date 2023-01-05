import { Loader } from "@/components/Elements/Loader";

export const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <Loader style="xl" />
    </div>
  );
};
