import React from 'react';
import axios from 'axios';
import {config} from '../config.js';
 

 
 
export const sendEmail = async (formData) => { 
  
    var data = {
      service_id: config.mail_service,
      template_id: config.mail_template,
      user_id: config.mail_user,
      template_params: {
        checkin: formData.checkin,
        checkout: formData.checkout,
        people: formData.people,
        budget: formData.budget,
      }
    };
    try {
      const respons = await axios.post(`${config.mail_api}`, data);
    } catch (error) {
      console.error(error, "error email");
    }

  };

  

