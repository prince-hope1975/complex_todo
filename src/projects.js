import { Btn, getClassNode, newNode } from "./modules/shorts";
import { array, addToList, filterList , changeCategory} from "./index";
  const projectContainer = getClassNode("projects");
    const input = newNode("input");



const addbtn = (() => {
  const btn = newNode("input");
  btn.setAttribute("type", "submit");
  btn.value = " Add";
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    projctForm.classList.toggle("visible");
    projectContainer.appendChild(Project(input.value))
    input.value=""
  });
  return btn
})
const canelBtn = () => {
  const btn = newNode("input");
  btn.setAttribute("type", "button");
  btn.value = " Cancel";
   btn.addEventListener("click", () => {
     projctForm.classList.toggle("visible");
   });
  return btn;
};


const projctForm = (() => {

    const promptUser = newNode("form")
    input.setAttribute("type", "text")
    promptUser.appendChild(input)
    promptUser.appendChild(addbtn());

    promptUser.appendChild(canelBtn())
    return promptUser
})()

const ProjAddBtn = () => {
  const addProjectButton = Btn();

  addProjectButton.classList.remove("addBtn");
  addProjectButton.classList.add("projectsBtn");
  addProjectButton.addEventListener("click", ()=>{
    projctForm.classList.toggle("visible")
  })
  return addProjectButton
};
 
export const Project = (text) => {
  const addProjectButton = ProjAddBtn();
  const li = newNode("li");
  li.textContent = text;
  projectContainer.appendChild(addProjectButton);
  projectContainer.appendChild(projctForm);
  li.addEventListener("click", (e)=>{
    changeCategory(text)
    // const newArr = [array[1]]
    console.log(array)
addToList(null, text)
  })
  return li
};

