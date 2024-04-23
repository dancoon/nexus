import React from "react";
import { User } from "@/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";

interface CustomAvatarProps {
  user: User;
}

const CustomAvatar: React.FC<CustomAvatarProps> = ({ user }) => {
  return (
    <Avatar>
      <AvatarImage src={user.avatarUrl} alt={user.firstname} />
      <AvatarFallback>
        {user.firstname[0].toUpperCase() + user.lastname[0].toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
};

export default CustomAvatar;
