const Footer = () => {
  return (
    <footer className="footer flex items-center justify-center bg-neutral p-4 text-neutral-content sm:footer-horizontal">
      <aside className="grid-flow-col items-center">
        {/* {for logo} */}
        <p>Worksmith Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
