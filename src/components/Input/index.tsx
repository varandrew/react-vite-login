import React, {
  useRef,
  useImperativeHandle,
  forwardRef,
  Ref,
  useState,
  ChangeEvent
} from 'react'
import { isRegExp } from 'utils'
import './index.module.css'

interface Rule {
  valid: string | RegExp
  help: string
}

export interface IProps {
  className?: string
  rule?: Rule
  type?: string
  size?: 'sm' | 'md' | 'lg'
  value?: string
  prefix?: React.ReactNode
  maxLength?: number
  onChange?: (valid: boolean, value: string) => void
}

export interface XInput {
  focus: () => void
  blur: () => void
}

export type InputProps = IProps &
  Omit<React.HTMLAttributes<HTMLInputElement>, 'prefix' | 'onChange'>

const sizeOptions = {
  sm: 40,
  md: 42,
  lg: 44
}

function Input(
  {
    size = 'sm',
    rule,
    className,
    prefix,
    value,
    onChange,
    ...rest
  }: InputProps,
  ref: Ref<XInput>
) {
  const [isWarn, setIsWarn] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const [_value, setValue] = useState(value || '')

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current && inputRef.current.focus()
    },
    blur: () => {
      inputRef.current && inputRef.current.blur()
    }
  }))

  const _onChange = (e: ChangeEvent<HTMLInputElement>) => {
    let valid = true
    const value = e.target.value
    if (rule) {
      let reg: RegExp | undefined = void 0
      const isReg = isRegExp(rule.valid)
      if (isReg) reg = rule.valid as RegExp
      else reg = new RegExp(rule.valid)

      valid = reg.test(value)
    }
    setValue(value)
    setIsWarn(!valid)
    onChange && onChange(valid, value)
  }

  return (
    <div className="w-full">
      <div
        className={'relative w-full h-[44px] md:h-[40px] '.concat(
          className ?? ''
        )}
      >
        <input
          className="w-full rounded-[6px] border-[1px] border-[#D0D3D6] focus:border-[#3371FF] "
          style={{ height: sizeOptions[size] + 'px' }}
          value={_value}
          onChange={_onChange}
          ref={inputRef}
          {...rest}
        />
        {prefix && (
          <span className="absolute left-[16px] top-1/2 -translate-y-1/2">
            {prefix}
          </span>
        )}
      </div>

      {isWarn && rule?.help && (
        <p className="mt-[10px] text-[12px] font-[400] tracking-normal text-[#FA5757] md:mt-[8px]">
          {rule.help}
        </p>
      )}
    </div>
  )
}

export default forwardRef(Input)
