import { iconsImgs } from "../../utils/images"
import './Financial.css'
import { personsImgs } from "../../utils/images";

const Financial = () => {
  const UpdatesData = [
    {
      img: personsImgs.person_four,
      name: "Anita Mishra",
      noti: "has ordered Apple smart watch 2500mh battery.",
      time: "25 seconds ago",
    },
    {
      img: personsImgs.person_two,
      name: "Jyoti Kadam",
      noti: "has received Samsung gadget for charging battery.",
      time: "30 minutes ago",
    },
    {
      img: personsImgs.person_one,
      name: "Akshay Sawant",
      noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
      time: "2 hours ago",
    },
  ];
  return (
    <div className="subgrid-two-item grid-common grid-c8">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Customer feedback</h3>
            <button className="grid-c-title-icon">
                {/* <img src={ iconsImgs.plus } /> */}
            </button>
        </div>
        <div className="grid-c8-content">
        <div className="Updates">
      {UpdatesData.map((update) => {
        return (
          <div className="update">
            <img src={update.img} alt="profile" />
            <div className="noti">
              <div  style={{marginBottom: '0.5rem'}}>
                <span>{update.name}</span>
                <span> {update.noti}</span>
              </div>
                <span>{update.time}</span>
            </div>
            
          </div>
        );
      })}
    </div>
        </div>
    </div>
   
  )
}

export default Financial
