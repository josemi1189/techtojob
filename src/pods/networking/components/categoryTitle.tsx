import { Category } from "@/types";
import React from "react";

interface Props {
  category: Category;
}

export const CategoryTitle: React.FC<Props> = ({ category }) => {
  return (
    <div>
      <header className="flex items-center gap-3 mb-4">
        <span className="text-2xl" aria-hidden>
          {category.icon}
        </span>
        <h3 className="font-bold text-lg tracking-wide">{category.title}</h3>
      </header>
      <p className="text-primary/90 text-sm mb-6 leading-relaxed">
        {category.description}
      </p>
    </div>
  );
};
