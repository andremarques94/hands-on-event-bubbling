window.addEventListener("load", () => {
  const grandParent = document.querySelector("#grandparent");
  const parent = document.querySelector("#parent");
  const child = document.querySelector("#child");

  grandParent.addEventListener("click", (e) => {
    //e.stopPropagation();
    window.alert("GrandParent Clicked");
  });

  parent.addEventListener("click", (e) => {
    //e.stopPropagation();
    window.alert("PArent Clicked");
  });

  child.addEventListener("click", (e) => {
    window.alert("Child Clicked");
  });
});
