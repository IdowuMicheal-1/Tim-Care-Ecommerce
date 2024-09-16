import React from 'react'
import { createPortal } from 'react-dom'

const MobileNav = (children) => {

    const Backdrop = () => {
        return (
           <div></div>
        )
    }

    const MobileModal = ({children}) => {
        return (
            <div>{children}</div>
        )
    }
  return (
    <div>
        {createPortal(<Backdrop />,document.getElementById('mobile'))}
        {createPortal(<MobileModal>{children}</MobileModal>,document.getElementById('mobile'))}

    </div>
  )
}

export default MobileNav