import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    output: {
      backgroundColor: 'rgba(0,0,0,.75)',
      background: 'linear-gradient(to left, blue, purple)',
      padding: theme.spacing(4),
      height: 150,
      color: 'white',
      overflow: 'hidden'
    },
  }))


export default function Output(props) {
    const classes = useStyles()
    return(
        <Grid item xs={12} container className={classes.output} justify={'flex-end'}>
              <Grid item xs={12}>
                <Typography align='right'>
                  {props.prevNum} {props.operator}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align='right' variant='h2'>
                  {props.currentNum}
                </Typography>
              </Grid>
          </Grid>
    )
}
