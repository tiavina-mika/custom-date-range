import React from "react";
import clsx from "clsx";
import DateRangePicker from "./DateRangePicker";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles, fade } from "@material-ui/core/styles";
import DateInput from './DateInput';

const useStyles = makeStyles({
  header: {
    borderBottom: '1px solid #DADCE0',
  },
  footer: {
    borderTop: '1px solid #DADCE0'
  },
  button: {
    textTransform: 'inherit',
    padding: '5px 25px',
    fontSize: 16,
    borderRadius: 10
  },
  activeButton: {
    backgroundColor: '#2592EA',
    color: '#fff',
    '&:hover': {
      backgroundColor: fade('#2592EA', 0.5),
    }
  },
  disabledButton: {
    backgroundColor: '#E0E0E0'
  }
});
const Dialog = ({ begin, end, formatDate, onChange, open, onSubmit, onCancel }) => {
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="center">
        <Box 
          bgcolor="#fff" 
          display="flex" 
          flexDirection="column" 
          alignItems="center"
          borderRadius={5}
        >
          {/* Header */}
          <Box 
            display="flex" 
            justifyContent="space-between"
            p={1} 
            className={classes.header}>
              <DateInput
                  value={begin}
                  formatDate={formatDate}
                  placeholder="Start Date"
                  active={open && !begin}
                  first
              />
              <DateInput
                  value={end}
                  formatDate={formatDate}
                  placeholder="End Date"
                  active={begin}
              />
            </Box>
            
          {/* Body */}
          <Box display="flex">
            <DateRangePicker
              variant="static"
              disableToolbar
              disableFuture
              value={[]}
              open={open}
              onChange={onChange}
            />
          </Box>

          {/* Footer */}
          <Box 
            className={classes.footer} 
            p={1}
            alignItems="center"
            display="flex" 
            alignSelf="stretch"
            justifyContent="space-between">
                <Button 
                  onClick={onCancel}
                  className={classes.button}>
                    Cancel
                </Button>
                <Button
                  onClick={onSubmit} 
                  className={clsx(
                    classes.button, 
                    !begin || !end? classes.disabledButton: classes.activeButton
                  )}
                  disabled={!begin || !end}
                >
                    Apply
                </Button>
          </Box>

          </Box>
      </Box>
  );
}

export default Dialog;
