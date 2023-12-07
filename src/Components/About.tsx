import React from "react";
import Header from "./Header";
import about from './../images/about-img.jpg';
const About: React.FC = () => {
  return (
    <>
      <Header />
      <div className="about p-3">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row">
            <h2 className="p-3">About</h2>
            <div className="cover col-12 col-md-5 col-lg-6 p-3">
              <img className="w-100 h-100" src={about} />
            </div>
            <div className="description col-12 col-md-7 col-lg-6 p-3">
              <p className="subject w-md-25">
                <h2>About BookHub</h2> Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Accusamus dignissimos consequuntur vero
                commodi provident maiores, iusto atque corrupti voluptate vel
                sequi consectetur unde aliquam corporis saepe animi non, tempora
                reiciendis molestias sed laudantium dolores. Assumenda aperiam
                fuga quo voluptate commodi ullam aliquam expedita voluptas
                delectus. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Dolor, dicta, possimus inventore eveniet atque
                voluptatibus repellendus aspernatur illo aliquam dignissimos
                illum. Commodi, porro omnis dolore amet neque modi quas eum!{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
