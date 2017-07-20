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
          expenses: [] ,

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
        const numbers = Object.entries(this.state.expenses);
        console.log("Adrian");
        console.log(this.state.expenses);
        console.log(Object.values(this.state.expenses));
        console.log(Object.entries(this.state.expenses));
        console.log("Adrian");

        var test = numbers.map((value, index) => (
           <div>{value[1]}</div>
        ));



        if (!this.state.expenses) {
            return (
            <div>
                    <RaisedButton label="Default" onTouchTap={this.handleOpen}/>
                    <DialogAddExpense open={this.state.addDialog} handleClose={this.handleClose} handleSubmit={this.handleSubmit} propertyId={this.props.property.ID}/>
                    </div>
            );
        }
        if (this.state.expenses) {
        return (
            <Paper zDepth={2}>
                <div style={this.state.styles.header}>Expenses</div>
                <div>
                    <IndValue ind="Municipal Tax" value={this.state.expenses.Municipal_Tax}/>
                    <IndValue ind="School Tax" value={this.state.expenses.School_Tax}/>
                    <IndValue ind="Electricity" value={this.state.expenses.Electricity}/>
                    <IndValue ind="Heating" value={this.state.expenses.Heating}/>
                    <IndValue ind="Insurance" value={this.state.expenses.Insurance}/>
                    <IndValue ind="Snow Removal" value={this.state.expenses.SnowRemoval}/>
                    <IndValue ind="Maintenance" value={this.state.expenses.Maintenance}/>
                    <IndValue ind="Administration" value={this.state.expenses.Administration}/>
                    <IndValue ind="Others" value={this.state.expenses.Others}/>
               </div>
               {test}
            </Paper>
        )};
    }
}
ExpensesContainer.propTypes = {
  property: PropTypes.object,
};
