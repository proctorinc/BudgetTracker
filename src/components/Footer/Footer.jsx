import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row bottom-0 text-center gap-5 justify-center border-t border-t-gray-300 p-3 font-extralight">
      <span>&#169; 2022 Proctor Inc</span>
      <div className="flex justify-center gap-5">
        <Link to="/terms-of-service">
          <u>Terms of Service</u>
        </Link>
        <Link to="/privacy-policy">
          <u>Privacy Policy</u>
        </Link>
      </div>
    </footer>
  );
};
