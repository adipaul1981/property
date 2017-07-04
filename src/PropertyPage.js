import React from 'react';
import TextField from 'material-ui/TextField';






export default class PropertyPage extends React.Component {

constructor(){
    super();
    this.state = {
             data: null
          }
    };


componentDidMount(){
    fetch('/Property/'+this.props.params.mlsnumber)
                .then( (response) => {
                    return response.json() })
                        .then( (json) => {
                            this.setState({data: json});
                            console.log("adrian");
                            console.log(this.state.data.Address.City);
                            console.log("adrian");
                        });
}

//componentDidUpdate() {
//    fetch('/Property/'+this.props.params.mlsnumber)
//                .then( (response) => {
//                    return response.json() })
//                        .then( (json) => {
//                            this.setState({data: json});
//                        });
//};


  render() {
      return (
//        const styles = {this};
            <div>
               <div> MLS: </div>
               <TextField
                 id="text-field-default"
//                                             defaultValue="toto"
//                                               defaultValue={styles}
                 defaultValue={this.state}
               />
               {console.log("WTF")};
               {console.log(this.state)};
               {console.log("WTF")};
           </div>

      );

  }

}

