import { FaAward, FaCar, FaRegIdCard } from "react-icons/fa";

const Achievements = () => {
  return (
    <div className="bg-banner2 bg-gray-700 bg-blend-multiply bg-center">
      <div className="max-w-7xl mx-auto py-10 text-center text-gray-200">
        <h3 className=" pt-10 pb-20 md:pb-10 text-4xl md:text-5xl font-semibold">
          Achievements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto pb-20 md:pb-44 space-y-10">
          <div className="flex items-center gap-5 mx-auto">
            <FaRegIdCard className="text-8xl" />
            <div>
              <h3 className="text-4xl font-bold">10,000+</h3>
              <p className="font-bold"> Happy Customers</p>
            </div>
          </div>
          <div className="flex items-center gap-5 mx-auto">
            <FaCar className="text-8xl" />
            <div>
              <h3 className="text-4xl font-bold">3000+</h3>
              <p className="font-bold"> Cars sold</p>
            </div>
          </div>
          <div className="flex items-center gap-5 mx-auto">
            <FaAward className="text-8xl" />
            <div>
              <h3 className="text-4xl font-bold">4 times</h3>
              <p className="font-bold"> Award Winner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
