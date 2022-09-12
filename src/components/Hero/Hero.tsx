import clsx from 'clsx'
import Avatar from './Avatar'
import Title from './Title/Title'
import Typed from "react-typed"

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
        <Typed 
        strings={[
            "React developer",
            "Ui/Ux",
            "student"

        ]}
        fadeOut
        loop
        backDelay={100}
        typeSpeed={100}
        className="flex justify-center text-3xl"
        />
        
      </div>
          
    </div>
    </div>
  )
}

export default Hero
