import { MouseEvent } from 'react'

export interface IProps {
  className?: string
  disabled?: boolean
  children?: React.ReactNode
  onClick?: (event: MouseEvent) => any
}

// const btnClassNames = 'h-[44px] w-full rounded-[6px] bg-[#3371FF] text-[18px] md:text-[16px] md:h-[40px] font-[400] tracking-normal text-white hover:bg-blue-400'
const btnClassNames =
  'h-[44px] w-full rounded-[6px] text-[18px] md:text-[16px] md:h-[40px] font-[400] tracking-normal text-white'

const Button = ({ className, children, disabled = false, onClick }: IProps) => {
  const clickHandler = (e: MouseEvent) => {
    onClick && onClick(e)
  }
  const classNames = `${btnClassNames} ${
    disabled ? 'bg-[#BBBFC4] ' : 'bg-[#3371FF] hover:bg-blue-400 '
  }`

  return (
    <button
      className={classNames.concat(className ?? '')}
      disabled={disabled}
      onClick={clickHandler}
    >
      {children}
    </button>
  )
}

export default Button
