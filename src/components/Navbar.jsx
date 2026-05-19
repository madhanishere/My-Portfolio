import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    {name: "About", path: "/experience" },
    { name: "Works", path: "/projects" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm">
      <div
        className="
          max-w-3xl
          mx-auto

          flex items-center justify-between

          px-6 py-5
        "
      >

        <h1
          className="
            text-[#ff8c42]
            font-black
            text-lg
            tracking-wide
          "
        >
          
        </h1>

        <div className="flex items-center gap-6">
          {navItems.map((item) => {
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`
                  relative
                  text-sm
                  font-bold
                  tracking-wide
                  transition-all
                  duration-200

                  ${
                    active
                      ? "text-[#ff8c42]"
                      : "text-[#d1d5db] hover:text-white"
                  }
                `}
              >
                {item.name}

                {active && (
                  <span
                    className="
                      absolute
                      left-0
                      -bottom-2

                      w-full
                      h-[2px]

                      bg-[#ff8c42]
                    "
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}