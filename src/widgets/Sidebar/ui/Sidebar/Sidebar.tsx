import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss"
import {useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LangSwitcher} from "shared/ui/LangSwitcher/LangSwitcher";
import {Button, ButtonSize, ThemeButton} from "shared/ui/Button/Button";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";
import {RoutePath} from "shared/config/routerConfig/RouteConfig";
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation()
  const onToggle = () => setCollapsed( !collapsed );

  return (
     <div data-testid='sidebar' className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
        <Button
           data-testid="sidebar-toggle"
           onClick={ onToggle }
           className={cls.collapsedBtn}
           theme={ThemeButton.BACKGROUND_INVERTED}
           size={ButtonSize.L}
           square
        >
          {collapsed ? '>' : '<'}
        </Button>
       <div className={cls.items}>
           <AppLink
              to={RoutePath.main}
              theme={AppLinkTheme.SECONDARY}
              className={cls.item}
           >
             <MainIcon className={cls.icon}/>
             <span  className={cls.link}>{t('Главная')}</span>
           </AppLink>
           <AppLink
              to={RoutePath.about}
              theme={AppLinkTheme.SECONDARY}
              className={cls.item}
           >
             <AboutIcon className={cls.icon}/>
             <span  className={cls.link}>{t('О сайте')}</span>
           </AppLink>
       </div>
       <div className={cls.switchers}>
         <ThemeSwitcher/>
         <LangSwitcher short={collapsed} className={cls.lang}/>
       </div>
     </div>
  );
};
