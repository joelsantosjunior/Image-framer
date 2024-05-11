import { ReactNode } from 'react'

interface PrimaryButtonProps {
  children: string | ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const PrimaryButton = ({ children, onClick }: PrimaryButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="transition font-display rounded-md text-3xl w-full bg-primary-blue-200 active:bg-primary-blue-100 shadow-md py-5 px-10 text-white font-bold"
    >
      {children}
    </button>
  )
}

export default PrimaryButton
