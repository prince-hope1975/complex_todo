import {
//   wrap,
  getClassNode,
  newNode,
  events,
  toggleClass,
//   addClass,
  createSelect,
//   changVisibility,
  deleteBtn,
//   labelWrap
} from "./modules/shorts";
import {form} from "./modules/components"
import "../src/style/style.css";
const TodoObject = (title, description, dueDate, priority, notes) => {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
  this.checklist = false;
};
const addTask = () => {};

const TodoItem = () => {
  const container = newNode("div");
  const contentContainer = newNode("div");
  const Div = newNode("div");
  const button = deleteBtn();
  const h3 = newNode("h3");
  const p = newNode("p");
  const select = createSelect();
  events(select,(e)=>{
      const val = e.target.value
    const parent = e.target.parentNode.parentNode
     parent.className = `mainContainer ${val}`
      
  },"change")

  events(button, () => toggleClass(container, "visible"));

  const defaultConfig = (heading, content) => {
    h3.textContent = heading;
    p.textContent = content;
  };
  const editHeading = (val) => {
    h3.textContent = val;
  };
  const editContent = (val) => {
    p.textContent = val;
  };

  // TODO update component
  const structureItems = () => {
    container.appendChild(h3);
    contentContainer.appendChild(p);

    container.appendChild(contentContainer);
    container.appendChild(select);
    contentContainer.appendChild(button);
    Div.appendChild(container);

    Div.classList.add("mainContainer");
    return Div;
  };
  const changePriority = () => {
    // TODO
    null;
  };

  return {
    structureItems,
    editContent,
    editHeading,
    changePriority,
  };
};

const bodyy = getClassNode("bodyy");
const addItems = (() => {
  const addBtn = newNode("button");
  addBtn.classList.add("addBtn");
  addBtn.innerHTML = "&plus;";
events(addBtn, (e)=>{
    e.preventDefault();
    toggleClass(form.modal, "visible")} );
  bodyy.appendChild(addBtn);
})();
const newProject = TodoItem();
newProject.editHeading("Hello World");
newProject.editContent("I'm going to cheange the world some day");
bodyy.appendChild(newProject.structureItems());

const oldProject = TodoItem();

oldProject.editHeading("Hello World");
oldProject.editContent("I going to cheange");
bodyy.appendChild(oldProject.structureItems());
