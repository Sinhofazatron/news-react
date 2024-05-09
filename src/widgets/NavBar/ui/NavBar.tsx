import {classNames} from "shared/lib/classNames/classNames";
import cls from './NavBar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
  return (
     <div className={classNames(cls.Navbar, {}, [className])}>
       <ThemeSwitcher />
       <div className={cls.links}>
         <AppLink to={'/'} theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>Главная</AppLink>
         <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>О сайте</AppLink>
       </div>
     </div>
  );
};
