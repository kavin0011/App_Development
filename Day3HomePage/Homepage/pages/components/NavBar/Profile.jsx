import React from 'react'
import Image from 'next/image'
import {FaUserAlt,FaRegImage,FaUserEdit} from 'react-icons/fa';
import {MdHelpCenter} from "react-icons/md"
import {TbDownloadOff,TbDownload} from 'react-icons/tb';
import Link from 'next/link';

import images from '../../../img'

const Profile = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-5 pt-2  w-full">
      <div className="row-span-1 col-span-6 flex justify-end pr-5">
        <Image className="rounded-3xl" src={images.user1} alt='user profile' width={50} height={50}/>
        </div>
        <div className="row-span-1 col-span-6">
          <p>Unknow User</p>
          <small>0x85w8d54s21.....</small>
        </div>
      {/* </div> */}
      {/* <div> */}
        {/* <div > */}
        <div className="row-span-1 col-span-12 flex pl-6 hover:bg-slate-400 rounded-xl hover:font-semibold hover:animate-none">
          <div className=" pr-4 pt-5 ">
            <FaUserAlt/>
          </div>
          <div className=" pt-4 justify-start w-full ">
            <p><Link href={{pathname:'/myprofilepage'}} >My Profile</Link></p>
          </div>
        </div>
        <div className="row-span-1 col-span-12 flex pl-6 hover:bg-slate-400 rounded-xl hover:font-semibold hover:animate-none">
          <div className=" flex justify-end pr-4 pt-3 ">
            <FaRegImage/>
          </div>
          <div className=" pt-2 flex justify-start">
            <p><Link href={{pathname:'/my-items'}}>My Items</Link></p>
          </div>
          </div>
          <div className="row-span-1 col-span-3 flex justify-end pr-4 pt-3">
            <FaUserEdit/>
          </div>
          <div className="row-span-1 col-span-9 pt-2 flex justify-start">
            <p><Link href={{pathname:'/edit-profile'}}>Edit Profile</Link></p>
          </div>
          {/* <div> */}
            <div className="row-span-1 col-span-3 flex justify-end pr-4 pt-3">
              <MdHelpCenter/>
            </div>
            <div className="row-span-1 col-span-9 pt-2 flex justify-start">
              <p><Link href={{pathname:'/help'}}>Help</Link></p>
            </div>
            <div className="row-span-1 col-span-3 flex justify-end pr-4 pt-3">
              <TbDownload/>
            </div>
            <div className="row-span-1 col-span-9 pt-2 flex justify-start">
              <p><Link href={{pathname:'/disconnect'}}>Disconnect</Link></p>
            </div>
          {/* </div> */}
        {/* </div> */}
      {/* </div> */}
    </div>
  )
}

export default Profile

// <div>
//       <div>
//         <Image className="rounded-3xl" src={images.user1} alt='user profile' width={50} height={50}/>

//         <div>
//           <p>Unknow User</p>
//           <small>0x85w8d54s21.....</small>
//         </div>
//       </div>
//       <div>
//         <div >
//           <div >
//             <FaUserAlt/>
//             <p><Link href={{pathname:'/myprofilepage'}}>My Profile</Link></p>
//           </div>
//           <div>
//             <FaRegImage/>
//             <p><Link href={{pathname:'/my-items'}}>My Items</Link></p>
//           </div>
//           <div>
//             <FaUserEdit/>
//             <p><Link href={{pathname:'/edit-profile'}}>Edit Profile</Link></p>
//           </div>
//           <div>
//             <div>
//               <MdHelpCenter/>
//               <p><Link href={{pathname:'/help'}}>Help</Link></p>
//             </div>
//             <div>
//               <TbDownload/>
//               <p><Link href={{pathname:'/disconnect'}}>Disconnect</Link></p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>