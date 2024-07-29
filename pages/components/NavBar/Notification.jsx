import React from 'react'
import Image from 'next/image'

//INTERNAL IMPORT
import images from '../../../img'
const Notification = () => {
  return (
    <div>
      <p>Notification</p>
      <div>
         <div>
          <Image src={images.user1} alt="profile image" width={50} height={50}/>
         </div>
         <div>
          <h4>Some One Unknown</h4>
          <p>Measure the Use ...</p>
          <small>3 minutes</small>
         </div>
         <span></span>
        </div> 
    </div>
  )
}

export default Notification