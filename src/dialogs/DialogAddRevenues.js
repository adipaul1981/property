import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';


export default class DialogAddRevenue extends React.Component {
    state = {
          property: this.props.property,
          open: this.props.open,
    };

    saveRevenue = (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.props.property)
    };

    updateFormStateRevenue = (e) => {
        console.log(e.target)
        const field = e.target.name;
        const revenues = this.state.property.Revenues;
        console.log(revenues)
        console.log(this.state.property)
        switch(e.target.type){
                                case 'number': {
                                    revenues['RevenuesType'] = field,
                                    revenues['RevenuesType'] = field;
                                }
                                break;

                                default: {
                                    revenues[field] = e.target.value;
                                }
                                break;
                            };
        this.setState({property: this.state.property});
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
        onTouchTap={this.saveRevenue}
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
          name="Residential"
          hintText="$"
          floatingLabelText="Residential"
          floatingLabelFixed={true}
          type="number"
          defaultValue={null}
          onChange={this.updateFormStateRevenue}
        />
        <TextField
            name="Commercial"
            hintText="$"
            floatingLabelText="Commercial"
            floatingLabelFixed={true}
            type="number"
            defaultValue={null}
            onChange={this.updateFormStateRevenue}
        /><br />
         <div style={{ textAlign: 'right', padding: 8, margin: '24px -24px -24px -24px' }}>
            {actions}
          </div>
        </Dialog>
      </div>
    );
  }
}

DialogAddRevenue .propTypes = {
    handleClose: React.PropTypes.func.isRequired,
    handleSubmit: React.PropTypes.func.isRequired,
    open: React.PropTypes.bool,
    property: PropTypes.object,
};
//        <TextField
//            name="Parking_Garages"
//            hintText="$"
//            floatingLabelText="Parking/Garages"
//            floatingLabelFixed={true}
//            type="number"
//            defaultValue={this.state.revenues.Parking_Garages}
//            onChange={this.updateFormStateRevenue}
//        /><br />
//        <TextField
//            name="Others"
//            hintText="$"
//            floatingLabelText="Others"
//            floatingLabelFixed={true}
//            type="number"
//            defaultValue={this.state.revenues.Others}
//            onChange={this.updateFormStateRevenue}
//        />
//        <TextField
//            name="VacancyRateResidential"
//            hintText="%"
//            floatingLabelText="Vacancy Rate Residential"
//            floatingLabelFixed={true}
//            type="number"
//            defaultValue={this.state.revenues.VacancyRateResidential}
//            onChange={this.updateFormStateRevenue}
//        /><br />
//        <TextField
//            name="VacancyRateCommercial"
//            hintText="%"
//            floatingLabelText="Vacancy Rate Commercial"
//            floatingLabelFixed={true}
//            type="number"
//            defaultValue={this.state.revenues.VacancyRateCommercial}
//            onChange={this.updateFormStateRevenue}
//        />
//        <TextField
//            name="VacancyRateParking"
//            hintText="%"
//            floatingLabelText="Vacancy Rate Parking"
//            floatingLabelFixed={true}
//            type="number"
//            defaultValue={this.state.revenues.VacancyRateParking}
//            onChange={this.updateFormStateRevenue}
//        /><br />
//        <TextField
//            name="VacancyRateOthers"
//            hintText="%"
//            floatingLabelText="Vacancy Rate Others"
//            floatingLabelFixed={true}
//            type="number"
//            defaultValue={this.state.revenues.VacancyRateOthers}
//            onChange={this.updateFormStateRevenue}
//        /><br />
