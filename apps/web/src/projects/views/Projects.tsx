import { ProjectData } from "../../domain/Project"
import { ProjectCell } from "../components/ProjectCell"

export const Projects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <ProjectCell project={ProjectData.cashflow} />
      <ProjectCell project={ProjectData.cyclo} />
      <ProjectCell project={ProjectData.split} />
      <ProjectCell project={ProjectData.ecoTime} />
      <ProjectCell project={ProjectData.tyradex} />
      <ProjectCell project={ProjectData.tyradexKit} />
      <ProjectCell project={ProjectData.portfolio} />
    </div>
  )
}