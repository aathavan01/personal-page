import clsx from 'clsx'
import { useTranslation } from 'react-i18next'

export interface Props {
  className?: string
}

const Title = ({ className }: Props) => {
  const { t } = useTranslation()
  return (
    <div className={clsx(className,
        "font-accent",
        "text-5xl md:text-6xl lg:text-7xl",
        "flex justify-center"
        )}>
      <span >{t('Hero.title')}</span>
    </div>
  )
}

export default Title
