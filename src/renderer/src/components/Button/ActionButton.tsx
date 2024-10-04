import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
export type ActionButtonProps = ComponentProps<"button">;
const ActionButton = ({className,children,...props}:ActionButtonProps)=> {
  return (
   <button className={twMerge('px-2 py-1 rounded-md border boredr-zunc-400/50 hover:bg-zinc-600/50 transition-colors duration-100',className)}
    {...props}>
    {children}...
   </button>
  )
}

export default ActionButton;
