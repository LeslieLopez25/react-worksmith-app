import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 footer flex max-h-screen items-center justify-center bg-base-100 p-4 text-neutral-content shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] sm:footer-horizontal">
      <aside className="grid-flow-col items-center">
        <img src={logo} alt="Worksmith Logo" className="h-8 w-8" />
        <p>Worksmith Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
