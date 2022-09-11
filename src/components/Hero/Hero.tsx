import clsx from 'clsx'
import Avatar from './Avatar'
import Title from './Title/Title'

export interface Props {
  className?: string
}

const Hero = ({ className }: Props) => {
  return (
    <div className={clsx(className)}>
    <div className='flex justify-center'>
      <div className="flex-col">
        <Avatar/>
        <Title/>
        
      </div>
          
    </div>
    </div>
  )
}

export default Hero
