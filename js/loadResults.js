window.onload = () => {
  let results = {
    element: document.getElementById("main-results"),
    resetResults: () => {
      this.element.innerHTML = "";
    },
    addResult: (htmlElement) => {
      this.element.append(htmlElement);
    },
  };
};
