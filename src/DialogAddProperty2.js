import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';


const styles = {
  radioButton: {
    marginTop: 16,
  },
};

/**
 * Dialog content can be scrollable.
 */
export default class DialogAddProperty extends React.Component {
    state = {
        open: this.props.open,
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
        keyboardFocused={true}
      />,
    ];


    return (
      <div>
        <Dialog
          title="Scrollable Dialog"
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.props.handleClose}
          autoScrollBodyContent={true}
        >
        <form onSubmit={this.props.handleSubmit}> //todo needs input (json)
        <TextField
          hintText="mls"
          floatingLabelText="MLS Number"
          floatingLabelFixed={true}
        />
        <TextField
          hintText="$"
          floatingLabelText="Price"
          floatingLabelFixed={true}
          type="number"
        /><br />
        <TextField
          hintText="municipal"
          floatingLabelText="Municipal Evaluation"
          floatingLabelFixed={true}
          type="number"
        /><br />
        <TextField
          floatingLabelText="No. 1 1/2"
          floatingLabelFixed={true}
          type="number"
          defaultValue="0"
        />
        <TextField
          floatingLabelText="No. 2 1/2"
          floatingLabelFixed={true}
          type="number"
          defaultValue="0"
        /><br />
        <TextField
          floatingLabelText="No. 3 1/2"
          floatingLabelFixed={true}
          type="number"
          defaultValue="0"
        />
        <TextField
          floatingLabelText="No. 4 1/2"
          floatingLabelFixed={true}
          type="number"
          defaultValue="1"
        /><br />
        <TextField
          floatingLabelText="No. 5 1/2"
          floatingLabelFixed={true}
          type="number"
          defaultValue="0"
        />
        <TextField
          floatingLabelText="No. 6 1/2"
          floatingLabelFixed={true}
          type="number"
          defaultValue="0"
        /><br />
       <TextField
          hintText="street no."
          floatingLabelText="Number"
          floatingLabelFixed={true}
          type="number"
        />
       <TextField
          hintText="street"
          floatingLabelText="Street"
          floatingLabelFixed={true}
          type="text"
        /><br />
      <TextField
          hintText="city"
          floatingLabelText="City"
          floatingLabelFixed={true}
          type="text"
          defaultValue="Montreal"
        />
      <TextField
          hintText="province"
          floatingLabelText="Province"
          floatingLabelFixed={true}
          type="text"
          defaultValue="Quebec"
        /><br />
      <TextField
          hintText="country"
          floatingLabelText="Country"
          floatingLabelFixed={true}
          type="text"
          defaultValue="Canada"
        /><br />
         <div style={{ textAlign: 'right', padding: 8, margin: '24px -24px -24px -24px' }}>
            {actions}
          </div>
        </form>
        </Dialog>
      </div>
    );
  }
}

DialogAddProperty.propTypes = {
    handleClose: React.PropTypes.func.isRequired,
    handleSubmit: React.PropTypes.func.isRequired,
    open: React.PropTypes.bool,
};