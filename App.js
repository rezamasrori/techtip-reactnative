import React ,{Component} from 'react';

import Loding from './Component/Loding';

import Login from './Component/Login';

export default class App extends Component {


  constructor(props){
    super (props);
    this.state = {

      view : <Loding/>
    };

  }

    render() {


          setTimeout(()=>{
            if(true){
              this.setState({
                view : <Login/>
              })
            }
            else {
              this.setState({
                view : <Loding/>
              })
            }
          },2000)

        return(
            this.state.view
          );
    }
}

