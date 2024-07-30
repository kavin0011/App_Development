import React from 'react';
import { FaBell, FaTools } from 'react-icons/fa';

function    NotificationsAlerts() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border-zinc-100">
      <div className="text-2xl font-bold text-blue-600 mb-4 font-montserrat">Notifications and Alerts</div>
      <ul className="space-y-4">
        <li className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
          <FaTools className="text-blue-600 text-xl" />
          <span className='font-nunito'>Suspesious activity by John</span>
        </li>
        <li className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
          <FaBell className="text-blue-600 text-xl" />
          <span className='font-nunito'>Payment issue resolved for Joe</span>
        </li>
      </ul>
    </div>
  );
}

export default NotificationsAlerts;