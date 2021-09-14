import {
  wrap,
  getClassNode,
  newNode,
  events,
  toggleClass,
  addClass,
  createSelect,
  deleteBtn,
  labelWrap,
  allAttribute
} from "./shorts";

export const form = ((header,heading = "", content = "", priority = "") => {
  const setValues=()=>{
    
  }
  const bodyy = getClassNode("body");
  // modal
  const modal = newNode("div");

  modal.classList.add("modal");
  modal.classList.add("visible");

  // Form
  const form = newNode("form");
  form.classList.add("form");
  const h3 = newNode("h3");
  const title = newNode("input");
  const textInput = newNode("input");
  const btnSave = newNode("input");
  const btnCancel = newNode("input");
  btnSave.setAttribute("type", "submit");
  btnCancel.setAttribute("type", "button");
  btnSave.value = "Add";
  btnCancel.value = "cancel";
  const option = createSelect();
  addClass(btnSave, "save");
  addClass(btnCancel, "remove");
  h3.textContent = header||"Add to todo";
  title.value = heading;
  textInput.value = content;
  const titleWrap = labelWrap(title, "Task title");
  const textInputWrap = labelWrap(textInput, "Task Input");
  const optionWrap = labelWrap(option,"Set Priority")
  const del = deleteBtn();
  // ! Remember to change this
  del.addEventListener("click",(e)=>{
    e.preventDefault();
        console.log(e.target)
        e.target.parentElement.parentElement.classList.toggle("visible");
  })
  let formValues = []
  events(form, ()=>{
   formValues = [title.value,textInput.value,option.value]
  },"submit")
  const getFormValues=()=>(formValues)

  //! The "wrap" function is used to append all the elements in the array to the main element
  wrap(form, [h3, titleWrap, textInputWrap, optionWrap, btnSave, btnCancel, del]);
  wrap(modal, [form]);
  wrap(bodyy, [modal]);
  return { modal, getFormValues, form };
});