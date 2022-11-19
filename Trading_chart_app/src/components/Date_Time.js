import * as React from 'react'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DateTimePicker from '@mui/lab/DateTimePicker'
import moment from 'moment'
import { parseISO } from 'date-fns'

const MyDateTimePicker = (props) => {
  const [value, setValue] = React.useState(props.Value)
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        value={moment(value).format()}
        disabled={props.Disabled}
        onChange={(newValue) => {
          setValue(moment(newValue).format())
        }}
        onAccept={(newValue) => {
          console.log(moment(newValue).format())
          props.handler(moment(newValue).format())
        }}
        maxDateTime={parseISO(props.MaxDateTime)}
        minDateTime={parseISO(props.MinDateTime)}
      />
    </LocalizationProvider>
  )
}

export default MyDateTimePicker
