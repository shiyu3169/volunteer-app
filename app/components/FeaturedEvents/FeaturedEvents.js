import React from 'react'
import { Grid, Col, Row, Input, Button  } from 'react-bootstrap'

 const FeaturedEvents = (props) => (
   <table className = "table">
      <thead>
      <tr>
          <th>
              <h3>Featured Event</h3>
          </th>
      </tr>
      </thead>
      <tbody>
        {genEventList(props.events)}
      </tbody>
  </table>
)

const genEventList = (events) => (
  events.map((event, index) => (
    <tr key={ index }>
      <td>
        <a href="#">{event.name}</a>
        <strong>{event.date}</strong>
      </td>
    </tr>
  ))
)

export default FeaturedEvents