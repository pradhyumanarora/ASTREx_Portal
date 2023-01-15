import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";


function CustomForm() {
  const [Uname, setUname] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");
  const [purpose, setPurpose] = useState("");


  let handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      "Username": Uname,
      "Name": name,
      "Date": date,
      "FromTime": fromTime,
      "ToTime": toTime,
      "Purpose": purpose,
    });

    axios.post("http://localhost:8081/api/booking/book", {
      "username": Uname,
      "name": name,
      "date_requested": date,
      "fromTime": fromTime,
      "toTime": toTime,
      "purpose": purpose
    })
    console.log("Submit button clicked");
  }
  return (

    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username"
          onChange={(e) => {
            setUname(e.target.value);
          }}
          value={Uname} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" placeholder="Date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
          value={date} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="FromTime">
        <Form.Label>From Time</Form.Label>
        <Form.Control type="time" placeholder="Time"
          onChange={(e) => {
            setFromTime(e.target.value);
          }}
          value={fromTime} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="ToTime">
        <Form.Label>To Time</Form.Label>
        <Form.Control type="time" placeholder="Time"
          onChange={(e) => {
            setToTime(e.target.value);
          }}
          value={toTime} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="ToTime">
        <Form.Label>Purpose</Form.Label>
        <Form.Control type="text" placeholder="Time"
          onChange={(e) => {
            setPurpose(e.target.value);
          }}
          value={purpose} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}

export default CustomForm;
