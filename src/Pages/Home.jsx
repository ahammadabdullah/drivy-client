import { Helmet } from "react-helmet";
import Achievements from "../COmponents/Achievements";
import Brands from "../COmponents/Brands";
import EmailNotification from "../COmponents/EmailNotification";
import Header from "../COmponents/Header";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Drivy | Home</title>
      </Helmet>
      <Header />
      <Brands />
      <Achievements />
      <EmailNotification />
    </div>
  );
};

export default Home;
