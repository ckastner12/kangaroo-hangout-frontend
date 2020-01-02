import React from 'react';
import DatePicker from 'react-date-picker';
 
const DateForm = props => {

  const onChange = date => {
      props.handleChangeDate(date)
    }
  return (
    <div>
      <DatePicker
        onChange={onChange}
        value={props.date}
      />
    </div>
  )
}

export default DateForm