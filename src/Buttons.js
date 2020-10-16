import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

export const NumberButton = (props) => {
    return(
    <Grid item xs={3}>
        <OurButton onClick={() => props.addNumber(props.number)}>{props.number}</OurButton>
    </Grid>)
}


export const OperatorButton = (props) => {
    return(
    <Grid item xs={3}>
        <OurButton onClick={() => props.chooseOperation(props.operator)}>{props.operator}</OurButton>
    </Grid>)
}

export const SpecialButton = (props) => {
    return(
        <Grid item xs={props.size === 2 ? 6:3}>
            <OurButton onClick={props.onClick}>{props.text}</OurButton>
        </Grid>)
}


const OurButton = (props) => {
    return <Button fullWidth variant='contained' size='large' {...props}/>
}