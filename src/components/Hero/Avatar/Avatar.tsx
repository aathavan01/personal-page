import clsx from 'clsx'
import logo from "../../../aathavan-profile.png"

export interface Props {
  className?: string
}

const Avatar = ({ className }: Props) => {
  return (
    <div className={clsx(className)}>
      <img src={logo} alt="image"/>
    </div>
  )
}

export default Avatar
