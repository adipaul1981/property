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
          revenues: null,
          styles: {
                      header: {
                            fontSize: 24,
                            color: white,
                            fontWeight: typography.fontWeightLight,
                            backgroundColor: orange500,
                            padding: 10,
                          }
                  }
        };
    }


    componentDidMount(){
        fetch('/Property/Revenues/?ID=' + this.props.property.ID)
                    .then( (response) => {
                        return response.json() })
                            .then( (json) => {
                                this.setState({revenues: json});
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

        fetch('/Property/Revenues/',  {
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

        if (!this.state.revenues) {
            return (
            <div>
                    <RaisedButton label="Default" onTouchTap={this.handleOpen}/>
                    <DialogAddRevenues open={this.state.addDialog} handleClose={this.handleClose} handleSubmit={this.handleSubmit} propertyId={this.props.property.ID}/>
            </div>
            );
        }
        return (
            <Paper zDepth={2}>
                <div style={this.state.styles.header}>Revenues</div>
                <div>
                    <IndValue ind="Residential" value={this.state.revenues.Residential}/>
                    <IndValue ind="Commercial" value={this.state.revenues.Commercial}/>
                    <IndValue ind="Parking/Garages" value={this.state.revenues.Parking_Garages}/>
                    <IndValue ind="Others" value={this.state.revenues.Others}/>
                    <div>Vacancy Rate:</div>
                    <IndValue ind="Residential" value={this.state.revenues.VacancyRateResidential}/>
                    <IndValue ind="Commercial" value={this.state.revenues.VacancyRateCommercial}/>
                    <IndValue ind="Parking/Garages" value={this.state.revenues.VacancyRateParking}/>
                    <IndValue ind="Others" value={this.state.revenues.VacancyRateOthers}/>
               </div>
            </Paper>
        );
    }
}
RevenuesContainer.propTypes = {
  property: PropTypes.object,
};
