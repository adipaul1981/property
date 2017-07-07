import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import KeyValue from './KeyValue';






export default class PropertyPage extends React.Component {

constructor(){
    super();
    this.state = {
             data: null
          }
    };


componentDidMount(){
    fetch('/Property/'+this.props.params.mlsnumber)
                .then( (response) => {
                    return response.json() })
                        .then( (json) => {
                            this.setState({data: json});
                            console.log(json)
                        });
}



  render() {
        if (!this.state.data) {
            return null;
        }

        if (this.state.data) {
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
                                        {this.state.data.Address.PropertyNumber}
                                    </span>
                                    <span>
                                        ,{this.state.data.Address.Street}
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        {this.state.data.Address.City}
                                    </span>
                                    <span>
                                        ,{this.state.data.Address.Province}
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        {this.state.data.Address.Country}
                                    </span>
                                </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 end-xs ">
                            <div>
                                <span>
                                    MLS Number:
                                </span>
                                <span>
                                    {this.state.data.MLSNumber}
                                </span>
                            </div>
                            <div>
                                <span>
                                  Price:
                                </span>
                                <span>
                                        ${this.state.data.Price}
                                </span>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6  ">
                            <Paper>
                                <div>
                                   <div> MLS: </div>
                                   <TextField
                                     id="text-field-default"
                                     defaultValue={this.state.data.MLSNumber}
                                   />
                               </div>
                            </Paper>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 ">
                            <Paper>
                                <div>
                                   <div> MLS: </div>
                                   <TextField
                                     id="text-field-default"
                                     defaultValue={this.state.data.MLSNumber}

                                   />
                                   <KeyValue _key="MLS Number:" _value={this.state.data.MLSNumber}/>
                               </div>
                            </Paper>
                        </div>
                    </div>

                </div>
            );
        }
  }

}

