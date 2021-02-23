import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';
import clsx from 'clsx';
import Button from "@material-ui/core/Button";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {Login} from "./Login";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    list: {
        width: 400,
    },
    fullList: {
        width: 'auto',
    },
}));



export default function ClippedDrawer() {

    const classes = useStyles();

    const [state, setState] = React.useState({
        MyProfile: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const handleClick = e => {
        localStorage.setItem('isLoggedLn', "false");
        console.log(localStorage.getItem('isLoggedLn') + " handleClick drawer")
        window.location.reload(true);
    }

    const LoginView = () => (
        <Login/>
    );

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['David Andres Vargas Leon', 'david.vargas.l@mail.escuelaing.edu.co', 'Ing Sistemas', '22 años'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 1 === 0 ? <ArrowRightOutlinedIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Log out'].map((text, index) => (
                    <ListItem button key={text}  onClick={() => { handleClick()}}>
                        <ListItemIcon>{index % 2 === 0 ? <AccountBoxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Navigation:
                    </Typography>
                    <div>
                        {['MyProfile'].map((anchor) => (
                            <React.Fragment key={anchor}>
                                <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                                <Drawer anchor={anchor} open={state[anchor] } onClose={toggleDrawer(anchor, false)}>
                                    {list(anchor)}
                                </Drawer>
                            </React.Fragment>
                        ))}
                    </div>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders"></nav>
            <main className={classes.content}>
                <Toolbar />
                <Typography paragraph>
                    INFO
                </Typography>
                <Typography paragraph>
                    INFO
                </Typography>
            </main>
        </div>
    );
}
