import React, { Component } from "react";
import "./Skills.css";
import Card from "./Card";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        {
          title: "RESPONSIVE DESIGN",
          subtitle: `Make sure your website is suitable for all devices, and looks great on different screen sizes.
          So your customers can reach your website with their smartphones.`,
          icon: "fas fa-tablet-alt",
          aos: "zoom-in-right",
          delay: "",
          id: "1"
        },
        {
          title: "CUSTOMER ENGAGEMENT",
          subtitle: `Collect information from visitors through contact or signup forms, applications, surveys, and more. 
          Reach visitors with email using Email Campaigns.`,
          icon: "far fa-envelope",
          aos: "zoom-in-up",
          delay: "300",
          id: "2"
        },
        {
          title: "MAPS & INFORMATION",
          subtitle: `Embed Google Maps on your website to show visitors where your business is located. 
          Engage them with the unique story of your business with an about page.`,
          icon: "fas fa-map-marked-alt",
          aos: "zoom-in-up",
          delay: "600",
          id: "3"
        },
        {
          title: "SOCIAL INTEGRATION",
          subtitle: `Update your content and let your customers share it simultaneously across Facebook and Twitter. 
          "Share" and "Pin It" buttons let visitors share your content out to their followers.`,
          icon: "fas fa-share-alt",
          aos: "zoom-in-left",
          delay: "900",
          id: "4"
        }
      ]
    };
  }
  render() {
    const cards = this.state.skills.map(element => {
      return (
        <div
          className="card_wrap"
          data-aos={element.aos}
          data-aos-delay={element.delay}
          key={element.id}          
        >
          <Card
            title={element.title}
            subtitle={element.subtitle}
            icon={element.icon}
          />
        </div>
      );
    });

    return (
      <div className="skills" name="skills">
        <div className="skills_title">BY INCLUDING IN YOUR WEBSITE</div>
        <div className="cards_in_skills">{cards}</div>
      </div>
    );
  }
}

export default Skills;
