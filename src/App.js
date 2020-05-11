import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
// import logo from './logo.svg';

import './App.css';
import HomePage from './Pages/Homepages/homepage.component';
import ShopPage from './Pages/shop/shop.component.jsx';
import Header from  './Components/header/header.component.jsx';
import SignInandSignUp from './Pages/sign-in&sign-up/sign-in&sign-up.jsx';
import CheckoutPage from './Pages/checkout/checkout';

import {auth , createUserProfileDocument} from './firebase/firebase.utils';

import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selector';

// const HatsPage = () => (
// <div>
//   <h1>Hats Page</h1>
// </div>

// );

const TopicDetail = (props) => {
  console.log (props)
  return(
  <div>
    <h1>Topic List Detail Page : {props.match.params.topicsid}</h1>
  </div> );
  
};

  const TopicList = () => (
    <div>
      <h1>Topics List</h1>
    </div>
    
    );

class    App extends React.Component {
  // constructor() {  after redux we dont need the constructor any more
  //   super ();

  //   this.state ={
  //     currentUser : null
  //   };
  // }
   unSubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} =this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged ( async userAuth => {

      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            
              id: snapShot.id, ...snapShot.data() 
            
          // } , () => {
          //   console.log(this.state); // in a sync we write consle after the () =>
          // } we removed because not need in sign up

          });

          console.log(this.state);
        });
        

      }
      else {setCurrentUser(userAuth);} //curent user to null
      // createUserProfileDocument(user); //for checking data of user in database firebase
  
    // this.setState ({currentUser: user});

    // console.log(user);
  } );
  }

  componentWillUnmount() {
     this.unSubscribeFromAuth();
  }

  render() {

    return (
    <div>
      {/* <Header currentUser={this.state.currentUser}/>  we make header empty after importing redux*/}
   <Header />
   <Switch>
   <Route exact path = '/' component ={HomePage} />

   
   <Route path = '/shop' component ={ShopPage} />
   <Route exact path = '/checkout' component ={CheckoutPage} />


   <Route exact path ='/signin' render = {() => this.props.currentUser ? (<Redirect to = '/' />) : (<SignInandSignUp/>)} />
   <Route  path ='/topics' component ={TopicList} />
   <Route  path ='/topics/:topicsid' component ={TopicDetail} />
   </Switch>
    </div>  );


  }
    
}
const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});

const mapDispatchToProps=dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) // the user is oof user-reducer

});

export default connect (mapStateToProps,mapDispatchToProps)(App);
