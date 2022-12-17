import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bottom-0 flex gap-3 justify-center border-t border-t-gray-300 p-3 font-extralight">
      <span>&#169; 2022 Proctor Inc</span>
      <Link to="/terms-of-service">
        <u>Terms of Service</u>
      </Link>
      <Link to="/privacy-policy">
        <u>Privacy Policy</u>
      </Link>
    </footer>
  );
};
