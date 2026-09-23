import { Link } from "@/i18n/navigation";
import { SocialLinks } from "./components/social-links";
import { SectionLinks } from "./components/section-links";
import { itemsFooter } from "@/constants/constant-link";
import { getTranslations } from "next-intl/server";

export const Footer: React.FC = async () => {
  const t = await getTranslations("HomePage");
  const talentLink = itemsFooter.filter((item) => item.section === "talent");
  const communityLink = itemsFooter.filter(
    (item) => item.section === "community"
  );
  const legalLink = itemsFooter.filter((item) => item.section === "legal");

  return (
    <footer className="px-3 py-3 bg-primary w-full h-20 min-h-fit shadow-footer gap-6 text-third">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl w-full lg:justify-items-center">
        <SocialLinks />
        <SectionLinks listLink={talentLink} sectionName={"talent"} />
        <SectionLinks listLink={communityLink} sectionName={"community"} />
        <SectionLinks listLink={legalLink} sectionName={"legal"} />
      </div>
      <div className="py-6 w-full text-sm text-third/80 text-right flex flex-row flex-wrap justify-between">
        <div>©{new Date().getFullYear()} TechToJob</div>

        <div>
          {`${t("design")} `}
          <Link
            href="https://www.linkedin.com/in/josemglez/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            José Miguel González
          </Link>
        </div>
      </div>
    </footer>
  );
};
