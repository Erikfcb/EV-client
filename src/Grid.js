import React, { Component } from "react";
import "./Grid.css";
import SecNavbar from "./SecNavbar";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pics: [
        "https://source.unsplash.com/PC_lbSSxCZE/800x600",
        // "https://source.unsplash.com/lVmR1YaBGG4/800x600",
        // "https://source.unsplash.com/5KvPQc1Uklk/800x600",
        "https://source.unsplash.com/GtYFwFrFbMA/800x600",
        "https://source.unsplash.com/Igct8iZucFI/800x600",
        // "https://source.unsplash.com/M01DfkOqz7I/800x600",
        "https://source.unsplash.com/MoI_cHNcSK8/800x600",
        "https://source.unsplash.com/M0WbGFRTXqU/800x600",
        "https://source.unsplash.com/s48nn4NtlZ4/800x600",
        "https://source.unsplash.com/E4944K_4SvI/800x600",
        "https://source.unsplash.com/F5Dxy9i8bxc/800x600",
        "https://source.unsplash.com/iPum7Ket2jo/800x600"
      ]
    };
  }
  render() {
    const articles = this.state.pics.map(pic => {
      return (
        <div
          className="row"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <div className="tdimension">
            <div>
              <img className="gridImg" src={pic} alt="gridImg" />
              TITLE
            </div>
          </div>
        </div>
      );
    });
    return [
      <SecNavbar />,
      <div className="grid" name="design">
        <div className="grid_title">STAND OUT WITH A PROFESSIONAL DESIGN</div>
        <div className="seperator" />
        <div className="subtitle">ADD A COOL GRID LAYOUT</div>
        {articles}
      </div>
    ];
  }
}

export default Grid;
