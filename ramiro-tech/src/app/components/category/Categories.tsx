mport { FC } from 'react'
import { FrontProps, CategoryContainerProps, BackProps } from './types'

const CategoryContainer: FC<CategoryContainerProps> = ({ children }) => (
  <div
    className="relative flex justify-center items-center bg-tertiary border border-secondary rounded-lg h-36 w-36 transition-transform duration-700 ease-in-out transform hover:rotate-y-180 hover:shadow-md cursor-pointer"
    style={{ perspective: '1000px' }}>
    {children}
  </div>
)

const Front: FC<FrontProps> = ({ children, $image }) => (
  <div
    className="absolute h-full w-full rounded-lg bg-center bg-cover transition-opacity duration-700 ease-in-out opacity-100 hover:opacity-0"
    style={{
      backgroundImage: url(${$image}),
      transform: 'rotateY(0deg)',
    }}>
    {children}
  </div>
)

const Back: FC<BackProps> = ({ children }) => (
  <div
    className="absolute h-full w-full bg-tertiary rounded-lg flex justify-center items-center font-semibold text-sm text-primary transition-opacity duration-700 ease-in-out opacity-0 hover:opacity-100"
    style={{ transform: 'rotateY(180deg)' }}>
    {children}
  </div>
)

export { CategoryContainer, Front, Back }