import React, { useState } from "react";
import { useUtils } from "@material-ui/pickers";
import Box from '@material-ui/core/Box';
import SelectDate from './components/SelectDate';
import Dialog from './components/Dialog';

const format = "MMM do yyyy";

const App = () => {
  const [begin, setBegin] = useState(false);
  const [end, setEnd] = useState(false);
  const [open, setOpen] = useState(false);

  const utils = useUtils();

  const handleOpen = () => setOpen(!open);
  const formatDate = date => utils.format(date, format || utils.dateFormat);

  const handleChange = values => {
    setBegin(values.begin);
    setEnd(values.end);
  }

  const handleSubmit = () => {
    console.log("begin", begin);
    console.log("end", end);
    setOpen(false);
  }

  const handleCancel = () => {
    setBegin(false);
    setEnd(false);
    setOpen(false);
  }

  return (
      <Box bgcolor="#00132C" p={3} height="100vh">
          <Box display="flex" justifyContent="center" p={2}>
            <SelectDate 
                begin={begin}
                end={end}
                open={open}
                placeholder="From"
                onClick={handleOpen}
                formatDate={formatDate}
            />
          </Box>
          { open && (
            <Dialog 
                formatDate={formatDate}
                onClick={handleOpen}
                open={open}
                onChange={handleChange}
                begin={begin}
                end={end}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
            />
          )}
      </Box>
  );
}

export default App;