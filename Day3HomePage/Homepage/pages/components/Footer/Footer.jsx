import React from 'react'
import Image from 'next/image'
import {TiSocialFacebook ,TiSocialLinkedin,TiSocialTwitter,TiSocialYoutube,TiSocialInstagram,TiArrowSortedDown,TiArrowSortedUp} from 'react-icons/ti';
import {RiSendPlaneFill} from 'react-icons/ri'
import images from '../../../img';
import Discover from '../NavBar/Discover'
import HelpCenter from '../NavBar/HelpCenter'
const Footer = () => {
  return (
    <div>
      <div>
        <div> 
          <Image src={images.logo} alt="Footer Logo" width={100} height={100}/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aspernatur quidem doloremque. Quisquam, mollitia quae. Quis saepe nesciunt culpa fuga dolores! Exercitationem, delectus. Hic iusto minus </p>
          <div>
            <a href="#">
              <TiSocialFacebook/>
              </a>
            <a href="#"><TiSocialLinkedin/></a>
            <a href="#"><TiSocialYoutube/></a>
            <a href="#"><TiSocialInstagram/></a>
            <a href="#"><TiSocialTwitter/></a>
          </div>
        </div>
        {/* DISCOVER COMPONENT */}
        <div>
          <h3>Discover</h3>
          <Discover/>
        </div>
        {/* Help Center Compoent */}
        <div>
          <h3>Help Center</h3>
          <HelpCenter/>
        </div>
        <div>
          <h3>Subscribe</h3>
         <div>
          <input className='border border-black rounded-md' type='email' placeholder=" Enter your email"/>
          <RiSendPlaneFill />
         </div>
         <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est maiores dolor impedit repellat consequatur tempore ducimus nostrum consectetur accusamus! Quisquam labore voluptatibus dolorem sapiente natus quaerat ea, accusantium nihil sunt.</p>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Footer