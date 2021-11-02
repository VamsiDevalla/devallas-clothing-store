import { Component } from "react";
import "./sign-in.styles.scss";
import { withRouter } from "react-router-dom";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {
  emailSignIn,
  signInWithGoogle,
  signOut,
} from "../../firebase/firebase-utils";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  signIn = async (event, handler, email, password) => {
    event.preventDefault();
    try {
      await handler(email, password);
      this.props.history.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form>
          <FormInput
            handleChange={this.handleChange}
            label="Email"
            name="email"
            type="email"
            value={email}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            label="Password"
            name="password"
            type="password"
            value={password}
            required
          />
        </form>
        <Button
          onClick={(event) => this.signIn(event, emailSignIn, email, password)}
        >
          SIGN IN
        </Button>
        <Button onClick={(event) => this.signIn(event, signInWithGoogle)}>
          SIGN IN WITH GOOGLE
        </Button>
        <Button onClick={signOut}>SIGN OUT</Button>
      </div>
    );
  }
}

export default withRouter(SignIn);
