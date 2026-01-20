
import Announcements from './Announcements.jsx'
import Slider from './Slider.jsx'
import Direct from './Director.jsx'
import NewsPanel from './NewsPanel.jsx'
import OnlineSystems from "./OnlineSystems.jsx";
import NoticeBoard from "./NoticeBoard.jsx";
import ImportantLinks from "./ImportantLinks.jsx";





export default function Main() {
  return (
    <>
      <Announcements />
      <Slider></Slider>
      <Direct></Direct>
      <NewsPanel /> 
       <OnlineSystems />
       <NoticeBoard />
       <ImportantLinks />
    </>
  );
}
