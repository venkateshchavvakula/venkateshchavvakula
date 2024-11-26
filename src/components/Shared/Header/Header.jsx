import React from "react";

const Header = () => {
  return (
    <header class="flex flex-row items-center px-6 py-6">
      <div class="mr-6">
        <div>
          <a
            aria-current="page"
            class="flex flex-row items-center text-sm font-extrabold uppercase tracking-widest transition duration-200 ease-in-out hover:text-red-600"
            href="/"
          >
            Venkatesh
          </a>
        </div>
      </div>
      <nav>
        <ul class="flex flex-row">
          <li class="ml-5">
            <a
              aria-current="page"
              class="flex flex-row items-center text-xs font-bold uppercase transition duration-200 ease-in-out hover:text-red-600"
              href="/"
            >
              About
            </a>
          </li>
          <li class="ml-5">
            <a
              class="flex flex-row items-center text-xs uppercase transition duration-200 ease-in-out hover:text-red-600"
              href="/projects/"
            >
              Projects
            </a>
          </li>
          <li class="ml-5">
            <a
              class="flex flex-row items-center text-xs uppercase transition duration-200 ease-in-out hover:text-red-600"
              href="/blog/"
            >
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
