import React from 'react';
import { FormattedMessage } from 'react-intl';
/*
export default class WebsiteInfo extends React.Component {
	constructor() {
		super();
    this.state={

    };
	}
  render() {
    return (
      <div class="container">

<header>
   <h1>City Gallery</h1>
</header>
  
<nav>
  <ul>
    <li><a href="#">Loon</a></li>
    <li><a href="#">Paris</a></li>
    <li><a href="#">Tokyo</a></li>
  </ul>
</nav>

<article>
  <h1>London</h1>
  <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
  <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>
</article>

<footer>Copyright &copy; W3Schools.com</footer>

</div>

      );
  }
}
*/
const WebsiteInfo=()=>(<div className="container">

<header className='WebsiteInfo-header'>
   <h1>Society Maintainance Portal</h1>
</header>
  <section>
<nav>
  <ul>
    <li><a href="#">Users</a></li>
    <li><a href="#">Posts</a></li>
    <li><a href="#">Comments</a></li>
    <li><a href="#">Images</a></li>
  </ul>
</nav>

<article>
  <h1>London</h1>
  <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
  <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>
</article>
</section>
<footer className='WebsiteInfo-footer'>Copyright &copy; W3Schools.com</footer>

</div>);

export default WebsiteInfo;