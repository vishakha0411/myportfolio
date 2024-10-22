/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/moon.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "TravelEase",
    description:
    "A website which provides you one-stop solution for all your travel booking needs! Whether you’re planning a relaxing beach getaway, an adventurous mountain trek, or a cultural city tour",
    url: "https://github.com/vishakha0411/TravelEase.git",
  },
  {
    title: "Laundrix",
    description:
    "Laundrix is a web application designed to streamline and automate the daily transactions and operations of laundry shop businesses.",
    url: "https://github.com/vishakha0411/Laundrix.git",
  },
  {
    title: "UI/UX Designs",
    description:
    "The designs consists of front-end, app designs, website and everything.",
    url: "https://www.figma.com/file/n6Ozldm6Jk1TjOgT3TfAqR/UI%2FUX%20Designs?type=design&fuid=1137094087568354255",
  },
  {
    title: "Android App- HireAskill ",
    description:
    "An App for hiring and seeking professional as well as nonprofessional jobs. authentication, networking, booking appointments, and much more",
      url: "https://github.com/vishakha0411/HireASkill.git",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ color:"green",textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ color:"navy",flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
