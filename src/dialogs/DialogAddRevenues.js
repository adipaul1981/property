import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';


export default class DialogAddRevenue extends React.Component {
    state = {
          revenues: {
            Property_Expenses_ID: this.props.propertyId,
            Residential: 0,
            Commercial: 0,
            Parking_Garages: 0,
            Others: 0,
            VacancyRateResidential: 0,
            VacancyRateCommercial: 0,
            VacancyRateParking: 0,
            VacancyRateOthers: 0,
          },
          open: this.props.open,
    };

    saveRevenue = (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.state.revenues)
    };

    updateFormStateRevenue = (e) => {
        const field = e.target.name;
        const revenues = this.state.revenues;
        switch(e.target.type){
                                case 'number': {
                                    revenues[field] = parseFloat(e.target.value);
                                }
                                break;

                                default: {
                                    revenues[field] = e.target.value;
                                }
                                break;
                            };
        this.setState({revenues: revenues});
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
          defaultValue={this.state.revenues.Residential}
          onChange={this.updateFormStateRevenue}
        />
        <TextField
            name="Commercial"
            hintText="$"
            floatingLabelText="Commercial"
            floatingLabelFixed={true}
            type="number"
            defaultValue={this.state.revenues.Commercial}
            onChange={this.updateFormStateRevenue}
        /><br />
        <TextField
            name="Parking_Garages"
            hintText="$"
            floatingLabelText="Parking/Garages"
            floatingLabelFixed={true}
            type="number"
            defaultValue={this.state.revenues.Parking_Garages}
            onChange={this.updateFormStateRevenue}
        /><br />
        <TextField
            name="Others"
            hintText="$"
            floatingLabelText="Others"
            floatingLabelFixed={true}
            type="number"
            defaultValue={this.state.revenues.Others}
            onChange={this.updateFormStateRevenue}
        />
        <TextField
            name="VacancyRateResidential"
            hintText="%"
            floatingLabelText="Vacancy Rate Residential"
            floatingLabelFixed={true}
            type="number"
            defaultValue={this.state.revenues.VacancyRateResidential}
            onChange={this.updateFormStateRevenue}
        /><br />
        <TextField
            name="VacancyRateCommercial"
            hintText="%"
            floatingLabelText="Vacancy Rate Commercial"
            floatingLabelFixed={true}
            type="number"
            defaultValue={this.state.revenues.VacancyRateCommercial}
            onChange={this.updateFormStateRevenue}
        />
        <TextField
            name="VacancyRateParking"
            hintText="%"
            floatingLabelText="Vacancy Rate Parking"
            floatingLabelFixed={true}
            type="number"
            defaultValue={this.state.revenues.VacancyRateParking}
            onChange={this.updateFormStateRevenue}
        /><br />
        <TextField
            name="VacancyRateOthers"
            hintText="%"
            floatingLabelText="Vacancy Rate Others"
            floatingLabelFixed={true}
            type="number"
            defaultValue={this.state.revenues.VacancyRateOthers}
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
    propertyId:React.PropTypes.number,
};