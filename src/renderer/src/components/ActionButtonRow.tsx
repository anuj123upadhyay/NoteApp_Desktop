import { ComponentProps } from "react"
import DeleteNoteButton from "./Button/DeleteNoteButton"
import NewNodeButton from "./Button/NewNoteButton"


const  ActionButtonRow = ({...props}:ComponentProps<'div'>) => {
  return (
    <div {...props}>
      <NewNodeButton/>
      <DeleteNoteButton/>
    </div>
  )
}

export default ActionButtonRow
