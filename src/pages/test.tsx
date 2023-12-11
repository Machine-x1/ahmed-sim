import React from 'react'
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const test = () => {
  const { t } = useTranslation();

  return <div>{t("HELLO_WORLD")}</div>;
}

export default test
export async function getStaticProps({ locale }: { locale :any}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}