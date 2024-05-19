import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import {Counter} from "entities/Counter";
import {Input} from "shared/ui/Input/Input";

const MainPage = () => {
  const { t } = useTranslation('main')
  const [value, setValue] = useState<string>('')

  const onChange = (value: string): void => {
    setValue(value)
  }

  return (
     <div>
       { t('Главная')}
       <Input
          onChange={onChange}
          value={value}
          placeholder={'Введите текст'}
       />
     </div>
  );
};

export default MainPage;