import React, { Component } from 'react'
import App from './App'
import { Link } from 'react-router'
import JSONDebugger from '../utils/JSONDebugger'
import Formsy from 'formsy-react'

import { MenuItem,
         RaisedButton } from 'material-ui'
         
import { FormsySelect,
         FormsyDate,
       } from 'formsy-material-ui'


// example JSON data
const exampleJSONData = {
    data1: 'data1',
    data2: 'data2',
    data3: 123
}

//material-ui components
import { TextField } from 'material-ui/';

class ReferralForm extends Component {

    render(){
        return(
            <App> 
                <br/>
                <div className="border color-purple">
                    <p><Link to='/'>Go to root page</Link></p>
                    <p>
                        <TextField
                            hintText="Type something here"
                            floatingLabelText="This is a text field child from ReferralForm component"
                            fullWidth={true}
                        />
                    </p>

                    <Formsy.Form>
                        <FormsyDate
                          name="date"
                          required
                          floatingLabelText="Departure date"
                          fullWidth={true}
                        />

                        <FormsyDate
                          name="date"
                          required
                          floatingLabelText="Arrival date"
                          fullWidth={true}
                        />

                        <FormsySelect
                          name="currentLocation"
                          required
                          floatingLabelText="Current location"
                          menuItems={this.selectFieldItems}
                          fullWidth={true}
                        >
                          <MenuItem value={'Sydney'} primaryText="Sydney" />
                          <MenuItem value={'Melbourne'} primaryText="Melbourne" />
                      </FormsySelect>

                        <FormsySelect
                          name="destination"
                          required
                          floatingLabelText="Destination"
                          menuItems={this.selectFieldItems}
                          fullWidth={true}
                        >
                          <MenuItem value={'Sydney'} primaryText="Sydney" />
                          <MenuItem value={'Melbourne'} primaryText="Melbourne" />
                      </FormsySelect>

                      <RaisedButton
                        type="submit"
                        label="Submit"
                        disabled={true}
                      />

                    
 
                    </Formsy.Form>


                    <p>Below is an example of the JSON debugger</p>
                    <JSONDebugger json={exampleJSONData} />
                
                </div> 
            </App> 
        )
    }
}

export default ReferralForm

