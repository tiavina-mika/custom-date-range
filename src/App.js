import React from "react";
import "./styles.css";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
// import DateRangePicker from "./DateRangePicker";
import DateRangePicker from "./DemoPicker";

export default function App() {
  const [begin, setBegin] = React.useState(false);
  const [end, setEnd] = React.useState(false);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="App">
        <h1>Select a date range</h1>
            <DateRangePicker
                disableToolbar
                value={[]}
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
