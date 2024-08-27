import Header from "../component/Header";
import SideBar from "../component/SideBar";
import "../Css/home.css";

function Home() {
  return (
    <>
      <div className="body-content h-fit">
        <Header />
        <div className="ms-auto flex">
          <div className=""></div>
          <SideBar />
        </div>
      </div>
    </>
  );
}

export default Home;
