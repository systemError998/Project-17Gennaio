import Table from 'react-bootstrap/Table';

import { urlIcon , png } from './CardWrap'
function TableDays( { forecast } ) {

  // console.log(forecast); //ricevo le previsioni da cardwrap

  return (
    <Table striped>
      <thead>
        <tr>
          <th></th>
          <th>Date</th>
          <th>Temp</th>
          <th>Weather</th>
        </tr>
      </thead>
      <tbody>
      {forecast.map((prev) => (
        <tr key={prev.dt}>
          <td>
            <img 
            className='text-dark fs-5' 
            style={{width: '100px', height: '100px'}} 
            src={urlIcon+prev.weather[0].icon+png} alt="" />
          </td>
          <td>{prev.dt_txt}</td>
          <td>{prev.main.temp}</td>
          <td>{prev.weather[0].description}</td>
        </tr>
      )) } 
      </tbody>
    </Table>
  );
}

export default TableDays;

/* "weather": [
    {
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04n"
    }
], */
