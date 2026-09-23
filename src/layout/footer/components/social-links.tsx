import { Button } from "@/common/atoms/button";
import { socialLink } from "@/constants/constant-link";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export const SocialLinks: React.FC = async () => {
  const t = await getTranslations("Nav");

  return (
    <div className="flex flex-col gap-y-6  gap-x-4 p-4 lg:items-center md:order-2 lg:col-span-2">
      <nav className="flex flex-row gap-3 text-2xl">
        {socialLink.map((link) => (
          <Link key={link.name} href={link.profileLink} aria-label={link.name}>
            {link.icon}
          </Link>
        ))}
      </nav>
      <div className="w-fit">
        <Button
          to={process.env.NEXT_PUBLIC_LINK_DISCORD!}
          title={t("btnActionTitle")}
          internal={false}
          size="S"
        >
          {t("btnActionName")}
        </Button>
      </div>
    </div>
  );
};
