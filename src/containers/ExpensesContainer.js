import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import IndValue from '../components/IndValue';
import RaisedButton from 'material-ui/RaisedButton';
import DialogAddExpense from '../dialogs/DialogAddExpense';
import {orange500,white} from 'material-ui/styles/colors';






export default class ExpensesContainer extends React.Component {

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
//        fetch('/Property/Expenses/?ID=' + this.props.property.ID)
//                    .then( (response) => {
//                        return response.json() })
//                            .then( (json) => {
//                                this.setState({expenses: json});
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

        fetch('/Property/Expenses/',  {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(json)
        })
           .then( (response) => {
                return response.json() })
                    .then( (json) => {
                        this.setState({expenses: json});
                        console.log(json)
                    });
    };



    toggleModal = () => {
        this.setState({
            addDialog: !this.state.addDialog
        });
    }

    render() {



        if (!this.props.property.Expenses.length) {
            return (
            <div>
                    <RaisedButton label="Default" onTouchTap={this.handleOpen}/>
                    <DialogAddExpense open={this.state.addDialog} handleClose={this.handleClose} handleSubmit={this.handleSubmit} propertyId={this.props.property.ID}/>
                    </div>
            );
        }
        if (this.props.property.Expenses.length) {
        return (
            <Paper zDepth={2}>
                <div style={this.state.styles.header}>Expenses</div>
                 {this.props.property.Expenses.map((expense, index) =>
                        <IndValue ind={expense.ExpensesType} value={expense.Value}/>
                 )}
                <div>
                </div>
            </Paper>
        )};
    }
}
ExpensesContainer.propTypes = {
  property: PropTypes.object,
};