import React from 'react';
import IndValue from '../components/IndValue';
import FeaturesContainer from './FeaturesContainer';
import ExpensesContainer from './ExpensesContainer';
import RevenuesContainer from './RevenuesContainer';





export default class PropertyPage extends React.Component {

constructor(){
    super();
    this.state = {
             property: null
          }
    };


componentDidMount(){
    fetch('/Property/'+this.props.params.mlsnumber)
                .then( (response) => {
                    return response.json() })
                        .then( (json) => {
                            this.setState({property: json});
                            console.log(json)
                        });
}



  render() {
        if (!this.state.property) {
            return null;
        }

        if (this.state.property) {
            return (
                <div>
                    <div className="row">

                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4  ">
                            <img alt="Bootstrap Image Preview" src="http://lorempixel.com/140/140/" />
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 center-xs ">
                            <h3>Address</h3>
                                <div>
                                    <span>
                                        {this.state.property.Address.PropertyNumber}
                                    </span>
                                    <span>
                                        ,{this.state.property.Address.Street}
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        {this.state.property.Address.City}
                                    </span>
                                    <span>
                                        ,{this.state.property.Address.Province}
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        {this.state.property.Address.Country}
                                    </span>
                                </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 end-xs ">
                            <div>
                                <IndValue ind="MLS Number" value={this.state.property.MLSNumber}/>
                            </div>
                            <div>
                                <IndValue ind="Price" value={this.state.property.Price}/>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12  ">
                            <FeaturesContainer property={this.state.property}/>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6  ">
                            <ExpensesContainer property={this.state.property}/>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6  ">
                            <RevenuesContainer property={this.state.property}/>
                        </div>

                    </div>

                </div>
            );
        }
  }

}

