import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import IndValue from './IndValue';
import RaisedButton from 'material-ui/RaisedButton';
import DialogAddProperty from './DialogAddProperty';






export default class ExpensesContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          expenses: null
        };
    }


    componentDidMount(){
        fetch('/Property/Expenses/?ID=' + this.props.property.ID)
                    .then( (response) => {
                        return response.json() })
                            .then( (json) => {
                                this.setState({expenses: json});
                                console.log(json)
                            });
    }

    handleOpen = () => {
        this.setState({addDialog: true});
    };

    handleClose = () => {
        this.setState({addDialog: false});
    };

    handleSubmit = (json) => {
        {console.log("toto")};
//        {console.log(json)};
        this.setState({addDialog: false});
//
//        fetch('/NewProspectProperty', {
//        method: 'POST',
//        headers: {
//        'Accept': 'application/json',
//        'Content-Type': 'application/json',
//        },
//        body: JSON.stringify(json)
//        })
//        .then(function(response) {
//
//        {console.log("tets");}
//        {console.log("tets");}
//        if(response.status == 201){
//        response.json()
//        .then(function(data){
//        console.log(data.MLSNumber);
//        browserHistory.push({pathname: '/Property/'+ data.MLSNumber, state: {mlsnumber:  data.MLSNumber}});
//        });
//        }
//        else
//        throw new Error('Something went wrong on api server!' );
//        })
    };

    toggleModal = () => {
        this.setState({
            addDialog: !this.state.addDialog
        });
    }

    render() {

        if (!this.state.expenses) {
            return (
            <div>
                    <RaisedButton label="Default" onTouchTap={this.handleOpen}/>
                    <DialogAddProperty open={this.state.addDialog} handleClose={this.handleClose} handleSubmit={this.handleSubmit}/>
                    </div>
            );
        }
        return (
            <Paper>
                <h3>Expenses</h3>
                <div>
               </div>
            </Paper>
        );
    }
}
ExpensesContainer.propTypes = {
  property: PropTypes.object,
};
//                <div
//                    <DialogAddProperty open={this.state.addDialog} handleClose={this.handleClose} handleSubmit={this.handleSubmit}/>
//                </div>
