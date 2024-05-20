import {classNames} from "shared/lib/classNames/classNames";
import cls from './LoginForm.module.scss'
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {memo, useCallback} from "react";
import {loginActions} from "../../model/slice/loginSlice";
import {getLoginState} from "../../model/selectors/getLoginState/getLoginState";
import {loginByUsername} from "../../model/services/loginByUsername/loginByUsername";
import {Text, TextTheme} from "shared/ui/Text/Text";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const { username, password, error, isLoading } = useSelector(getLoginState)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({username, password}))
  }, [dispatch, username, password])

  return (
     <div className={classNames(cls.LoginForm, {}, [className])}>
       <Text title={t('Форма авторизации')}/>
       {error && (
          <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR}/>
       )}
       <Input
          autofocus
          className={cls.input}
          type="text"
          placeholder={t('Введите логин')}
          onChange={onChangeUsername}
          value={username}
       />
       <Input
          className={cls.input}
          type="text"
          placeholder={t('Введите пароль')}
          onChange={onChangePassword}
          value={password}
       />
       <Button
          className={cls.loginBtn}
          theme={ThemeButton.OUTLINE}
          onClick={onLoginClick}
          disabled={isLoading}
       >
         {t('Войти')}
       </Button>
     </div>
  );
})
