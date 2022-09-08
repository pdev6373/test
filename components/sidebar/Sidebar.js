import { Logo, Nav, Profile } from "./features";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <Logo />
      </div>
      <Nav />
      <Profile />
    </div>
  );
};
