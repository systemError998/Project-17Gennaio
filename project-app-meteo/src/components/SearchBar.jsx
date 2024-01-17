import { Card, Button, Form } from 'react-bootstrap'
import React from 'react'

export default function SearchBar( { searchLocation , targetLocation , searchForecast } ) {

  return (
    <Form className="d-flex mb-3">
        <Form.Control
            onChange={targetLocation}
            type="search"
            placeholder="Search location"
            className="me-2"
            aria-label="Search"
        />
        <Button 
          variant="outline-dark" 
          onClick={() => {
            searchLocation() ; 
            searchForecast()
          }}>
          <i className="bi bi-search"></i>
        </Button>
    </Form>
  )
}

