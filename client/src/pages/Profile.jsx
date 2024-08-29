import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import coverPhoto from "../assets/images/ProfilePage/temp_coverphoto_profilepage.jpg";
import profilePic from "../assets/images/ProfilePage/boypic.png";
import GamePreferenceSkills from "../components/GamePreferenceSkills"; // Import the new component

function Profile() {
  const [selectedSection, setSelectedSection] = useState("My Favourites");

  return (
    <div className="profile-wrapper min-h-[80vh]">
      <div className="cover-photo bg-slate-400 h-72 overflow-hidden relative">
        <img
          src={coverPhoto}
          className="h-full w-full object-cover"
          alt="Cover"
        />
        {/* Upload Cover Image Button */}
        <button className="absolute bottom-3 right-4 bg-transparent backdrop-blur-md text-sm px-2 py-1 rounded-lg shadow-md hover:bg-gray-200 transition border-2 border-purple-500 font-semibold text-white tracking-wider">
          Upload Cover Image
        </button>
      </div>

      <div className="profile-info flex h-32 relative">
        <div className="profile-img w-44 h-44 rounded-full translate-x-10 -translate-y-28 border-4 border-slate-100 overflow-hidden relative ">
          <img
            src={profilePic}
            alt="Profile-pic"
            className="w-full h-full object-cover"
          />
          {/* Upload Profile Picture Button */}
          <button className="absolute bottom-5 right-5 border border-slate-700 text-xs px-2 py-1 rounded-full shadow-md hover:bg-gray-200 transition backdrop-blur-md bg-transparent">
            <FiUpload className="text-black"/>
          </button>
        </div>

        <div className="profile-data flex flex-col ml-14 mt-4">
          {/* <span className="font-semibold">{authUser.fullName}</span> */}
          <span className="font-semibold">Sohail Ali Khwazada</span>
          <span className="text-gray-600">
            {/* @{authUser.username} | {authUser.location} */}
            Sohail | Mumbai
          </span>
          <button
            className="bg-black text-white px-3 py-[0.2rem] rounded-lg mt-4"
            // onClick={logout}
          >
            Log out
          </button>
        </div>
        <div className="desc flex-grow ml-24 mt-4">
          <span className="text-lg font-semibold block">Bio/Description:</span>
          <p className="text-stone-100 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            natus consequuntur iusto, corrupti cum repellat impedit. Voluptate
            consequuntur modi vero?
          </p>
        </div>
      </div>

      <div className="flex bg-[#EFEFEF] h-12 items-center justify-evenly rounded-xl shadow-md mt-6 mx-5">
        <p
          className={`font-semibold tracking-wide cursor-pointer px-6 py-1 rounded-lg ${
            selectedSection === "Game Preference & Skills" ? "bg-[#FFFFFF]" : ""
          }`}
          onClick={() => setSelectedSection("Game Preference & Skills")}
        >
          Game Preference & Skills
        </p>
        <p
          className={`font-semibold tracking-wide cursor-pointer px-6 py-1 rounded-lg ${
            selectedSection === "Friend List" ? "bg-[#FFFFFF]" : ""
          }`}
          onClick={() => setSelectedSection("Friend List")}
        >
          Friends
        </p>
        <p
          className={`font-semibold tracking-wide cursor-pointer px-6 py-1 rounded-lg ${
            selectedSection === "Account Settings" ? "bg-[#FFFFFF]" : ""
          }`}
          onClick={() => setSelectedSection("Account Settings")}
        >
          Account Settings
        </p>
      </div>

      <div className="content mt-6">
        {selectedSection === "Game Preference & Skills" && <GamePreferenceSkills />}
        {/* You can add more sections here */}
      </div>
    </div>
  );
}

export default Profile;
