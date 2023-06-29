import { useTranslation } from "react-i18next"

const AboutPage = () => {
  const { t } = useTranslation("about")

  return <div>{t("о нас страница")}</div>
}

export default AboutPage
