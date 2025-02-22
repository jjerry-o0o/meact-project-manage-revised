import SideBar from './components/SideBar.jsx';
import CreateProject from "./components/CreateProject.jsx";
import EmptyProject from "./components/EmptyProject.jsx";
import ProjectManage from "./components/ProjectManage.jsx";
import {useState} from "react";


function App() {
  const [viewMode, setViewMode] = useState("Empty");
  const [projectData, setProjectData] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(undefined);
  const [projectId, setProjectId] = useState(0);

  function handleViewMode(view) {
    setViewMode(view);
  }

  function saveProjectData(projectData){
    console.log(`프로젝트 데이터 : ${projectData}`)
    setProjectData(prevProjectData => {
      return [
        ...prevProjectData,
        {
          ...projectData,
          projectId: projectId,
          tasks: []
        },
      ];
    });

    setProjectId(prevProjectId => prevProjectId + 1)
    setViewMode("Empty");
  }

  function updateProjectData(description, tasks) {
    setProjectData(prevProjectData => {
      prevProjectData.map(project => {
        if (project.projectId === selectedProjectId) {
          project.description = description;
          project.tasks = tasks;
        }
      });

      return prevProjectData;
    });

    setViewMode("Empty");
  }

  function deleteProjectData() {
    setProjectData(prevProjectData => {
      return prevProjectData.filter(data => data.projectId !== selectedProjectId);
    });

    setViewMode("Empty");
  }

  return (
    <>
      <main className="flex h-screen gap-8">
        <SideBar
          onChangeView={handleViewMode}
          projectData={projectData}
          selectedId={selectedProjectId}
          onSelectedProject={setSelectedProjectId}
        />
        {viewMode === "Create" ? (
          <CreateProject
            onChangeView={handleViewMode}
            onSave={saveProjectData}
          />
        ) : viewMode === "Manage" ? (
          <ProjectManage
            selectedProjectData={projectData.find(data => data.projectId === selectedProjectId)}
            onUpdateProject={updateProjectData}
            onDeleteProject={deleteProjectData}
          />
        ) : (
          <EmptyProject onChangeView={handleViewMode}/>
        )}
      </main>
    </>
  );
}


export default App;




