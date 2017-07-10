import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import IndValue from './IndValue';






export default class ExpensesContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          property: props.property
        };
    }


    componentDidMount(){
        fetch('/Property/Expenses/')
                    .then( (response) => {
                        return response.json() })
                            .then( (json) => {
                                this.setState({data: json});
                                console.log(json)
                            });
    }

    GET     /Property/Expenses/


    render() {
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
