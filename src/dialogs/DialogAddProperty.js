import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';


export default class DialogAddProperty extends React.Component {
    state = {
          property: {
            MLSNumber: '',
            Price: 0,
            MunicipalEvaluation: 0,
            NoOneAndHalf: 0,
            NoTwoAndHalf: 0,
            NoThreeAndHalf: 0,
            NoFourAndHalf: 11,
            NoFiveAndHalf: 0,
            NoSixAndHalf: 0,
              Address: {
                  PropertyNumber: '',
                  Street: '',
                  City: 'Montreal',
                  Province: 'Quebec',
                  Country: 'Canada',
              },
          },
          open: this.props.open,
    };

    saveProperty = (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.state.property)
    };

    updateFormStateProperty = (e) => {
        const field = e.target.name;
        const property = this.state.property;
        switch(e.target.type){
                                case 'number': {
                                    property[field] = parseFloat(e.target.value);
                                }
                                break;

                                case "text": {
                                    property[field] = e.target.value;
                                }
                                break;
                            };
        this.setState({property: property});
    };

    updateFormStateAddress= (e) => {
        const field = e.target.name;
        const property = this.state.property;
        switch(e.target.type){
                                case 'number': {console.log(e.target.type)
                                    property.Address[field] = parseFloat(e.target.value);
                                }
                                break;

                                case "text": {
                                    property.Address[field] = e.target.value;
                                }
                                break;
                            };
        this.setState({property: property});
    };



  render() {

      if(!this.props.open) {
        return null;
      }

    const actions = [
      <FlatButton
      key={21}
        label="Cancel"
        primary={true}
        onTouchTap={this.props.handleClose}
      />,
      <FlatButton
      key={22}
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
            key={15}
          title="Scrollable Dialog"
          modal={true}
          open={this.props.open}
          autoScrollBodyContent={true}
        >
        <TextField
          key={1}
          name="MLSNumber"
          hintText="mls"
          floatingLabelText="MLS Number"
          floatingLabelFixed={true}
          onChange={this.updateFormStateProperty}   //todo
        />
        <TextField
            key={2}
            name="Price"
            hintText="$"
            floatingLabelText="Price"
            floatingLabelFixed={true}
            type="number"
            onChange={this.updateFormStateProperty}
        /><br />
        <TextField
            key={3}
            name="MunicipalEvaluation"
            hintText="municipal"
            floatingLabelText="Municipal Evaluation"
            floatingLabelFixed={true}
            type="number"
            onChange={this.updateFormStateProperty}
        /><br />
        <TextField
            key={4}
            name="NoOneAndHalf"
            floatingLabelText="No. 1 1/2"
            floatingLabelFixed={true}
            type="number"
            defaultValue={this.state.property.NoOneAndHalf}
            onChange={this.updateFormStateProperty}
        />
        <TextField
            key={5}
            name="NoTwoAndHalf"
            floatingLabelText="No. 2 1/2"
            floatingLabelFixed={true}
            type="number"
            defaultValue={this.state.property.NoTwoAndHalf}
            onChange={this.updateFormStateProperty}
        /><br />
        <TextField
            key={6}
            name="NoThreeAndHalf"
            floatingLabelText="No. 3 1/2"
            floatingLabelFixed={true}
            type="number"
            defaultValue={this.state.property.NoThreeAndHalf}
            onChange={this.updateFormStateProperty}
        />
        <TextField
            key={7}
            name="NoFourAndHalf"
            floatingLabelText="No. 4 1/2"
            floatingLabelFixed={true}
            type="number"
            defaultValue={this.state.property.NoFourAndHalf}
            onChange={this.updateFormStateProperty}
        /><br />
        <TextField
            key={14}
            name="NoFiveAndHalf"
            floatingLabelText="No. 5 1/2"
            floatingLabelFixed={true}
            type="number"
            defaultValue={this.state.property.NoFiveAndHalf}
            onChange={this.updateFormStateProperty}
        />
        <TextField
            key={8}
            name="NoSixAndHalf"
            floatingLabelText="No. 6 1/2"
            floatingLabelFixed={true}
            type="number"
            defaultValue={this.state.property.NoSixAndHalf}
            onChange={this.updateFormStateProperty}
        /><br />
       <TextField
            key={9}
            name="PropertyNumber"
            hintText="street no."
            floatingLabelText="Number"
            floatingLabelFixed={true}
            type="number"
            onChange={this.updateFormStateAddress}
        />
       <TextField
            key={10}
            name="Street"
            hintText="street"
            floatingLabelText="Street"
            floatingLabelFixed={true}
            type="text"
            onChange={this.updateFormStateAddress}
        /><br />
      <TextField
            key={11}
            name="City"
            hintText="city"
            floatingLabelText="City"
            floatingLabelFixed={true}
            type="text"
            defaultValue={this.state.property.Address.City}
            onChange={this.updateFormStateAddress}
        />
      <TextField
            key={12}
            name="Province"
            hintText="province"
            floatingLabelText="Province"
            floatingLabelFixed={true}
            type="text"
            defaultValue={this.state.property.Address.Province}
            onChange={this.updateFormStateAddress}
        /><br />
      <TextField
            key={13}
            name="Country"
            hintText="country"
            floatingLabelText="Country"
            floatingLabelFixed={true}
            type="text"
            defaultValue={this.state.property.Address.Country}
            onChange={this.updateFormStateAddress}
        /><br />
         <div style={{ textAlign: 'right', padding: 8, margin: '24px -24px -24px -24px' }}>
            {actions}
          </div>
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