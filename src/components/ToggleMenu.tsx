import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

type Anchor = 'left' | 'right';

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <List>
          <ListItem button key={"text"}>
            <Link to="/">Trang chủ</Link>
          </ListItem>
          <Link to="/blog">
          <ListItem button key={"text"}>
          Trang chủ
          </ListItem>
          </Link>

          <ListItem button key={"text"}>
            <Link to="/product">Trang chủ</Link>
          </ListItem>

          <ListItem button key={"text"}>
            <Link to="/tutorial">Trang chủ</Link>
          </ListItem>

      </List>
      <Divider />

    </div>
  );

  return (
    <div>
      {(['right'] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{<MenuIcon/>}</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
