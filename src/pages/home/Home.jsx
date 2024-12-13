// using grid
import "./Home.css";
import FirstBox from "../../components/boxs/FirstBox";
import SecondBox from "../../components/boxs/SecondBox";
import ThirdBox from "../../components/boxs/ThirdBox";
import FourthBox from "../../components/boxs/FourthBox";
import FifthBox from "../../components/boxs/FifthBox";
import SixthBox from "../../components/boxs/SixthBox";
import SeventhBox from "../../components/boxs/SeventhBox";
import EighthBox from "../../components/boxs/EighthBox";
import NinthBox from "../../components/boxs/NinthBox";

const Home = () => {
  return (
    <div className="home-container">
      <div className="box box1">
        <FirstBox />
      </div>
      <div className="box box2">
        <SecondBox />
      </div>
      <div className="box box3">
        <ThirdBox />
      </div>
      <div className="box box4">
        <FourthBox />
      </div>
      <div className="box box5">
        <FifthBox />
      </div>
      <div className="box box6">
        <SixthBox />
      </div>
      <div className="box box7">
        <SeventhBox />
      </div>
      <div className="box box8">
        <EighthBox />
      </div>
      <div className="box box9">
        <NinthBox />
      </div>
    </div>
  );
};

export default Home;
