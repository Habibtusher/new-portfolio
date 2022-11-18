import React, { useEffect, useState } from "react";
import "./work.css";
import { projectsNav, projectsData } from "./Data";
import WorksItems from "./WorksItems";
const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);
  console.log(active);
  return (
    <div>
      <div className="work_filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
               
                setActive(index)
                setItem({ name: e.target.textContent })}
              } 
              key={index}
              className= {active === index ? "active_work work_item" :"work_item"} 
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="work_container container grid">
        {projects.map((item, index) => {
          return <WorksItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
