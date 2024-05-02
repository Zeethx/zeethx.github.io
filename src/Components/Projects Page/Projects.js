import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Projectx from "./Projectx";

function Projects() {
  return (
    <section className="projects">
      <Project1 id="project1" />
      <Project2 />
      <Project3 />
      <Projectx />
    </section>
  );
}

export default Projects;
