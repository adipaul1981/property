import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';






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
                        });
}



  render() {
        if (!this.state.data) {
            return null;
        }

        if (this.state.data) {
            return (
                    <Paper>
                        <div>
                           <div> MLS: </div>
                           <TextField
                             id="text-field-default"
                             defaultValue={this.state.data.MLSNumber}

                           />
                       </div>
                   </Paper>
            );
        }
  }

}

