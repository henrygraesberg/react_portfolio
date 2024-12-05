"use client"
import { FC, useState } from "react"
//import useLocalStorageState from "@/hooks/useLocalStorageState"

interface NotCookieOptionProps {
  option_name: string
}

const NotCookieOption: FC<NotCookieOptionProps> = ({ option_name }) => (
  <div className="flex justify-between items-center max-md:flex-col">
    <p className="font-bold text-center">{option_name}</p>
    <div className="flex gap-4 max-md:flex-col">
      <div className="flex flex-col justify-between">
        Consent
        <input type="checkbox" />
      </div>
      <div className="flex flex-col justify-between">
        <p className="text-center">Legitimate<br />interest</p>
        <input type="checkbox" checked />
      </div>
    </div>
  </div>
)

const NotCookiesModal = () => {
  const [showMore, setShowMore] = useState(false)
  const [hide, setHide] = useState(false)

  //const [permanentHide, setPermanentHide] = useLocalStorageState("permanent_hide", false)
  //const [permanenetHideCheckbox, setPermanentHideCheckbox] = useState(permanentHide)

  return (
  <div className={`fixed w-[100vw] h-[100vh] flex justify-center bg-[rgba(0,0,0,0.7)] ${(hide /*|| permanentHide*/) && "hidden"} z-[100]`}>
    <div className={`bg-[#aaa] dark:bg-background_dark p-20 place-self-center rounded-2xl w-1/2 flex flex-col gap-4`}>
      <h2 className="text-2xl">This site does not use cookies</h2>
      <div className={`${!showMore && "hidden"} flex flex-col gap-3`}>
        <NotCookieOption option_name="There are no options" />
        <NotCookieOption option_name="Because this site doesnt use cookies" />
        
        {/*<div className="flex justify-between items-center max-md:flex-col">
          <p className="font-bold text-center">Actually don&apos;t show again (Uses local storage, still no cookies)</p>
          <div className="flex gap-4 max-md:flex-col">
            <div className="flex flex-col justify-between">
              <input type="checkbox" checked={permanenetHideCheckbox} onChange={e => setPermanentHideCheckbox(e.target.checked)} />
            </div>
        </div>
        </div>*/}
      </div>
      <div className="flex max-md:flex-col gap-5">
        <button className="rounded-full p-2 px-4 bg-primary text-text_secondary max-lg:w-full lg:w-1/3" onClick={() => setShowMore(!showMore)}>
        {showMore ? "Hide options" : "More options"}
        </button>
        <button className="rounded-full p-2 px-4 bg-accent text-text max-lg:w-full lg:w-2/3" onClick={() => {setHide(!hide); /*setPermanentHide(permanenetHideCheckbox)*/}}>
        {showMore ? "Save preferences" : "Got it, don't show again"}
        </button>
      </div>
    </div>
  </div>
  )
}

export default NotCookiesModal;
