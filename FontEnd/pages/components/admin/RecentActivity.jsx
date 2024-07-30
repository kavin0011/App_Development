import React from 'react';
import { FaUser, FaRegTimesCircle, FaRegCheckCircle } from 'react-icons/fa';

function RecentActivity() {
  return (
    <div className="bg-white border border-zinc-100 p-6 rounded-lg shadow-sm">
      <div className="text-2xl font-bold font-montserrat text-blue-600 mb-4">Recent Activity</div>
      <ul className="space-y-4">
        <li className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
          <FaRegCheckCircle className="text-blue-600 text-xl font-montserrat" />
          <span className='font-nunito'>User JohnDoe made a transaction</span>
        </li>
        <li className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
          <FaUser className="text-blue-600 text-xl" />
          <span className='font-nunito'>User JaneDoe registered</span>
        </li>
        <li className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
          <FaRegTimesCircle className="text-blue-600 text-xl font-montserrat" />
          <span className='font-nunito'>Transaction #1191 failed</span>
        </li>
      </ul>
    </div>
  );
}

export default RecentActivity;