import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import IndValue from '../components/IndValue';
import RaisedButton from 'material-ui/RaisedButton';
import DialogAddRevenues from '../dialogs/DialogAddRevenues';
import {orange500,white} from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';






export default class RevenuesContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

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


//    componentDidMount(){
//        fetch('/Property/Revenues/?ID=' + this.props.property.ID)
//                    .then( (response) => {
//                        return response.json() })
//                            .then( (json) => {
//                                this.setState({revenues: json});
//                                console.log(json)
//                            });
//    }

    handleOpen = () => {
        this.setState({addDialog: true});
    };

    handleClose = () => {
        this.setState({addDialog: false});
    };

    handleSubmit = (json) => {
        this.setState({addDialog: false});

        fetch('/Property/Revenues/',  {
            method: 'PUT',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(json)
        })
           .then( (response) => {
                return response.json() })
                    .then( (json) => {
                        this.setState({revenues: json});
                        console.log(json)
                    });
    };

    sumRevenues = () => {
        console.log("testtttttttttttttttt");
        for(let i = 0; i < this.state.revenues; i++) {
         console.log("test");
        }
        return "1"
    };


    toggleModal = () => {
        this.setState({
            addDialog: !this.state.addDialog
        });
    }

    render() {

        if (!this.props.property.Revenues.length) {
            return (
            <div>
                    <RaisedButton label="Default" onTouchTap={this.handleOpen}/>
                    <DialogAddRevenues open={this.state.addDialog} handleClose={this.handleClose} handleSubmit={this.handleSubmit} property={this.props.property}/>
            </div>
            );
        }
        if (this.props.property.Revenues.length) {
        return (
            <Paper zDepth={2}>
                <div style={this.state.styles.header}>Revenues</div>
                 {this.props.property.Revenues.map((revenue, index) =>
                        <IndValue ind={revenue.RevenuesType} value={revenue.Value}/>
                 )}
                <div>
                </div>
            </Paper>
        )};
    }
}
RevenuesContainer.propTypes = {
  property: PropTypes.object,
};
