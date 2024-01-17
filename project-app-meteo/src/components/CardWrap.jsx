import { Card } from 'react-bootstrap'
import './Components.css'
import SearchBar from './SearchBar';
import TableDays from './TableDays';

import { useState } from 'react'
import axios from 'axios';

export let urlIcon = 'https://openweathermap.org/img/wn/'
export let png = ".png"

function CardWrap() {
    
    let apiKey = "44b903d1c5402f4f543d056274b90371"
    
    const [ data, setData] = useState({})
    const [location, setLocation] = useState('')
    const [ forecast , setForecast ] = useState([])

    const targetLocation = (event) => {    //evento di input che passo come prop alla searchbar per cercare
        setLocation(event.target.value.trim())
    }
    
    const searchLocation = () => {      //evento click che passo a searchbar come prop che cerca la location 
        //if event.key === 'Enter' bla bla bla
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=it&appid=${apiKey}`)
        .then((response) => { 
            setData(response.data)
            console.log(response.data) 
            setLocation('')  //svuota l'input? come cavolini sott'aceto svuoto l'input?? 
        })
        .catch(error => {
            console.log("errore nella fetch: " + error)
            setLocation('') 
        })
    }

    const searchForecast = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&lang=it&appid=${apiKey}`)
        .then((previsioni ) => { 
            setForecast(previsioni.data.list)
            console.log(previsioni.data.list) 
            setLocation('')  //svuota l'input? come cavolini sott'aceto svuoto l'input?? 
        })
        .catch(error => {
            console.log("errore nella fetch: " + error)
            setLocation('') 
        })
    }

    return (
        <Card style={{ width: '50rem' , backgroundColor: 'rgba(95, 182, 216, 0.4)'}} className='myCard'>
            <Card.Body>
                <SearchBar 
                    searchLocation={searchLocation}
                    targetLocation={targetLocation}
                    searchForecast={searchForecast}
                />
                <Card.Title>{data.main ? data.main.temp : '' && <span> ° </span>} </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{data.name}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{data.weather ? data.weather[0].description : ''}</Card.Subtitle>
                {data.weather && <img className='text-dark fs-5' style={{width: '100px', height: '100px'}} src={urlIcon+data.weather[0].icon+png} alt="" />}
            <TableDays forecast={forecast}/>
            </Card.Body>
        </Card>
    );
}

export default CardWrap;