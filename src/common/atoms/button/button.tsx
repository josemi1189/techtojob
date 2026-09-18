import React from "react";
import { Link } from "@/i18n/navigation";

interface Props {
  children: React.ReactNode;
  to: string;
  title: string;
  ariaLabel?: string;
  size?: "L" | "M" | "S";
  internal?: boolean;
  className?: string;
}
/**
 *
 * @param to <string> URL or path to navigate to
 * @param title <string> Tooltip text when hovering over the button
 * @param label <string> Text displayed on the button
 * @param ariaLabel <string> Accessibility label for screen readers
 * @param internal? <boolean> Indicates if the link is internal (default: true)
 * @param size? <"L" | "M" | "S"> Button size
 * @param className? <string> Custom clasess
 * @returns React.ReactElement
 */
export const Button: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const {
    children,
    to,
    title,
    ariaLabel,
    size = "M",
    internal = true,
    className,
  } = props;

  const defaultClass: string = `inline-flex items-center justify-center font-black rounded-full border-2 border-secondary
      shadow-secondary/40 ring-4 ring-secondary/10 transition-transform transition-colors duration-200 ease-out
      hover:-translate-y-0.5 hover:scale-105 hover:bg-primary/90 hover:shadow-lg hover:shadow-secondary/40 focus-visible:outline-2
      focus-visible:outline-offset-4 focus-visible:outline-secondary`;

  const getClass = () => {
    let classLink: string = "";
    switch (size) {
      case "L":
        classLink = `${defaultClass} px-10 py-5 text-xl shadow-2xl`;
        break;
      case "M":
        classLink = `${defaultClass} px-8 py-3 text-lg shadow-lg`;
        break;
      default:
        classLink = `${defaultClass} px-6 py-2 text-md shadow-md`;

        return classLink;
    }
    return classLink;
  };
  return (
    <div className="bg-secondary text-primary rounded-full">
      {internal ? (
        <Link
          className={className ? className : getClass()}
          href={to}
          title={title}
          aria-label={ariaLabel}
        >
          {children}
        </Link>
      ) : (
        <a
          href={to}
          title={title}
          aria-label={ariaLabel}
          target="_blank"
          rel="noopener"
          className={className ? className : getClass()}
        >
          {children}
        </a>
      )}
    </div>
  );
};
/**
 * <a
          className={className ? className : styles.button}
          href={to}
          title={title}
          aria-label={ariaLabel}
          target="_blank"
          rel="noopener"
        >
          {children}
        </a>
 */
