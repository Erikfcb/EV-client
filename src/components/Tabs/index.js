import React, { Component } from "react";
import "./Tabs.css";
import TabContent from "../TabContent";
import SecNavbar from "../SecNavbar";

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "2",
      info: [
        {
          title: "Island",
          text: `An island may be described as such, despite the presence of an artificial land bridge; examples are Singapore and its causeway, and the various Dutch delta islands, such as IJsselmonde. Some places may even retain "island" in their names for historical reasons after being connected to a larger landmass by a land bridge or landfill, such as Coney Island and Coronado Island, though these are, strictly speaking, tied islands. Conversely, when a piece of land is separated from the mainland by a man-made canal, for example the Peloponnese by the Corinth Canal or Marble Hill in northern Manhattan during the time between the building of the United States Ship Canal and the filling-in of the Harlem River which surrounded the area, it is generally not considered an island.`,
          img: "../assets/0.jpg",
          id: "0"
        },
        {
          title: "Waves",
          text:
            "There are two main types of waves: mechanical and electromagnetic. Mechanical waves propagate through a physical matter, whose substance is being deformed. Restoring forces then reverse the deformation. For example, sound waves propagate via air molecules colliding with their neighbours. When the molecules collide, they also bounce away from each other (a restoring force). This keeps the molecules from continuing to travel in the direction of the wave. Electromagnetic waves do not require a medium. Instead, they consist of periodic oscillations of electrical and magnetic fields originally generated by charged particles, and can therefore travel through a vacuum. These types vary in wavelength, and include radio waves, microwaves, infrared radiation, visible light, ultraviolet radiation, X-rays and gamma rays.",
          img: "../assets/1.jpg",
          id: "1"
        },
        {
          title: "Mountains",
          text: `A mountain is a large landform that rises above the surrounding land in a limited area, usually in the form of a peak. A mountain is generally steeper than a hill. Mountains are formed through tectonic forces or volcanism. These forces can locally raise the surface of the earth. Mountains erode slowly through the action of rivers, weather conditions, and glaciers. A few mountains are isolated summits, but most occur in huge mountain ranges.
          High elevations on mountains produce colder climates than at sea level. These colder climates strongly affect the ecosystems of mountains: different elevations have different plants and animals. Because of the less hospitable terrain and climate, mountains tend to be used less for agriculture and more for resource extraction and recreation, such as mountain climbing.`,
          img: "../assets/2.jpg",
          id: "2"
        },
        {
          title: "Waterfall",
          text: `Waterfalls are commonly formed in the upper course of a river in steep mountains. Because of their landscape position, many waterfalls occur over bedrock fed by little contributing area, so may be ephemeral and flow only during rainstorms or significant snowmelt. The further downstream, the more perennial a waterfall can be. Waterfalls can have a wide range of widths and depths, and this diversity is part of what makes them such a charismatic and interesting natural phenomenon. Research into the diversity of natural waterfalls systematics has been carried out in recent years.`,
          img: "../assets/3.jpg",
          id: "3"
        }
      ]
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(index) {
    this.setState({
      selected: index
    });
  }

  render() {
    const content = this.state.info[this.state.selected];

    const titles = ["One", "Two", "Three", "Four"];

    const tabs = this.state.info.map((el, index) => {
      let classes = "tab ";
      if (el.id == this.state.selected) {
        classes = classes + "selected ";
      }
      return (
        <div className={classes} onClick={() => this.handleChange(index)}>
          <p className="right">{titles[index]}</p>
        </div>
      );
    });

    return [
      <SecNavbar />,
      <div className="tabs_wrap">
        <div className="tabs_title">
          DISPLAY TOUR CONTENT WITH <span>TABS</span>
        </div>
        {/* <div className="tabs_sub_sep"/> */}
        <div className="tabs">{tabs}</div>
        <TabContent {...content} />
      </div>
    ];
  }
}

export default Tabs;
