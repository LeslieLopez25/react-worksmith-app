import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 z-50 w-full bg-base-100 p-2 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] sm:footer-horizontal">
      <div className="flex flex-col items-center justify-center gap-1 p-3 sm:flex-row sm:gap-4 sm:p-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Worksmith Logo" className="h-6 w-6 sm:h-8 sm:w-8" />
          <p className="text-xs text-base-content sm:text-sm">
            Worksmith Copyright © {new Date().getFullYear()} - All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
