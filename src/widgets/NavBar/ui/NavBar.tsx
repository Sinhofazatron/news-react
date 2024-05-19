import {classNames} from "shared/lib/classNames/classNames";
import cls from './NavBar.module.scss'
import {useTranslation} from "react-i18next";
import {Modal} from "shared/ui/Modal/Modal";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useCallback, useState} from "react";
import {LoginModal} from "features/AuthByUsername";

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false)

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  return (
     <div className={classNames(cls.Navbar, {}, [className])}>
       <Button
          theme={ThemeButton.CLEAR_INVERTED}
          className={cls.links}
          onClick={onShowModal}
       >
         {t('Войти')}
       </Button>
       <LoginModal
          isOpen={isAuthModal}
          onClose={onCloseModal}
       />
     </div>
  );
};
