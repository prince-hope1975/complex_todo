export const getClassNode = (classItem) => {
  const item = document.querySelector(`.${classItem}`);
  return item;
};
export const deleteBtn =()=>{
const button =newNode("input");

   button.innerHTML = "&times;";
   button.classList.add("deleteBtn");
  return button
}
export const wrap = (element, array) => {
  array.forEach((item) => {
    element.appendChild(item);
  });
};
export const labelWrap =(element,title)=>{
  const div = newNode("div")
  const label = newNode("label")
  label.textContent = title
  wrap(div,[label,element])
  return div
}
export const newNode = (item) => {
  return document.createElement(`${item}`);
};
export const addClass = (element, className) => {
  element.classList.add = className;
};
export const toggleClass = (element, className) => {
  element.classList.toggle(className);
};
export const events = (element, funct, eventListener = "click") => {
  element.addEventListener(eventListener, funct);
};
export const allAttribute =(attribute, array,set=true)=>{
  array.forEach((item)=>{
    item.setAttribute(attribute,set)
  })
}


export const createSelect = () => {
  const select = newNode("select");
  // select.id = "hmm";
  const arr = ["low", "high", "urgent"];
  arr.forEach((item) => {
    const option = newNode("option");
    option.value = item;
    option.textContent = item;
    select.appendChild(option);
  });
  return select;
};
