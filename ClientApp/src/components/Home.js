import React, { Component } from 'react';
// import myImage from '../images/myImage.jpg'
import myImage from './may-celiac.jpeg'
// import myImage from './../images/month-awareness/may-celiac.jpg'

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Welcome! <h2>To the Immune Cocoon - Spread Your Wings and Fly </h2></h1>
        <br />
        <p aria-live="polite"> 
        "...it's not that I can't eat there and that it's not that they're making it impossible for me to eat. It's that now I'm not spending time enjoying the event, I'm spending time worrying about how am I going to get food." <span><em> ~ Teresa, 21, New Hampshire</em></span>
        </p>
        <p aria-live="polite"> 
        "If you can deliver that meal in a way where it doesn't bring attention to that guest, that is what I think is the most impactful." <span><em> ~ Steve, 37, Oregon</em></span>
        </p>
          <br /> 
          {/* <img src="./may-celiac.jpeg" alt="banner"></img> */}
          <h4> From our partners:</h4>  
        <div> 
          <a href="https://www.linkedin.com/in/tracystuckrath?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAACyGBMB-m-4NYg0deaSK3h31ZHSMOmyImc&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed_hashtag%3Bq0uln6q%2BRkyJ%2Bo6DaOzC1A%3D%3D">Tracy Stuckrath</a>, a food and allergy expert, is excited to share the latest episode of #EatingAtAMeeting podcast for May, #FoodAllergy and #CeliacDisease Awareness Month.
          <br />
          <br />
          On the show, Tracy speaks with 
          <a href="https://www.linkedin.com/in/ACoAACO8nOkBZc3ijFmRr2t0VBykSpwjPmoJUmI" data-attribute-index="3" data-entity-type="MINI_PROFILE">Kayla King</a>,
          who is passionate about promoting restaurants that cater to people with food restrictions and allergies. As founder and CEO of <a href="https://www.linkedin.com/company/findmymeal/" data-attribute-index="5" data-entity-type="MINI_COMPANY">MyMeal</a>, she is revolutionizing the way people with food allergies, celiac disease, and restrictive diets eat out.
          <br />
          <ul> Here are three key takeaways:

            <li> 🥣 Restaurants and other food service outlets that show empathy and accommodate individuals with food allergies can gain loyal, repeat customers.</li>

            <li>🍴 Inclusion in the food environment normalizes the experience of having dietary restrictions or allergies.</li>

            <li>🍽️ Empathy is crucial on both sides for individuals with food allergies/dietary restrictions and restaurant servers and owners.</li>
          </ul> 
        
          <strong>Listen </strong>to the episode on your favorite podcast platform to learn more about how people with food restrictions have to be hyper-vigilant about what they consume and how Kayla and MyMeal are promoting a safe and confident food and beverage experience.


          Don't miss this episode!

          #Podcast #FoodAllergyAwarenessMonth #FoodSafety #Inclusion #Restaurants
        
        </div>
        
        <img src={myImage} style={{width: "auto"}}></img>
      </div>
      /*
      <div>
        <h1>Hello, world!</h1>
        <p>Welcome to your new single-page application, built with:</p>
        <ul>
          <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
          <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
          <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
        </ul>
        <p>To help you get started, we have also set up:</p>
        <ul>
          <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
          <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
          <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
        </ul>
        <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
      </div>
      */
    );
  }
}
