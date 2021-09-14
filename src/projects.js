import { Btn, getClassNode, newNode } from "./modules/shorts";

export const Project = (text) => {
  const projectContainer = getClassNode("projects");
  const addProjectButton = ProjAddBtn()
  const li = newNode("li");
  li.textContent = text;
  projectContainer.appendChild(addProjectButton);
};
const projctForm = () => {
    const promptUser = newNode("div")
};

const addbtn = () => {
  const btn = newNode("input");
  btn.setAttribute("type", "button");
  btn.classList.add("");
  btn.textContent = " Add";
};
const canelBtn = () => {
  const btn = newNode("input");
  btn.setAttribute("type", "button");
  btn.textContent = " Remove";
};
const ProjAddBtn = () => {
  const addProjectButton = Btn();

  addProjectButton.classList.remove("addBtn");
  addProjectButton.classList.add("projectsBtn");
  return addProjectButton
};
