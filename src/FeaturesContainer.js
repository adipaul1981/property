import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import IndValue from './IndValue';






export default class FeatureContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      property: props.property,
      addDialog: false
    };
  }




  render() {
            return (
                <Paper>
                    <h3>Features</h3>
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
