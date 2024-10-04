import { RootLayout ,Content,SideBar, NotePreviewList} from "@/components"
import DraggableTopBar from "./components/DraggableTopBar"
import ActionButtonRow from "./components/ActionButtonRow"
import MarkdownEditor from "./components/MarkdownEditor"
import FloatingNoteTitle from "./components/FloatingNoteTitle"
import { useRef } from "react"


const  App = () => {
  const contentContainerRef = useRef<HTMLDivElement>(null)
  const resetScroll =() =>{
    contentContainerRef.current?.scrollTo(0,0)
  }
  return (
   <>
   <DraggableTopBar/>
   <RootLayout>
    <SideBar className="p-2 "> 
      <ActionButtonRow className="flex justify-between mt-1"/>
      <NotePreviewList className="mt-3 space-y-1" onSelect={resetScroll}/>
    </SideBar>
    <Content ref={contentContainerRef} className="border-l bg-zinc-900/50 border-l-white ">
    <FloatingNoteTitle className="pt-2 " />
    <MarkdownEditor  />
    </Content>
   </RootLayout>
   </>
  )
}

export default App
