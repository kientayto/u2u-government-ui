import { classNames } from "../../utils"
import { IconProps } from "../index"
export const ArrowDownIcon = ({ className = "", onClick }: IconProps) => {
  return (
    <svg onClick={onClick} width="24" height="24" className={classNames("stroke-text-disabled", className)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 8.5L12 15.5L5 8.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}


