import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info: "Lopsen iasnia Nitin jahda iahfariah aidah continue loading",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Lopsen iasnia Nitin jahda iahfariah aidah continue loading",
      },
      {
        icon: <FaShuttleVan />,
        title: "free Shuttle",
        info: "Lopsen iasnia Nitin jahda iahfariah aidah continue loading",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Lopsen iasnia Nitin jahda iahfariah aidah continue loading",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title Title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p> {item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
