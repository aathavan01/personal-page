import clsx from 'clsx'

export interface Props {
  className?: string
}

const Title = ({ className }: Props) => {
  return (
    <div className={clsx(className,
        "font-accent",
        "text-5xl md:text-6xl lg:text-7xl",
        )}>
      <span>Aathavan</span>
    </div>
  )
}

export default Title
