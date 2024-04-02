import { useTranslations } from "next-intl";
import React from "react";

function Benefits() {
  const t = useTranslations("benefits");
  return (
    <section>
      <div className="w-full flex items-start justify-around">
        <ul className="animate-pulse text-[17px] font-semibold text-purple-900 space-y-2">
          <li>{t("viewOne")}</li>
          <li>{t("viewTwo")}</li>
          <li>{t("viewThree")}</li>
          <li>{t("viewFour")}</li>
        </ul>
        <ul className="animate-pulse text-[17px] font-semibold text-purple-900 space-y-2">
          <li className="">{t("viewFive")}</li>
          <li>{t("viewSix")}</li>
          <li>{t("viewSeven")}</li>
          <li>{t("viewEight")}</li>
        </ul>
      </div>
    </section>
  );
}

export default Benefits;
