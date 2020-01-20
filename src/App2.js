import React from "react";
import "./styles.css";
import { useUtils } from "@material-ui/pickers";
import DateRangePicker from "./Static";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import DateInput from './Input';

export default function App() {
  const [begin, setBegin] = React.useState(false);
  const [end, setEnd] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [date, changeDate] = React.useState(new Date());

  const utils = useUtils();

  const handleOpen = () => setOpen(!open);
  const formatDate = date => utils.format(date, utils.dateFormat);
  console.log(open)

  return (
      <Box bgcolor="#00132C" p={3}>
            {/* <TextField
              onFocus={handleOpen} 
              onClick={handleOpen} 
              value={begin ? formatDate(begin).toString() : new Date()}
            /> */}

             <Box display="flex" justifyContent="center" p={2}>
                <DateInput
                    value={begin}
                    formatDate={formatDate}
                    placeholder="Start Date"
                    onClick={handleOpen}
                    active={open && !begin}
                />
               <DateInput
                    value={end}
                    formatDate={formatDate}
                    placeholder="End Date"
                    onClick={handleOpen}
                    active={begin}

                />

             </Box>
            {/* <Box display={open? 'flex': 'none'} bgcolor="red" p={3}> */}
            <Box bgcolor="green" display="flex">
              <DateRangePicker
                variant="static"
                disableToolbar
                value={[]}
                open={open}
                onChange={values => {
                  console.log("one", values);
                  setBegin(values.begin);
                  setEnd(values.end);
              }}
                // placeholder="Select a date range"
              />
            </Box>

        <ul>
          <li>Format Begin: {begin ? formatDate(begin).toString() : ""}</li>
          <li>Begin: {begin ? begin.toString() : ""}</li>
          <li>End: {end ? end.toString() : ""}</li>
          <li>Date: {date ? date.toString() : ""}</li>
        </ul>
      </Box>
  );
}
