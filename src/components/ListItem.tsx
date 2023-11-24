"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";

interface ListItemProps {
 image: string;
 name: string;
 href: string;
}

const ListItem: React.FunctionComponent<ListItemProps> = ({
 image,
 name,
 href,
}) => {
 const router = useRouter();

 const onClick = () => {
  // TODO: Add Auth
  router.push(href);
 };

 return (
  <button
   className="relative group flex items-center rounded-lg overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4"
   onClick={onClick}
  >
   <div className="relative min-h-[64px] min-w-[64px]">
    <Image className="object-cover" src={image} alt="Image" fill />
   </div>
   <p className="font-medium truncate py-5">{name}</p>
   <div className="flex justify-center items-center absolute opacity-0 rounded-full bg-purple-600/80 group-hover:opacity-100 transition p-4 drop-shadow-lg right-5 hover:scale-110">
    <FaPlay className="text-white" />
   </div>
  </button>
 );
};

export default ListItem;
