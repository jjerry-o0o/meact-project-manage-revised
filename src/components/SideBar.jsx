import Button from "./Button.jsx";

export default function SideBar({ onChangeView, projectData, selectedId, onSelectedProject }) {
  function selectedTitle(projectId) {
    onSelectedProject(projectId);
    onChangeView("Manage");
  }
  return (
    <>
      <aside className="float-left bg-black rounded-tr-lg w-2/12 md:w-72 pl-8 mt-8">
        <h2 className="text-white text-lg font-semibold mt-10 pb-8">YOUR PROJECTS</h2>
        <div>
          <Button
            // onClick={() => onChangeView("Create")}
          >
            + Add Project
          </Button>
        </div>

        <ul className="flex flex-col space-y-4 mt-8 w-5/6">
          {projectData.map(({projectId, title}) =>
            <li key={projectId}
               className={projectId === selectedId ? "text-neutral-400 pl-3 bg-neutral-900" : "text-neutral-400 pl-3"}
               onClick={() => selectedTitle(projectId)}
            >
              {title}
            </li>
          )}
        </ul>
      </aside>
    </>
  );
}
