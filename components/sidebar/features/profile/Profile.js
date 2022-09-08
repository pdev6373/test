import Image from "next/image";

export const Profile = () => {
  return (
    <div className="sidebar__profile">
      <Image src="/image.svg" alt="profile image" width="32px" height="32px" />
      <span className="sidebar__profile__name">Blessing Daniels</span>
      <Image
        src="/more.svg"
        alt="profile image"
        width="20px"
        height="20px"
        className="sidebar__profile__more"
      />
    </div>
  );
};
