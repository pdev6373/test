import Image from "next/image";
import Link from "next/link";
import { nav } from "./constant";

export const Nav = () => {
  return (
    <nav className="sidebar__nav">
      <ul className="sidebar__nav__list">
        {nav.map((route) => (
          <li
            key={route.name}
            className={
              route.name === "Dashboard"
                ? "sidebar__nav__list__item sidebar__nav__list__item__active"
                : "sidebar__nav__list__item"
            }
          >
            <Image
              src={`/${route.icon}`}
              alt="nav icon"
              width="20px"
              height="20px"
            />
            <Link href="/">{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
