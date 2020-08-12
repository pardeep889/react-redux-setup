import React, { Component } from 'react';
import {connect} from "react-redux";
import { fetchProfile } from "../actions/user"

class User_Container extends Component {
    handleClick(){
        this.props.dispatch(fetchProfile());
    }

    render() {
        // console.log(this.props.user);
        const {user} = this.props;
        if(user.profile){
           return <> {user.profile.name} </> 
        }
        return (
            <div>


                <button onClick={this.handleClick.bind(this)}> click me! </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(User_Container);