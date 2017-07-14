import React,  { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import {spacing, typography} from 'material-ui/styles';
import {blue600,yellowA200} from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';
import ListDrawer from './ListDrawer';

import {
  deepOrange300,
  purple500,
} from 'material-ui/styles/colors';



const LeftDrawer2 = (props) => {
  let { navDrawerOpen } = props;


//  const style = {margin: 5};

  const styles = {
    logo: {
      cursor: 'pointer',
      fontSize: 22,
      color: typography.textFullWhite,
      lineHeight: `${spacing.desktopKeylineIncrement}px`,
      fontWeight: typography.fontWeightLight,
      backgroundColor: blue600,
      paddingLeft: 40,
      height: 56,
    },
    menuItem: {
      color: yellowA200,
      fontSize: 14
    },
    avatar: {
      div: {
        padding: '15px 0 20px 15px',
        backgroundImage:  'url(' + require('../images/material_bg.png') + ')',
        height: 45
      },
      icon: {
        float: 'left',
        display: 'block',
        marginRight: 15,
        boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)'
      },
      span: {
        paddingTop: 12,
        display: 'block',
        color: 'white',
        fontWeight: 300,
        textShadow: '1px 1px #444'
      }
    },



  };



  return (

    <Drawer
      docked={true}
      open={navDrawerOpen}
      >
        <div style={styles.logo}>
          Material Admin
        </div>
        <div style={styles.avatar.div}>
          <Avatar
            color={deepOrange300}
            backgroundColor={purple500}
            size={40}
            style={styles.avatar.icon}>
            AP
          </Avatar>
          <span style={styles.avatar.span}>{props.username}</span>
        </div>
        <div>
         <ListDrawer style={styles.menuItem}/>
        </div>
    </Drawer>
  );
};

LeftDrawer2.propTypes = {
  navDrawerOpen: PropTypes.bool,
  menus: PropTypes.array,
  username: PropTypes.string
};

export default LeftDrawer2;
