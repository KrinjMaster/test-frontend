window.onload = () => {
  const addButton = document.getElementById("add-interest");
  const remButton = document.getElementById("remove-interest");

  addButton.addEventListener("click", (e) => {
    e.preventDefault();
    const div = document.getElementById("interest-container");
    div.insertAdjacentHTML(
      "beforeend",
      `
            <input
              type="text"
              id="interest"
              test-id="interest"
              class="border-2 rounded-lg bg-gray-100 w-64 focus:ring-blue-300 focus:border-blue-300 py-0.5 px-1.5"
            />
      `,
    );
    console.log(document.querySelectorAll("#interest"));
  });

  remButton.addEventListener("click", (e) => {
    e.preventDefault();
    const interests = document.querySelectorAll("#interest");

    if (interests && interests.length > 0) {
      interests[interests.length - 1].remove();
    }
  });
};
