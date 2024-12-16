import DefaultImg from '../assets/no-projects.png';
import Button from "./Button.jsx";

export default function EmptyProject({ onChangeView }) {
  return (
    <div className="mt-24 text-center w-2/3">
      {/*<section className="float-left w-3/4 pt-60"> */}
      <img src={DefaultImg} alt="no-projects" className="w-16 h-16 mx-auto object-contain"/>
      {/*<div className="text-center">*/}
        <h2 className="text-2xl text-neutral-700 font-extrabold my-4">No Project Selected</h2>
        <p className="text-neutral-400 font-semibold">Select a project or get started with a new one</p>
        <Button
          onClick={() => onChangeView("Create")}
        >
          Create new project
        </Button>
      {/*</div>*/}
    {/*</section>*/}
    </div>
  );
}
