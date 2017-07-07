import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue600, grey900, teal900,teal500,teal800,blueGrey100,blueGrey300,blueGrey700} from 'material-ui/styles/colors';

const themeDefault = getMuiTheme({
  palette: {
    primaryColor: {
        principalColor: teal800,
        lightColor: teal500,
        darkColor: teal900,
    },
    secondaryColor: {
            principalColor: blueGrey300,
            lightColor: blueGrey100,
            darkColor: blueGrey700,
    }
  },
  appBar: {
    height: 57,
    color: teal800
  },
  drawer: {
    width: 230,
    color: grey900
  },
  raisedButton: {
    primaryColor: blue600,
  }
});


export default themeDefault;