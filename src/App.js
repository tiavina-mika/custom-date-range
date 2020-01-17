import React from "react";
import "./styles.css";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
// import DateRangePicker from "./DateRangePicker";
import DateRangePicker from "./DemoPicker";
import Button from '@material-ui/core/Button'

export default function App() {
  const [begin, setBegin] = React.useState(false);
  const [end, setEnd] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="App">
        <h1>Select a date range</h1>
        <Button onClick={handleOpen}>Open</Button>
            <DateRangePicker
                disableToolbar
                value={[]}
                setOpen={handleOpen}
                open={open}
                placeholder="Select a date range"
                onChange={values => {
                    console.log("one", values);
                    setBegin(values.begin);
                    setEnd(values.end);
                }}
            />
        <ul>
          <li>Begin: {begin ? begin.toString() : ""}</li>
          <li>End: {end ? end.toString() : ""}</li>
        </ul>
      </div>
    </MuiPickersUtilsProvider>
  );
}
