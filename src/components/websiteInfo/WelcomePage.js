import React from 'react';
import Login from './Login';
import Register from './Register';
/*class WelcomePage extends React.Component {
   render() {
      return (
      	<div>
         <header id='pageHeaders'>
            <h1>Welcome to Society Portal</h1>
         </header>
         <section id="login"><Login /></section>
         <section id= "register"><Register /> </section>
         <footer id='welcomePageFooter'>
         	CopyWrite Protected
         </footer>
         </div>
      );
   }
}*/
const WelcomePage=()=>(<div>
         <header id='pageHeaders'>
            <h1>Welcome to Society Portal</h1>
         </header>
         <section id="login"><Login /></section>
         <section id= "register"><Register /> </section>
         <footer id='welcomePageFooter'>
            CopyWrite Protected
         </footer>
         </div>);
export default WelcomePage;