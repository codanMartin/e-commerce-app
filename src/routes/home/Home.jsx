import Categories from "../../components/categories/Categories";
import { Outlet } from "react-router-dom";


const Home = () => {

  return (
    <>
      <Outlet />
      <Categories />
    </>
  );
};

export default Home;