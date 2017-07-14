import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';


export default class DialogAddExpense extends React.Component {
    state = {
          expenses: {
            Property_Expenses_ID: this.props.propertyId,
            School_Tax: 0,
            Municipal_Tax: 0,
            SnowRemoval: 0,
            Administration: 0,
            Insurance: 0,
            Heating: 0,
            Electricity: 0,
            Maintenance: 0,
            Others: 0,
          },
          open: this.props.open,
    };

    saveProperty = (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.state.expenses)
    };

    updateFormStateProperty = (e) => {
        const field = e.target.name;
        const expenses = this.state.expenses;
        switch(e.target.type){
                                case 'number': {console.log(e.target.type)
                                    expenses[field] = parseFloat(e.target.value);
                                }
                                break;

                                case "text": {
                                    expenses[field] = e.target.value;
                                }
                                break;
                            };
        this.setState({expenses: expenses});
    };

  render() {

      if(!this.props.open) {
        return null;
      }

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.handleClose}
      />,
      <FlatButton
        label="Submit"
        type='submit'
        primary={true}
        onTouchTap={this.saveProperty}
        keyboardFocused={true}
      />,
    ];


    return (
      <div>
        <Dialog
          title="Scrollable Dialog"
          modal={true}
          open={this.props.open}
          autoScrollBodyContent={true}
        >
        <TextField
          name="Municipal_Tax"
          hintText="$"
          floatingLabelText="Municipal Tax"
          floatingLabelFixed={true}
          type="number"
          defaultValue={this.state.expenses.Municipal_Tax}
          onChange={this.updateFormStateProperty}
        />
        <TextField
            name="School_Tax"
            hintText="$"
            floatingLabelText="School Tax"
            floatingLabelFixed={true}
            type="number"
            defaultValue={this.state.expenses.School_Tax}
            onChange={this.updateFormStateProperty}
        /><br />
        <TextField
            name="SnowRemoval"
            hintText="$"
            floatingLabelText="Snow Removal"
            floatingLabelFixed={true}
            type="number"
            defaultValue={this.state.expenses.SnowRemoval}
            onChange={this.updateFormStateProperty}
        /><br />
        <TextField
            name="Administration"
            hintText="$"
            floatingLabelText="Administration"
            floatingLabelFixed={true}
            type="number"
            defaultValue={this.state.expenses.Administration}
            onChange={this.updateFormStateProperty}
        />
        <TextField
            name="Insurance"
            hintText="$"
            floatingLabelText="Insurance"
            floatingLabelFixed={true}
            type="number"
            defaultValue={this.state.expenses.Insurance}
            onChange={this.updateFormStateProperty}
        /><br />
        <TextField
            name="Heating"
            hintText="$"
            floatingLabelText="Heating"
            floatingLabelFixed={true}
            type="number"
            defaultValue={this.state.expenses.Heating}
            onChange={this.updateFormStateProperty}
        />
        <TextField
            name="Electricity"
            floatingLabelText="Electricity"
            floatingLabelFixed={true}
            type="number"
            defaultValue={this.state.expenses.Electricity}
            onChange={this.updateFormStateProperty}
        /><br />
        <TextField
            name="Maintenance"
            hintText="$"
            floatingLabelText="maintenance"
            floatingLabelFixed={true}
            type="number"
            defaultValue={this.state.expenses.Maintenance}
            onChange={this.updateFormStateProperty}
        />
        <TextField
            name="Others"
            hintText="$"
            floatingLabelText="Others"
            floatingLabelFixed={true}
            type="number"
            defaultValue={this.state.expenses.Others}
            onChange={this.updateFormStateProperty}
        /><br />
         <div style={{ textAlign: 'right', padding: 8, margin: '24px -24px -24px -24px' }}>
            {actions}
          </div>
        </Dialog>
      </div>
    );
  }
}

DialogAddExpense.propTypes = {
    handleClose: React.PropTypes.func.isRequired,
    handleSubmit: React.PropTypes.func.isRequired,
    open: React.PropTypes.bool,
    propertyId:React.PropTypes.number,
};