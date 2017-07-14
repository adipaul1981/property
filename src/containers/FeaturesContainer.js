import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import IndValue from '../components/IndValue';
import {orange500,white} from 'material-ui/styles/colors';





export default class FeatureContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        property: props.property,
        addDialog: false,
        styles: {
            header: {
                  fontSize: 24,
                  color: white,
                  backgroundColor: orange500,
                  padding: 10,
                }
        }
    };
  }




  render() {
            return (
                <Paper zDepth={2}>
                    <div style={this.state.styles.header}>Features</div>
                    <div>
                       <IndValue ind="Number of units" value={this.props.property.NoOneAndHalf + this.props.property.NoTwoAndHalf + this.props.property.NoThreeAndHalf +
                       this.props.property.NoFourAndHalf + this.props.property.NoFiveAndHalf + this.props.property.NoSixAndHalf}/>
                      <IndValue ind="1 1/2" value={this.props.property.NoOneAndHalf}/>
                      <IndValue ind="2 1/2" value={this.props.property.NoTwoAndHalf}/>
                      <IndValue ind="3 1/2" value={this.props.property.NoThreeAndHalf}/>
                      <IndValue ind="4 1/2" value={this.props.property.NoFourAndHalf}/>
                      <IndValue ind="5 1/2" value={this.props.property.NoFiveAndHalf}/>
                      <IndValue ind="6 1/2" value={this.props.property.NoSixAndHalf}/>
                   </div>
                </Paper>
            );
  }
}
FeatureContainer.propTypes = {
  property: PropTypes.object,
};
