import React, { Component, PropsWithChildren } from 'react';
import './app.css';
import { Switch, Route } from 'react-router-dom';
import { onAuthStateChanged, User, Unsubscribe } from 'firebase/auth';
import auth from './firebase/firebase-utils';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

class App extends Component<Record<string, unknown>, { currentUser: User | undefined }> {
  unSubscribeFromAuth: Unsubscribe | undefined = undefined;

  constructor(properties: PropsWithChildren<Record<string, unknown>>) {
    super(properties);
    this.state = {
      currentUser: undefined,
    };
  }

  componentDidMount(): void {
    this.unSubscribeFromAuth = onAuthStateChanged(auth, user => this.setState({ currentUser: user || undefined }));
  }

  componentWillUnmount(): void {
    if (this.unSubscribeFromAuth) {
      this.unSubscribeFromAuth();
    }
  }

  render(): JSX.Element {
    const { currentUser } = this.state;
    return (
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/signIn' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
