import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HouseTable = () => {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://anapioficeandfire.com/api/houses');
        const houseData = response.data;
        console.log(houseData);
        const updatedHouseData = await Promise.all(
          houseData.map(async (house) => {
            const titles = house.titles.length > 0 ? house.titles.join(', ') : 'None';

            const swornMembers = await Promise.all(
              house.swornMembers.map(async (url) => {
                const memberResponse = await axios.get(url);
                console.log(memberResponse.data);
                return memberResponse.data.name;
              })
            );
            
            return {
              name: house.name,
              region: house.region || 'None',
              titles: titles,
              swornMembers: swornMembers.length > 0 ? swornMembers.join(', ') : 'None',
            };
          })
        );

        setHouses(updatedHouseData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{margin:"20px"}}>
    <table border="1">
      <thead style={{background:"grey"}}>
        <tr>
          <th>No.</th>
          <th>Name of the House</th>
          <th>Region</th>
          <th>Titles</th>
          <th>Sworn Members</th>
        </tr>
      </thead>
      <tbody>
        {houses.map((house, index) => (
          <tr key={index}>
            <td>{index}</td>
            <td>{house.name}</td>
            <td>{house.region}</td>
            <td>{house.titles}</td>
            <td>{house.swornMembers}</td>
          </tr>
        ))}
      </tbody>
    </table>   
    </div>
  );
};

export default HouseTable;
