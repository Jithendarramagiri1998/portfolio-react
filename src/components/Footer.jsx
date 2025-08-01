import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-6 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Ramagiri Jithendar. All rights reserved.
        </p>
        <div className="mt-2 space-x-4 text-sm">
          <a
            href="mailto:ramagirijithendar1998@gmail.com"
            className="text-indigo-600 hover:underline dark:text-indigo-400"
          >
            Email
          </a>
          <a
            href="https://github.com/Jithendarramagiri1998"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline dark:text-indigo-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jithendarramagiri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline dark:text-indigo-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
