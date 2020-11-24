import { component } from "react";
import FacebookLogin from "react-facebook-login";

export default class Facebook extends component {
  state = {
    isLoggedIn: "false",
    userID: "",
    email: "",
    age: "",
    picture: "",
  };

  responseFacebook = (response) => {
    console.log(response);
  };

  componentClicked = () => console.log("clicked");

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = null;
    } else {
      fbContent = (
        <FacebookLogin
          appID=""
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }

    return <div>{fbContent}</div>;
  }
}
