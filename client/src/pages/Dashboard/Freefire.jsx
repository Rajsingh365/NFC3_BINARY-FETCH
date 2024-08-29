import React, { useEffect, useState } from 'react';
import useGetFreeFireInfo from '../../hooks/useFreeFire.js';
import FreeFireInfo from './FreeFireInfo.jsx';
import { set } from 'mongoose';
const Freefire = () => {
  const playerId = "1048804278";
  const { loading, getFreeFireInfo, freeFireInfo } = useGetFreeFireInfo();
  const [maxRate, setMaxRate] = useState(0);
  const [equippedSkills, setEquippedSkills] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getFreeFireInfo(playerId);
      setMaxRate(data.basicInfo.maxRank);
      setEquippedSkills(data.profileInfo.equipedSkills);
    };
    fetchData();
  }, []);

  return (
    <div className='text-white border'>
      {/* {loading && <p>Loading...</p>} */}
      {freeFireInfo && (
        <FreeFireInfo maxRate={maxRate} equippedSkills={equippedSkills}/>
      )}
    </div>
  );
};

export default Freefire;
