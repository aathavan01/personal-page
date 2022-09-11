import clsx from 'clsx'

export interface Props {
  className?: string
}

const Title = ({ className }: Props) => {
  return (
    <div className={clsx(className,
        "text-6xl",
        "font-bold",
        "underline")}>
      <span>Title</span>
    </div>
  )
}

export default Title
