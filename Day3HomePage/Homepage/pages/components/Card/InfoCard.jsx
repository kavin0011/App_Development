// import React from 'react'

// const Fragment2 = () => {
//   return (
//     <div className='flex justify-center min-w-screen min-h-screen '>
//         <div className=' items-center  bg-pinkback p-80'  >
//             <div className='font-bold font-poppins text-4xl -mt-[250px]' >Why Choose Us?</div>
//                 <div className='flex mt-[170px]'>

//                     <div className="max-w-sm mx-auto bg-white shadow-lg rounded-[10px]  overflow-hidden">
//                         <div className="p-6">
//                         <h2 className="text-2xl font-bold mb-4">Fast and Efficient</h2>
//                         <p className="text-gray-700">Our streamlined process allows you to complete transactions quickly and effortlessly. With just a few clicks, your mobile is recharged and ready to go.</p>
//                     </div>

//                     <div className="max-w-sm mx-auto bg-white shadow-lg rounded-[10px] overflow-hidden">
//                         <div className="p-6">
//                             <h2 className="text-2xl font-bold mb-4">Secure and Reliable</h2>
//                             <p className="text-gray-700">We use advanced security measures to protect your personal and payment information. Our encrypted transactions ensure that your data is always safe.</p>
//                         </div>
//                     </div>
                    
//                      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-[10px] overflow-hidden">
//                         <div className="p-6">
//                             <h2 className="text-2xl font-bold mb-4">24/7 Availability</h2>
//                             <p className="text-gray-700">Access our services anytime, from anywhere. Whether it's early in the morning or late at night, we’re here to support you around the clock.</p>
//                         </div>
//                     </div>
                     
//                      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-[10px] overflow-hidden">
//                         <div className="p-6">
//                             <h2 className="text-2xl font-bold mb-4">Exclusive Offers</h2>
//                             <p className="text-gray-700">Take advantage of special deals, discounts, and cashback offers. Save more with every recharge and get the best value for your money.</p>
//                         </div>
//                     </div>

                    

//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Fragment2;
import React from 'react';

const InfoCard = () => {
  return (
    <div className='flex  justify-center '>
      <div className=' bg-blue-900 p-80'>
        <div className='font-bold font-poppins text-4xl -mt-[250px]'>Why Choose Us?</div>
        <div className='flex mt-[170px] space-x-4'>
          <div className="max-w-sm mx-auto bg-white shadow-lg rounded-[10px] overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Fast and Efficient</h2>
              <p className="text-gray-700">Our streamlined process allows you to complete transactions quickly and effortlessly. With just a few clicks, your mobile is recharged and ready to go.</p>
            </div>
          </div>
          
          <div className="max-w-sm mx-auto bg-white shadow-lg rounded-[10px] overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Secure and Reliable</h2>
              <p className="text-gray-700">We use advanced security measures to protect your personal and payment information. Our encrypted transactions ensure that your data is always safe.</p>
            </div>
          </div>
          
          <div className="max-w-sm mx-auto bg-white shadow-lg rounded-[10px] overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">24/7 Availability</h2>
              <p className="text-gray-700">Access our services anytime, from anywhere. Whether it's early in the morning or late at night, we’re here to support you around the clock.</p>
            </div>
          </div>
          
          <div className="max-w-sm mx-auto bg-white shadow-lg rounded-[10px] overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Exclusive Offers</h2>
              <p className="text-gray-700">Take advantage of special deals, discounts, and cashback offers. Save more with every recharge and get the best value for your money.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;