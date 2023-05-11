import React, { Component } from 'react';
// import myImage from '../images/myImage.jpg'
import myImage from './may-celiac.jpeg'
// import myImage from './../images/month-awareness/may-celiac.jpg'
// import { Link } from 'react-router-dom';


export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
      <h1>Welcome! <h2>To the Immune Cocoon </h2></h1>
      <h5><em>an allergen & immunology log</em></h5><h2> ~ Spread Your Wings and Fly ~ </h2>
      <br />
      <p aria-live="polite"> 
      "...it's not that I can't eat there and that it's not that they're making it impossible for me to eat. It's that now I'm not spending time enjoying the event, I'm spending time worrying about how am I going to get food." <span><em> - Teresa, 21, New Hampshire</em></span>
      </p>
      <p aria-live="polite"> 
      "If you can deliver that meal in a way where it doesn't bring attention to that guest, that is what I think is the most impactful." <span><em> - Steve, 37, Oregon</em></span>
      </p>
        <br /> 
        {/* <img src="./may-celiac.jpeg" alt="banner"></img> */}
        <ul>
        <li><a href='http://localhost:5133'>5133:local host</a> cretaceous w swagger.html <a href='http://localhost:7222/index.html'>lc/7222:C# w swagger only</a> server-side <a href='http://localhost:7222'>code</a></li>
        <li><a href='https://localhost:5001'>https:local host</a> and <a href='http://localhost:5000/index.html'>5000/index.html</a> </li>
        <li><a href='https://localhost:7261/weatherforecast'>weather fetch: https/7261</a> and <a href='https://localhost:7261/weatherforecast'>C#</a> Microsoft.Hosting.Lifetime[14]: for cross-platform server-side code</li>
        
        <br />

          <p>At components, sitrs are served from API.CONTROLLER:</p>
          <li><a href='https://localhost:44484/'>1: </a> basic </li>
          <li><a href='https://localhost:44484/create'>2: </a> create</li>
          <li><a href='https://localhost:44484/'>3: </a> read</li>
          <li><a href='https://localhost:44484/edit'>4: </a> update edit</li>
          <li><a href='https://localhost:44484/delete'>5: </a> delete</li>
        </ul>

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
    );
  }
}
