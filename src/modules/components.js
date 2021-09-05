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

export const form = ((heading = "", content = "", priority = "") => {
  const bodyy = getClassNode("body");
  // modal
  const modal = newNode("div");
  modal.classList.add("modal");
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
  h3.textContent = "Add to todo";
  title.value = heading;
  textInput.value = content;
  const titleWrap = labelWrap(title, "Task title");
  const textInputWrap = labelWrap(textInput, "Task Input");
  const optionWrap = labelWrap(option,"Set Priority")
  const del = deleteBtn();
  // ! Remember to change this
  // del.addEventListener("click",(e)=>{
  //       console.log(e.target.value)
  // })

  //! The "wrap" function is used to append all the elements in the array to the main element
  wrap(form, [h3, titleWrap, textInputWrap, optionWrap, btnSave, btnCancel, del]);
  wrap(modal, [form]);
  wrap(bodyy, [modal]);
  return { modal };
})();