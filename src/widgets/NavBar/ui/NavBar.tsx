import {classNames} from "shared/lib/classNames/classNames";
import cls from './NavBar.module.scss'
import {useTranslation} from "react-i18next";
import {Modal} from "shared/ui/Modal/Modal";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useCallback, useState} from "react";

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev)
  }, [])

  return (
     <div className={classNames(cls.Navbar, {}, [className])}>
       <Button
          theme={ThemeButton.CLEAR_INVERTED}
          className={cls.links}
          onClick={onToggleModal}
       >
         {t('Войти')}
       </Button>
       <Modal isOpen={isAuthModal} onClose={onToggleModal}>
         sdfgdsglskj;dfm'lakdmg;osdfnjga;dfmg/ldfnliudafhogus
       </Modal>
     </div>
  );
};
