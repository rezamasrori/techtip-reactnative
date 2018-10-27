import React ,{Component} from 'react';

import Loding from './Loding';

import Link from './Link';



export default class App extends Component {

    constructor(props){

        super(props);

        this.state = {
            View : <Loding />

        }


    }


    render(){

        setTimeout(()=>{
            if(true)
            this.setState ({
                View:<Link/>
            })
            else {
            this.setState ({
                View :<Loding/>
                })
             }
        },2000)



        return(
            this.state.View

        );
    }
}
