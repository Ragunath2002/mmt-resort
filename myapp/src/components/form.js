import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { config } from '../config';
import { Dropdown, DropdownButton } from 'react-bootstrap';
// import emailjs from '@emailjs/browser';
import { sendEmail } from './email';
function Form() {
  const api = config.apiurl;

  const [alert, setAlert] = useState(false);
  const [load, setload] = useState(false);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [selectedValue, setSelectedValue] = useState('');
  const [formErrors, setFormErrors] = useState({
    checkin: false,
    checkout: false,
    people: false,
    familyorfriends: false,
    budget: false,
  });



  function getFormattedDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = today.getFullYear();

    return `${day}/${month}/${year}`;
  }

  const [formData, setFormData] = useState({
    checkin: '',
    checkout: '',
    date: getFormattedDate(),
    people: '',
    familyorfriends: '',
    budget: 'not mentioned',
  });

  const handleSelect = (eventKey) => {
    setSelectedValue(eventKey);
    setFormData({
      ...formData,
      familyorfriends: eventKey,
    });
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  



  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }


  const handleDateChange = (dates) => {
    setDateRange(dates);
    const [startDate, endDate] = dates;

    setFormData({
      ...formData,
      checkin: formatDate(startDate),
      checkout: formatDate(endDate),
    });
    console.log(formData)
  };

  const validateForm = () => {
    let valid = true;
    const errors = {};
    if (!startDate) {
      errors.checkin = true;
      valid = false;
    }

    if (!endDate) {
      errors.checkout = true;
      valid = false;
    }

    if (!formData.people.trim()) {
      errors.people = true;
      valid = false;
    }


    if (!formData.familyorfriends.trim()) {
      errors.familyorfriends = true;
      valid = false;
    }


    setFormErrors(errors);

    return valid;
  };



  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    // sendEmail(formData);

    try {
      setload(true);
      setTimeout(() => {
        setload(false);
      }, 2000);
      const response = await axios.post(`${api}/insertData`, formData);
      console.log(response.data.message, "response react");
      setAlert(true);
    } catch (error) {
      console.error(error, "error react");
    } finally {
      setTimeout(() => {
        setAlert(false);
      }, 2000);
    }
  };


  return (



    <div>
      <div className="contact_form_container">
        <div className="section_title_container_2">
          <div className="section_title"><h2 className="h2tag">Contact Info</h2></div>
          <div className="section_text">Create unforgettable memories. Let's plan your stay.</div>
        </div>
        <form action="#" className="contact_form" id="contact_form"
           onSubmit={handleSubmit}>
          <div className="row contact_row">
            <div className="col-md-6">
              <div className={`da_te  ${formErrors.checkout ? 'error' : ''} ${formErrors.checkin ? 'error' : ''}`}>
                <DatePicker
                  onChange={handleDateChange}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  placeholderText="checkin - checkout"
                />
              </div>
              {formErrors.checkin && <span className="error_text">Please select checkin and </span>}
              {formErrors.checkout && <span className="error_text"> Please select checkout.</span>}

            </div>
            <div className="col-md-6">
              <input
                onChange={handleChange}
                id="people"
                name="people"
                type="number"
                className={`contact_input ${formErrors.people ? 'error' : ''}`}
                placeholder="people"
              />
              {formErrors.people && <span className="error_text">Please enter number of people.</span>}
            </div>
            <div className="col-md-12">
              <div className='cus_drop'>
                <Dropdown onSelect={handleSelect}>
                  <Dropdown.Toggle id="dropdown-basic">
                    {selectedValue ? selectedValue : <div className='place_h' > Family or friends</div>}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="family" href="#">
                      family
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="friends" href="#">
                      friends
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              {formErrors.familyorfriends && <span className="error_text">Please enter family or friends.</span>}

            </div>
            <div className="col-md-12">
              <input
                onChange={handleChange}
                id="budget"
                name="budget"
                type="number"
                className={`contact_input`}
                placeholder="Budget (optional)"
              />
            </div>
          </div>
          <button className="contact_button">Send Message</button>
        </form>

        <div className={`topfix ${load ? "topto" : ""}`} >Loading ...</div>
        <div className={`topfix z-index-2200 ${alert ? "topto" : ""}`} >Submitted successfully</div>

      </div>
    </div>
  );
}

export default Form;
