import React, { Component } from 'react';
import FieldGroup from '../components/FieldGroup';
import TimePicker from 'rc-time-picker';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Geosuggest from 'react-geosuggest';
import 'rc-time-picker/assets/index.css';
import 'react-datepicker/dist/react-datepicker.css';


const EventForm = (handleSummary, handleDescription) => {
    return (
        <div>
        <TimePicker/>
    <TimePicker/>
    <FieldGroup
        label="Summary"
        onChange={handleSummary}
        id="formSummary"
        type="text"
        />
         <FieldGroup
            id="formDescription"
            componentClass="textarea"
            label="Description"
            onChange={handleDescription}
            rows="3"
        />
        <Geosuggest/>
    </div>
    )
}

export {EventForm}