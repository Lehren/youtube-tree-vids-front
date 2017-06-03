import React, {Component} from "react";
import {Jumbotron} from "react-bootstrap";

class IntroText extends Component {
    render() {
        return (
            <Jumbotron>
                <h3 className="text-center">
                    Welcome to Youtube Trees! With this tool you can input any youtube video, and it will make a
                    playlist
                    of the next 20 recommended videos. Handy to see where Youtube autoplay makes you end up.
                    Try it now!
                </h3>
            </Jumbotron>
        )
    }
}

export default IntroText;