import React, { Component, PropTypes} from 'react';
import logo from './logo.svg';
import './App.css';
import ThemeDefault from './theme-default';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import withWidth, {LARGE, SMALL} from 'material-ui/utils/withWidth';
import Header from './Header';
import LeftDrawer2 from './LeftDrawer2';
import Data from './data';
import ListDrawer from './ListDrawer';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: false
    };
  }

  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });
  }

  render() {
      let { navDrawerOpen } = this.state;
      const paddingLeftDrawerOpen = 236;

      const styles = {
        header: {
          paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
        },
        container: {
          margin: '80px 20px 20px 15px',
          paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
        }
      };
    return (
        <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>

            <Header styles={styles.header}
                          handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}/>
            <LeftDrawer2 navDrawerOpen={navDrawerOpen}
                                    menus={Data.menus}
                                    username="User Admin"/>

            <div style={styles.container}>
              {this.props.children}
            </div>
        </div>

        </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
