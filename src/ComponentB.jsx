import * as React from 'react';
import { bstyle } from './jss';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

function ComponentB(props) {
  const { classes } = props;
  return <Typography variant="h3" className={classes.text}>ComponentB Default Export Function</Typography>;
}


export default withStyles(bstyle)(ComponentB);


