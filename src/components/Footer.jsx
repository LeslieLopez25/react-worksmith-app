import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 footer flex max-h-screen items-center justify-center bg-neutral p-4 text-neutral-content sm:footer-horizontal">
      <aside className="grid-flow-col items-center">
        <img src={logo} alt="Worksmith Logo" className="h-8 w-8" />
        <p>Worksmith Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
