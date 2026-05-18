const Footer = () => {
  return (
    <footer className="flex min-h-screen flex-col bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="justify-center text-teal-600 dark:text-teal-300">
          <p>Logo goes here</p>
          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400">
            Copyright © {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
