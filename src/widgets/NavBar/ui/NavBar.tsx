import {classNames} from "shared/lib/classNames/classNames";
import cls from './NavBar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
  const { t } = useTranslation()

  return (
     <div className={classNames(cls.Navbar, {}, [className])}>
       <div className={cls.links}>
         /
       </div>
     </div>
  );
};
