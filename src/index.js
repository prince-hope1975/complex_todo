const bodyy = getClassNode("bodyy");
const main = getClassNode("body");

import {
  //   wrap,
  getClassNode,
  newNode,
  events,
  toggleClass,
  createSelect,
  deleteBtn,
  wrap,
} from "./modules/shorts";
import { form } from "./modules/components";
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

const TodoItem = (heading = "", content = "", option) => {
  const container = newNode("div");
  const contentContainer = newNode("div");
  const Div = newNode("div");
  const button = deleteBtn();
  const h3 = newNode("h3");
  const p = newNode("p");
  const select = createSelect();
  const editBtn = newNode("button");
  const Form = form("Edit Task");
  editBtn.textContent = "edit";
  events(editBtn, () => {
    toggleClass(Form.modal, "visible");
  });
  events(
    select,
    (e) => {
      const val = e.target.value;
      const parent = e.target.parentNode.parentNode;
      parent.className = `mainContainer ${val}`;
    },
    "change"
  );

  // events(button, () => toggleClass(container, "visible"));
  button.addEventListener("click", (e) => {
    console.log(e.target);
    e.target.parentElement.parentElement.parentElement.classList.add(
      "visible"
    );
  });

  const defaultConfig = ((heading, content, option) => {
    h3.textContent = heading;
    p.textContent = content;
    select.value = option;
  })(heading, content, option);
  const editHeading = (val) => {
    h3.textContent = val;
  };
  const editContent = (val) => {
    p.textContent = val;
  };

  // TODO update component
  const structureItems = (() => {
    container.appendChild(h3);
    contentContainer.appendChild(p);

    container.appendChild(contentContainer);
    container.appendChild(select);
    container.appendChild(editBtn);
    contentContainer.appendChild(button);
    Div.appendChild(container);
    main.appendChild(Form.modal);

    Div.classList.add("mainContainer");
    return Div;
  })();
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

const Form = form();
const addItems = (() => {
  const addBtn = newNode("button");
  addBtn.classList.add("addBtn");
  addBtn.innerHTML = "&plus;";

  events(addBtn, (e) => {
    e.preventDefault();
    toggleClass(Form.modal, "visible");
  });
  bodyy.appendChild(addBtn);
})();

events(
  Form.form,
  (e) => {
    e.preventDefault();
    const [title, content, options] = Form.getFormValues();
    if (title && content && options) {
      const newProject = TodoItem(title, content, options);
      console.log(newProject.structureItems);
      bodyy.appendChild(newProject.structureItems);
    }
    e.target.parentElement.classList.toggle("visible");
  },
  "submit"
);
const reducer =(val) =>{
  switch (val){
    case "TODAY": 
      
  }
}
const newProject = TodoItem(
  "Hello World",
  "I'm going to cheange the world some day"
);
bodyy.appendChild(newProject.structureItems);

const oldProject = TodoItem("Hello World", "I going to cheange", "low");

bodyy.appendChild(oldProject.structureItems);

const addToList=()=>{
  
}
