import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      data-sal="zoom-in"
      data-sal-delay="300"
      data-sal-easing="ease-out-back"
      width={500}
      height={500}
      src={"/avatar-home.jpg"}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
      alt="avatar"
      className="h-56 w-56 rounded-full 2xl:h-60 2xl:w-60"
    />
  );
};
export default Avatar;
