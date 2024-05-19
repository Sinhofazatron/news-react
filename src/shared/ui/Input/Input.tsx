import { classNames } from "shared/lib/classNames/classNames";
import cls from './Input.module.scss'
import React, {InputHTMLAttributes, memo, useEffect, useRef} from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
  autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    ...otherProps
  } = props

  const [isFocused, setIsFocused] = React.useState(false)
  const [caretPosition, setCaretPosition] = React.useState(0)
  const ref = useRef<HTMLInputElement>()

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true)
      ref.current?.focus()
    }
  }, [autofocus]);

  const onBlur = () => {
    setIsFocused(false)
  }

  const onFocus = () => {
    setIsFocused(true)
  }

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0)
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
    setCaretPosition(e.target.value.length)
  }

  return (
     <div className={classNames(cls.InputWrapper, {}, [className])}>
       {placeholder && (
          <div className={cls.placeholder}>
            {`${placeholder}>`}
          </div>
       )}
       <div className={cls.caretWrapper}>
         <input
            type={type}
            value={value}
            onChange={onChangeHandler}
            className={cls.input}
            onFocus={onFocus}
            onBlur={onBlur}
            onSelect={onSelect}
            ref={ref}
            {...otherProps}
         />
         {isFocused && (
            <span
               className={cls.caret}
               style={{ left: `${caretPosition * 7}px` }}
            />
         )}
       </div>
     </div>
  );
})
