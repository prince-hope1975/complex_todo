const bodyy = getClassNode("bodyy");
const main = getClassNode("body");
let array = [];
let category= "inbox";
export const changeCategory=(input)=>{
category = input
}
import { Project } from "./projects";
import {
  //   wrap,
  getClassNode,
  newNode,
  events,
  toggleClass,
  createSelect,
  deleteBtn,
  Btn,
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

const TodoItem = (heading = "", content = "", option = "low") => {
  const container = newNode("div");
  const contentContainer = newNode("div");
  const Div = newNode("div");
  const button = deleteBtn();
  const h3 = newNode("h3");
  const p = newNode("p");
  const select = createSelect();
  const editBtn = newNode("button");
  const Form = form("Edit Task",heading, content, option);
  editBtn.textContent = "edit";
  events(editBtn, () => {
    toggleClass(Form.modal, "visible");
  });
  events(Form.form,(e)=>{
e.preventDefault()
console.log(Form.getFormValues())
const [title, content, priority] = Form.getFormValues()
defaultConfig(title, content, priority)
console.log(Form.form);
 Form.modal.classList.toggle("visible");
  },"submit")
  events(
    select,
    (e) => {
      const val = e.target.value;
      const parent = e.target.parentNode.parentNode;
      parent.className = `mainContainer ${val}`;
    },
    "change"
  );

  button.addEventListener("click", (e) => {
    let arr = array.filter((item, index) => {
      return (
        index != Number(e.target.parentElement.parentElement.parentElement.id)
      );
    });
    array = arr;
    addToList();
  });

  const defaultConfig = ((heading, content, option) => {
    h3.textContent = heading;
    p.textContent = content;
    select.value = option;
  })
  defaultConfig(heading, content, option);
  const editHeading = (val) => {
    h3.textContent = val;
  };
  const editContent = (val) => {
    p.textContent = val;
  };

  // TODO update component
  const card = (() => {
    container.appendChild(h3);
    contentContainer.appendChild(p);

    container.appendChild(contentContainer);
    container.appendChild(select);
    container.appendChild(editBtn);
    contentContainer.appendChild(button);
    Div.appendChild(container);
    main.appendChild(Form.modal);

    Div.classList.add("mainContainer", option);
    return Div;
  })();
  const changePriority = () => {
    // TODO
    null;
  };

  return {
    card,
    editContent,
    editHeading,
    changePriority,
  };
};

const Form = form();
const addItems = (() => {
  const addBtn = Btn()
  events(addBtn, (e) => {
    e.preventDefault();
    toggleClass(Form.modal, "visible");
  });
  bodyy.appendChild(addBtn);
  return {addBtn}
})();

events(
  Form.form,
  (e) => {
    e.preventDefault();
    const [title, content, options] = Form.getFormValues();
    if (title && content && options) {
      const newProject = TodoItem(title, content, options);
      addToList(newProject,category);
    }
    e.target.parentElement.classList.toggle("visible");
    Form.clearInput()
  },
  "submit"
);
const reducer = (val) => {
  switch (val) {
    case "TODAY":
  }
};
const newProject = TodoItem(
  "Hello World",
  "I'm going to cheange the world some day"
);
bodyy.appendChild(newProject.card);

const oldProject = TodoItem("Hello World", "I going to cheange", "high");

bodyy.appendChild(oldProject.card);

// console.log(array);
array = [...array, oldProject, newProject];

const addToList = ((arr, category) => {
  
  arr?array=[...array, arr]:array=array
  bodyy.innerHTML=" "
  array.forEach((item, index) => {
    item.category =category
    bodyy.appendChild(item.card);
    item.card.id = index;
    console.log(arr);
  });
  bodyy.appendChild(addItems.addBtn)
});
const filterList =(arr)=>{
  bodyy.innerHTML = " ";
  arr.forEach((item, index) => {
    bodyy.appendChild(item.card);
    item.card.id = index;
    console.log(item.card.id);
  });
  bodyy.appendChild(addItems.addBtn);
}


Project()
export {array,addToList, filterList}
