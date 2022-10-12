import Image from "next/image";
import Link from "next/link";
import useAuth from "../data/hook/useAuth";

interface IUserAvatarProps {
  className?: string;
}

export const UserAvatar = (props: IUserAvatarProps) => {
  const { user } = useAuth();

  return (
    <Link href="/profile">
      <Image
        className={`
        rounded-full cursor-pointer
        
        ${props.className}
        `}
              
        height={40}
        width={40}
        src={
          user?.photoUrl ??
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        }
        alt="User Avatar"
      />
    </Link>
  );
};
