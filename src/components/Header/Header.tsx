import clsx from 'clsx'
import LanguageSwitch from './LanguageSwitch'
import ThemeSwitch from './ThemeSwitch'

export interface Props {
  className?: string
}

const Header = ({ className }: Props) => {
  return (
  
      <div className='flex justify-between'>
        <div><ThemeSwitch/></div>
        <div><LanguageSwitch/></div>
      </div>

  )
}

export default Header
