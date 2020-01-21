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
    width: 180,
    border: '1px solid #DADCE0',
    borderRadius: 4
  },
  first: {
    marginRight: 8
  },
  icon: {
    fontSize: 18
  },
  text: {
    fontSize: 16,
    marginLeft: 8,
  },
  active: {
    border: '2px solid #2592EA'
  },
  iconValue: {
    color: '#2592EA'
  },
  value: {
    color: '#182A3A'
  },
  noValue: {
    color: '#B0B7C9'
  }
})

const DateInput = ({ value, formatDate, placeholder, active, first }) => {
  const classes = useStyles();

  return (
      <Box 
        display="flex" 
        alignItems="center" 
        justifyContent="space-between"
        className={clsx(
          classes.root, 
          active? classes.active: '',
          first? classes.first: ''
        )}
      >
          <Box display="flex" alignItems="center">
              <DateRangeIcon 
                className={clsx(
                  active? classes.iconValue: classes.noValue, 
                  classes.icon
                )} 
              />
              <Typography 
                className={clsx(
                  value ? classes.value: classes.noValue, 
                  classes.text
                )}
              >
                  {value ? formatDate(value).toString(): placeholder}
              </Typography>
          </Box>
      </Box>
  );
}

export default DateInput;