const EmailNotification = () => {
  return (
    <div className="bg-gray-400 py-20 text-black">
      <h3 className=" text-center pt-10   text-4xl md:text-5xl font-semibold">
        Subscribe to our Newsletter
      </h3>
      <h3 className=" text-center text-primary pb-20 md:pb-10 text-2xl md:text-2xl font-semibold">
        to get latest updates{" "}
      </h3>
      <form>
        <fieldset className="form-control lg:w-1/2 w-3/4 mx-auto">
          <div className="relative ">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16 rounded-none  "
            />
            <button className="btn text-white bg-primary absolute top-0 right-0 rounded-none">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default EmailNotification;
