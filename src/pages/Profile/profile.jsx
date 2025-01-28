import React, { useState } from "react";
import './style.css'
import Select from 'react-select'
import HungarianlangIcon from '/src/images/hulangicon.png'
import EnglishlangIcon from '/src/images/englangicon.png'
import GermanlangIcon from '/src/images/gerlangicon.png'
import GeneralDetails from "./GeneralDetails";
import PersonalDetails from "./PersonalDetails";
import AddressDetails from "./AddressDetails";
import SocialDetails from "./SocialDetails";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const userData = {
    general: {
      userName: "ktommy",
      email: "kthomasfmm@gmail.com",
    },
    address: {
      addressLine1: "Váci Mihály út",
      addressLine2: "116.",
      city: "Újfehértó",
      state: "Szabolcs-Szatmár-Bereg",
    },
    personal: {
      firstName: "Tamás",
      lastName: "Korcsmáros",
      phoneNumber: "+36202591050",
    },
    social: {
      facebookId: "tamaskorcsmaros",
      linkedinprofileurl: "https://linkedin.com/Tamás Korcsmáros",
    },
  };
  const [theme, setTheme]= useState('theme-3')
  const languages = [
    {label:"Hungarian", value:"hun", img:HungarianlangIcon},
    {label:"English", value:"eng", img:EnglishlangIcon},
    {label:"German", value:"ger", img:GermanlangIcon}
  ];

  const [editEnabled, setEditEnabled] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const tabs = [
    {
      name: "General",
      component:  (
          <GeneralDetails data={userData.general} disabled={!editEnabled} />
        ),
    },
    {
      name: "Personal",
      component: <PersonalDetails data={userData.personal} />,
    },
    { name: "Address", component: <AddressDetails data={userData.address} /> },
    { name: "Social", component: <SocialDetails data={userData.social} /> },
  ];
  
  return(
    <div className="row g-0 align-items-center justify-content-center vh-100">
      <div className="col-10 row g-0 border rounded-3">
        <div className="col-4">
          <div className="text-center mb-2">
            <img src="/src/images/fittrack.png" alt="profile for user" className="img-fluid profile-image"/>
            <h2>Fitness Tracker</h2>
          </div>
          <div className="row g-0 justify-content-end my-4 px-3">
            <input type="file" id="file-input" className="d-none" onChange={(e)=>{console.log(e)}}/>
            <label className="col-2 profile-img-action-btn me-1" htmlFor="file-input">
              Change 
            </label>
            <button className="col-2 profile-img-action-btn">Delete</button>
          </div>
          {/* <div className="row g-0 justify-content-around mt-3">
           <button className="profile-img-action-btn col-4">Change</button>
           <button className="profile-img-action-btn col-4">Delete</button>
        </div> */}
          <div className="row g-0 border-top p-3">
            <h5 className="mb-2">Account Setting</h5>
            <div className="col-7 mt-3">
              <h6 className="mb-3">Language</h6>
              <Select
                options={languages}
                defaultValue={languages[1]}
                formatOptionLabel={(option) => {
                  return (
                    <div>
                      <img src={option.img} alt="" className="lang-icon me-2" />
                      <span>{option.label}</span>
                    </div>
                  );
                }}
              />
            </div>
            <div className="col-10 row g-0 mt-3 themes-container">
              <h6>Themes</h6>
              <div className="col-2" onClick={()=>setTheme('theme-1')}>
                <div className="theme-1-box"></div>
              </div>
              <div className="col-2 offset-1" onClick={()=>setTheme('theme-2')}>
                <div className="theme-2-box"></div>
              </div>
              <div className="col-2 offset-1" onClick={()=>setTheme('theme-3')}>
                <div className="theme-3-box"></div>
              </div>
            </div>
             {/* Back to Main Page Button */}
             <div className="col-12 mt-4">
              <button
                className="profile-img-action-btn"
                onClick={() => navigate("/")}
              >  Back to Main Page
              </button>
            </div>
            {/* <div className="col-5">
            </div> */}
          </div>
        </div>
        <div className="col-8 border-start">
          <div className="row g-0 profile-tabs">
            {tabs.map((tab, index) => (
              <div
                className={`col-3 ${index === activeTab ? "active-tab" : null}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.name}
              </div>
            ))}
          </div>
          <div className="row g-0 mt-3 p-3">
            {tabs.at(activeTab).component}
            <div className="col-12 row g-0 mt-5 justify-content-end">
              {editEnabled ? (
                <>
                  <button className="update-btn col-3 rounded-2 p-2" onClick={()=>{setShowDialog(true)}}>
                    UPDATE
                  </button>
                  <button
                    className="cancel-btn col-3 offset-1 p-2 rounded-2"
                    onClick={() => {
                      setEditEnabled(false);
                    }}
                  >
                    CANCEL
                  </button>
                </>
              ) : (
                <button
                  className="edit-btn rounded-2 col-3 p-2"
                  onClick={() => setEditEnabled(true)}
                >
                  EDIT
                </button>
              )}
            </div>
            {showDialog ? (
              <dialog open className="edit-response-popup rounded-3">
                <h6 className="text-center">Records updates successfully</h6>
                <button
                  className="rounded-2 py-1 px-4 mt-3"
                  onClick={(e) => {
                    setShowDialog(false);
                    setEditEnabled(false);
                  }}
                >
                  ok
                </button>
              </dialog>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
