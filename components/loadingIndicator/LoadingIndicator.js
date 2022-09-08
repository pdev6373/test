import Image from "next/image";

export const LoadingIndicator = () => {
  return (
    <div className="loading__indicator">
      <Image src="/loader.gif" alt="loader" width="200px" height="200px" />
    </div>
  );
};
