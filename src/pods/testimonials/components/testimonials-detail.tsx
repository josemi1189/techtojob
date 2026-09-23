import { LanguageTestimonial, PlatformConfig, Testimonial } from "@/types";
import Link from "next/link";
import React from "react";

interface Props {
  testimony: Testimonial;
  localizedContent: LanguageTestimonial;
  ariaLabelText: string;
  platformConfig: PlatformConfig;
}
export const TestimonialsDetail: React.FC<Props> = (props) => {
  const { testimony, localizedContent, platformConfig, ariaLabelText } = props;

  return (
    <li key={testimony.id} className="w-full">
      <article className="flex flex-col justify-between p-4 rounded-xl bg-third shadow-md">
        <p className="text-base leading-relaxed text-primary/90 italic pb-2">
          {localizedContent.testimonial}
        </p>

        <footer className="pt-2 border-t border-secondary/10 flex flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-primary text-lg">{testimony.name}</h3>
            <p className="text-sm text-gray-600">{localizedContent.role}</p>
          </div>

          <Link
            href={testimony.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabelText}
            className={`text-2xl inline-flex items-center justify-center p-2 rounded-2xl border-2 border-secondary
                    transition-all duration-200 ease-out text-primary ${platformConfig.platformClass}
                    focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary`}
          >
            {platformConfig.icon}
          </Link>
        </footer>
      </article>
    </li>
  );
};
