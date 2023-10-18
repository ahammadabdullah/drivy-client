const Header = () => {
  return (
    <div>
      <div className="bg-banner1 h-full lg:h-[100vh] bg-gray-800 bg-blend-overlay bg-cover bg-no-repeat	bg-center">
        <div className="max-w-7xl flex">
          <div className="flex flex-col justify-center h-full  text-white w-1/2 my-10 text-center md:text-left lg:w-1/3 mx-auto lg:right-32  lg:absolute space-y-4 lg:space-y-8 ">
            <h3 className="text-3xl lg:text-5xl font-semibold">
              Your Dream Car is Waiting
            </h3>
            <h4 className="text-2xl lg:text-4xl font-medium">
              We offer competitive prices and a wide selection of cars to choose
              from.
            </h4>
            <button className="lg:!mt-12 py-3 px-4 bg-primary">
              Book An Appointment Now{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
