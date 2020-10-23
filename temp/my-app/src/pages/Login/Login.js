import React, {Component} from 'react';
import './Login.css';
import hands from './hands.jpg'

class Profile extends Component {
    render(){
        return(
            <div className="profilebg"> 
                <div className = "profileContainer">
                    <img className= "bgimg"  src={hands} alt=""/>

                    <div className = "profileBox">
                        <div className = "profileText">
                            <h1> Start your ePortfolio today. </h1>
                            <br/>
                            <p>
                                New? Create your portfolio
                            </p>
                        </div>
                        <br/>
                        <a className = "loginButton" href = "localhost:3000"><button>Login /Sign Up</button></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;