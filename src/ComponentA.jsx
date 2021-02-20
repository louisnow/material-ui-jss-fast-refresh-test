import * as React from 'react';
import { astyle } from './jss';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core'

class ComponentA extends React.Component {
  render() {
    const {classes} = this.props;
    return <Typography variant="h3" className={classes.text}>ComponentA Default Export Class</Typography>;
  }
}

export default withStyles(astyle)(ComponentA);