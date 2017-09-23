import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';


export default class DialogAddRevenue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        property: this.props.property,
        open: this.props.open,
        rev:[]
    };


    this.handleChange = this.handleChange.bind(this);
    this.saveRevenue = this.saveRevenue.bind(this);
    this.updateFormStateRevenue = this.updateFormStateRevenue.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

    saveRevenue = (e) => {
        e.preventDefault();
        console.log("save");
        var a3 = Object.keys(a2).map(function (k) { return a2[k];}) //TODO
        console.log(this.state.property);
        console.log("save");
//        this.props.handleSubmit(this.state.property)
    };

    updateFormStateRevenue = (e) => {
    var revenue = {'RevenuesType':e.target.name,'Value':parseInt(e.target.value),'VacancyRate':0};

        switch(e.target.type){
                                case 'number': {
                                            var revenue = {'RevenuesType':e.target.name,'Value':parseInt(e.target.value),'VacancyRate':0};
//                                            this.setState({
//                                                property: {
//                                                  ...this.state.property,
//                                                  Revenues:[
//                                                    {...this.state.property.Revenues,
//                                                    ...revenue}
//                                                    ]
//                                                }
//                                            });
                                            let rev = this.state.rev;
                                            let name = e.target.name;
                                            let value = e.target.value;
                                            rev[name] = {'RevenuesType':e.target.name,'Value':parseInt(e.target.value),'VacancyRate':0};

                                            this.setState({rev})
                                }
                                break;

                                default: {
                                }
                                break;
                            };



    };

//  handleSubmit(event) {
//    alert('A name was submitted: ' + this.state.value);
//    event.preventDefault();
//  }

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
        <Dialog onSubmit={this.handleSubmit}
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

DialogAddRevenue.propTypes = {
    handleClose: React.PropTypes.func.isRequired,
    handleSubmit: React.PropTypes.func.isRequired,
    open: React.PropTypes.bool,
    property: PropTypes.object,
};


//
//export default class DialogAddRevenue extends React.Component {



