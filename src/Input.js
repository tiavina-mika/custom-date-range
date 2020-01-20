import React from "react";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DateRangeIcon from '@material-ui/icons/DateRange';
// import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles({
  root: {
    padding: '8px 18px',
    cursor: 'pointer',
    marginRight: 20,
    width: 200,
    borderBottom: '4px solid transparent'
  },
  icon: {
    fontSize: 18
  },
  text: {
    fontSize: 16,
    marginLeft: 8
  },
  onDark: {
    color: '#A7AEB7',
  },
  active: {
    borderBottom: '4px solid #2592EA'
  }
})

const DateInput = ({ onClick, value, formatDate, placeholder, active }) => {
  const classes = useStyles();

  return (
      <Box 
        onClick={onClick} 
        display="flex" 
        alignItems="center" 
        justifyContent="space-between"
        bgcolor="#07213A"
        // borderRadius={15}
        className={clsx(classes.root, active? classes.active: '')}>
          <Box display="flex" alignItems="center">
              <DateRangeIcon className={clsx(classes.icon, classes.onDark)} />
              <Typography className={clsx(classes.text, classes.onDark)}>
                  {value ? formatDate(value).toString(): placeholder}
              </Typography>
          </Box>
          {/* <Box display="flex" flexDirection="column" justifyContent="center">
            <ArrowDropUpIcon className={clsx(classes.icon, classes.onDark)} />
            <ArrowDropDownIcon className={clsx(classes.icon, classes.onDark)} />
          </Box> */}
      </Box>
  );
}

export default DateInput;