import { useParams } from "react-router-dom";
import { ProjectData } from "../../domain/Project";

export const ProjectDetail = () => {
  const { projectName } = useParams<{ projectName: string }>();
  const project = ProjectData.projects.find((project) => project.name.toLowerCase() === projectName);

  if (!project) {
    return <p className="text-white">Projet non trouvé</p>;
  } 
  
  return <div>
    <div className="grid grid-cols-3">
      {
        project.images.map((image) => (
          <img src={image} alt="zfzf" className="p-16"/>
        ))
      }
    </div>
  </div>
  
}