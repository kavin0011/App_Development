import React from 'react';

const rechargeHistoryData = [
    {
        plan: "Platinum",
        number: "1234567890",
        duration: "1 Year",
        date: "2023-07-01",
        paymentMode: "Credit Card"
    },
    {
        plan: "Gold",
        number: "0987654321",
        duration: "6 Months",
        date: "2023-01-15",
        paymentMode: "UPI"
    },
    {
        plan: "Silver",
        number: "1122334455",
        duration: "3 Months",
        date: "2022-11-10",
        paymentMode: "Debit Card"
    }
];

const History = () => {
    return (
        <div className="bg-gray-100 text-gray-800 font-sans py-12">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center text-blue-800 mb-8 font-montserrat">Recharge History</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rechargeHistoryData.map((recharge, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-blue-500">
                            <h2 className="text-2xl font-semibold font-serif text-blue-700 mb-2">{recharge.plan}</h2>
                            <p className="text-lg font-light mb-2"><strong>Number:</strong> {recharge.number}</p>
                            <p className="text-lg font-light mb-2"><strong>Duration:</strong> {recharge.duration}</p>
                            <p className="text-lg font-light mb-2"><strong>Purchase Date:</strong> {recharge.date}</p>
                            <p className="text-lg font-light"><strong>Payment Mode:</strong> {recharge.paymentMode}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default History;
