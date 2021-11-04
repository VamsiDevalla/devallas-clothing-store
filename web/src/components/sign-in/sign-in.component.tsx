import React, { MouseEvent, Component, ChangeEvent } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { signInWithEmail, signInWithGoogle } from '../../firebase/firebase-utils';

class SignIn extends Component<RouteComponentProps, { email: string; password: string }> {
  constructor(properties: RouteComponentProps) {
    super(properties);
    this.state = {
      email: '',
      password: '',
    };
  }

  emailSignIn = async (event: MouseEvent<HTMLButtonElement>, email: string, password: string) => {
    event.preventDefault();
    try {
      await signInWithEmail(email, password);
      this.props.history.push('/');
    } catch {
      throw new Error('sign In with email failed');
    }
  };

  googleSignIn = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      await signInWithGoogle();
      this.props.history.push('/');
    } catch {
      throw new Error('sign In with google failed');
    }
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    if (name === 'email') {
      this.setState({ [name]: value });
    } else if (name === 'password') {
      this.setState({ [name]: value });
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form>
          <FormInput
            id='email'
            handleChange={this.handleChange}
            label='Email'
            name='email'
            type='email'
            value={email}
            required
          />
          <FormInput
            id='password'
            label='Password'
            name='password'
            type='password'
            value={password}
            required
            handleChange={this.handleChange}
          />
          <div className='buttons'>
            <Button onClick={event => this.emailSignIn(event, email, password)} isGoogleSignIn={false}>
              SIGN IN
            </Button>
            <Button onClick={event => this.googleSignIn(event)} isGoogleSignIn>
              SIGN IN WITH GOOGLE
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignIn);
