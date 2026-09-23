import { Channel } from "@/types";
import React from "react";

interface Props {
  channels: Channel[];
}

export const CategoryDetail: React.FC<Props> = ({ channels }) => {
  return (
    <ul className="pt-5 border-t list-none flex flex-col gap-4">
      {channels.map((channel, index) => (
        <li
          key={index}
          className="flex items-center justify-between text-primary"
        >
          <div>
            <span className="text-slate-600 text-xs" aria-hidden>
              💬
            </span>
            <span className="pl-2 font-semibold">{channel.name}</span>
            <p className="text-sm pl-6">{channel.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
