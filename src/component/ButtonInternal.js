import React from 'react'
// import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardRounded'
// import { useAuth0 } from '../Auth/react-auth0-spa'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiLink-underlineHover:hover': {
      textDecoration: 'none',
    },
  },
  ButtonInternal: {
    color: '#292041',
    // marginTop: '2rem',
    // marginRight: '0.5rem',
    borderRadius: '6px',
    fontFamily: ['"Montserrat"', 'sans-serif'].join(','),
    textTransform: 'none',
    border: '3px solid #292041',
    stroke: 'none',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: '#fff',
    boxShadow:
      '1px -1px rgba(255, 255, 255, 1), 2px -2px rgba(255, 255, 255, 0.75), 3px -3px rgba(255, 255, 255, 0.5), 6px -6px #292041',
    '&:hover': {
      backgroundColor: '#292041',
      color: 'white',
      transform: 'translate(1px,-1px)',
      boxShadow:
        '1px -1px rgba(255, 255, 255, 1), 2px -2px rgba(255, 255, 255, 0.75), 3px -3px rgba(255, 255, 255, 0.5), 5px -5px #292041',
    },
    '&:active': {
      transform: 'translate(5px,-5px)',
      boxShadow: 'none',
    },
  },
}))

const ButtonInternal = (props) => {
  const classes = useStyles()
  // const { t } = useTranslation()
  // const {
  //   isAuthenticated,
  //   loginWithRedirect,
  // } = useAuth0()

  return (
      <div className={classes.root + ' mr-' + props.mr}>
        <div className={classes.root}>
          <Link href={props.link} target={props.target}>
    
            <Button
              className={classes.ButtonInternal}
              variant='outlined'
              disableElevation>
              <div className='pr-1 text-xl font-semibold'>{props.label}</div>
              <ArrowForwardIcon fontSize='middle' />
            </Button>
    
          </Link>
        </div>
     </div>
  )
}

export default ButtonInternal
