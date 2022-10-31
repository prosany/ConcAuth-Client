import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 bg-gray-700 rounded shadow md:flex md:items-center md:justify-between md:p-6 w-full">
      <span className="text-sm text-gray-50 sm:text-center">
        Copyright © {new Date().getFullYear()}{" "}
        <a href="https://web.programming-hero.com/" className="hover:underline">
          Programming Hero.
        </a>
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-50 sm:mt-0">
        <li>
          <a
            href="https://www.programming-hero.com/about-us.html"
            className="mr-4 hover:underline md:mr-6"
            target="_blank"
            rel="noreferrer"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="https://www.codinism.com/privacy.html"
            className="mr-4 hover:underline md:mr-6"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>
        </li>
        <li>
          <a
            href="https://app.programming-hero.com/contact/"
            className="hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
