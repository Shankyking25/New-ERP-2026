import { Avatar } from "@mui/material";

interface Props {
  src?: string;
  name: string;
}

export default function EmployeeAvatar({
  src,
  name,
}: Props) {
  return (
    <Avatar
      src={src}
      alt={name}
      sx={{
        width: 40,
        height: 40,
      }}
    >
      {!src && name.charAt(0).toUpperCase()}
    </Avatar>
  );
}