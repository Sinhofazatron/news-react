import {classNames} from "shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss"
import {useTranslation} from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
  short?: boolean
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
  const {t, i18n} = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  }

  return (
       <Button
          theme={ThemeButton.CLEAR}
          onClick={toggle}
          className={classNames(cls.LangSwitcher, {}, [className])}
       >
         { t( short ? 'Короткий язык' : 'Язык') }
       </Button>
  );
};
