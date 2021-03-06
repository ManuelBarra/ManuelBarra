import React from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';

import { ThemeProvider } from '@material-ui/core';
import { alpha, makeStyles, createTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Person from '@material-ui/icons/Person';
import ExitToApp from '@material-ui/icons/ExitToApp';

import AutoCompleteGnomes from '../AutoCompleteGnomes/AutoCompleteGnomes';

import { logoutUser, goToUser } from '../../redux/actions/user.creator';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));

const theme = createTheme({
  palette: {
    primary: {
      main: '#B0B0B0',
      mainGradient: 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(33,33,33,0.5) 100%)'
    },
    secondary: {
      main: '#090291'
    }
  }
});

export default function Header({ currentUser }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser());
  }

  function handleGoToProfile() {
    dispatch(goToUser(currentUser));
  }

  return (
    <div className={classes.grow}>
      <ThemeProvider theme={theme}>
        <AppBar
          position="static"
          style={{ background: theme.palette.primary.mainGradient }}
          elevation={0}
        >
          <Toolbar>
            <Typography
              className={classes.title}
              variant="h6"
              noWrap
            >
              Social Gnomes
            </Typography>
            {!!Object.keys(currentUser)?.length && (
            <>
              <div className={classes.search}>
                <AutoCompleteGnomes />
              </div>
              <div className={classes.grow} />
              <IconButton
                aria-label="Profile"
                color="inherit"
                onClick={handleGoToProfile}
              >
                <Person />
              </IconButton>
              <IconButton
                aria-label="Logout"
                color="inherit"
                onClick={handleLogout}
              >
                <ExitToApp />
              </IconButton>
            </>
            )}
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}

Header.propTypes = {
  currentUser: propTypes.shape().isRequired
};
