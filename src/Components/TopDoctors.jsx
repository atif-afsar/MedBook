import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {


  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm text-gray-600">
        Simply browse through our extensive list of doctors
      </p>

      {/* Grid of Doctors */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 pt-5 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => navigate(`/appointment/${item._id}`)}
            key={index}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer transform hover:-translate-y-2 transition-all duration-500 bg-white shadow-sm hover:shadow-md"
          >
            <img
              className="bg-blue-50 w-full h-45 object-cover"
              src={item.image}
              alt={item.name}
            />
            <div className="p-4 text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-green-600 mb-1">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                <span>Available</span>
              </div>
              <p className="font-semibold text-gray-900">{item.name}</p>
              <p className="text-sm text-gray-600">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={()=>{navigate('/doctors'); scrollTo(0,0) }} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>more</button>
    </div>
  )
}

export default TopDoctors
