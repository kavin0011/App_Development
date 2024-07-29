import React,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {GrClose} from 'react-icons/gr'
import {TiSocialFacebook ,TiSocialLinkedin,TiSocialTwitter,TiSocialYoutube,TiSocialInstagram,TiArrowSortedDown,TiArrowSortedUp} from 'react-icons/ti';

//INTERNAL IMPORT
import images from '../../../img'
import Button from '../Button/Button'
const SideBar = ({setopensidemenu}) => {
  // UseState
  const [opendiscover, setopendiscover] = useState(false);
  const [openhelp, setopenhelp] = useState(false);

   // Discover Navigation Menu
   const discover = [
    {
      name:"Collection",
      link:"collection"
    },
    {
      name:"Search",
      link:"search"
    },
    {
      name:"Author Profile",
      link:"author profile"
    },
    {
      name:"NFT Details",
      link:"NFT-details"
    },
    {
      name:"Account Setting",
      link:"account-setting"
    },
    {
      name:"Connect Wallet",
      link:"connect-wallet"
    },
    {
      name:"Blog",
      link:"blog"
    }
  ]
  //HelpCenter
  const helpcenter=[
    {
      name:"About",
      link:"about"
    },
    {
      name:"Contact Us",
      link:"contact-us"
    },
    {
      name:"Sign Up",
      link:"sign-up"
    },
    {
      name:"Sign In",
      link:"sign-in"
    },
    {
      name:"Subscription",
      link:"subscription"
    },
  ]

  const opendiscovermenu=()=>{
    if(!opendiscover){
      setopendiscover(true);
    }
    else{
      setopendiscover(false);
    }
  }
    const openhelpmenu=()=>{
      if(!openhelp){
        setopenhelp(true);
      }else{
      setopenhelp(false);
      }
    }
    const closesidebar=()=>{
      setopensidemenu(false);
    }
  return (
    <div className='bg-slate-400' >
      <GrClose className="pt-1" onClick={()=>(closesidebar())}/>
        <div className="grid grid-rows-3" >
          <div className="row-span-1">
          <Image src={images.logo} alt="logo" width={150} height={70}/>
          </div>
          <p className="row-span-1 font-serif">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum perferendis alias facere inventore vero? Molestias repellendus sapiente libero </p>
          <div className="row-span-1 flex justify-around pt-5 px-9">
            <a href="#"><TiSocialFacebook/></a>
            <a href="#"><TiSocialLinkedin/></a>
            <a href="#"><TiSocialTwitter/></a>
            <a href="#"><TiSocialInstagram/></a>
            <a href="#"><TiSocialYoutube/></a>
          </div>
        </div>
        {/* <div className="flex justify-around">
          <div>
          <div onClick={()=>(opendiscovermenu())}>
            <p className="font-medium">Discover</p>
            <TiArrowSortedDown/>
          </div>
          {
            opendiscover&& <div>
              {discover.map((e,k)=>(
                <div className="cursor-pointer absolute flex" key={k+1}><Link href={{pathname:`${e.link}`}}>{e.name}</Link></div>
              ))}
              </div>
          }
         </div>
         <div>
          <div onClick={()=>openhelpmenu()}>
            <p className="font-medium">Help Center</p>
            <TiArrowSortedDown/>
          </div>
          {
            openhelp&&(
              <div>
                {helpcenter.map((e,k)=>(
                  <p key={k+1}><Link href={{pathname:`${e.link}`}}>{e.name}</Link></p>
                ))}
              </div>
            )   
          }
         </div>
        </div> */}
        <div className="grid grid-cols-2">
          <div className=" pl-24 col-span-1">
          <Button btnName="Create" handleClick={()=>{}}/>
          </div>
          <div className="col-span-1 pb-2">
          <Button btnName="Connect Wallet" handleClick={()=>{}}/>
          </div>
        </div>
      </div>
  )
}

export default SideBar