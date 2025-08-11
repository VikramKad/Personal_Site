import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { useLocation, useMatch } from "react-router-dom";

const links = ["Home", "Projects", "About", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const matchProjectId = useMatch("/projects/:id");
  const matchProjectsWildcard = useMatch("/projects/*");
  const matchProjectsRoot = useMatch("/projects");
  const isProjectDetail = Boolean(
    matchProjectId || matchProjectsWildcard || matchProjectsRoot
  );

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav
      className={[
        "fixed w-full top-0 left-0 z-50",
        isProjectDetail
          ? "bg-white border-b border-gray-200"
          : "bg-background/90 backdrop-blur shadow-md",
      ].join(" ")}
    >
      <div className="mx-auto flex items-center justify-end px-4 sm:px-6 py-3 sm:py-4">
        <div className="hidden sm:flex items-center gap-8">
          {links.map((section) => (
            <HashLink
              key={section}
              smooth
              to={`/#${section.toLowerCase()}`}
              className="cursor-pointer text-lg font-bold text-gray-800 hover:text-blue-600 transition-colors"
            >
              {section}
            </HashLink>
          ))}
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="sm:hidden inline-flex items-center justify-center p-2 focus:outline-none"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div
        className={`sm:hidden absolute left-0 right-0 top-full border-t border-gray-200 transform transition-transform origin-top ${
          open ? "scale-y-100" : "scale-y-0"
        } ${isProjectDetail ? "bg-white" : "bg-background"}`}
      >
        <div className="px-4 py-2 flex flex-col">
          {links.map((section) => (
            <HashLink
              key={section}
              smooth
              to={`/#${section.toLowerCase()}`}
              onClick={close}
              className="py-3 text-base font-semibold text-gray-900 hover:text-blue-600"
            >
              {section}
            </HashLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
