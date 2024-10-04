import React from 'react'
import { ActionButtonProps} from '@/components'
import ActionButton from './ActionButton'
import {LuFileSignature} from "react-icons/lu"
import { useSetAtom } from 'jotai'
import { createEmptyNoteAtom } from '@renderer/store'
const NewNodeButton = ({...props}: ActionButtonProps)=> {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom)
  const handleCreation =()=>{
    createEmptyNote()
  }
  return (
   <ActionButton onClick={handleCreation}{...props}><LuFileSignature className="w-4 text-zinc-100" /></ActionButton>
  )
}

export default NewNodeButton
