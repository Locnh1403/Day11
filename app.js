// Bài 1
// const actBtn = document.querySelectorAll(".btn");
// const actBox = document.getElementById("box");
// actBtn.forEach(
//   (a) =>
//     (a.onclick = () => {
//       i = a.getAttribute("id");
//       if (i === "del-btn") {
//         actBox.style.display = "none";
//       }
//       if (i === "col-btn") {
//         actBox.style.background = "red";
//       }
//       if (i === "siz-btn") {
//         actBox.style.width = "100%";
//         actBox.style.height = "100vh";
//       } else {
//         actBox.style.borderRadius = "50%";
//       }
//     })
// );

// ******************************************
// Bài 2
const actBtn = document.querySelectorAll(".btn");
const actText = document.getElementById("text");
actBtn.forEach(
  (a) =>
    (a.onclick = () => {
      i = a.getAttribute("id");
      if (i === "col-btn") {
        actText.style.color = "red";
      } else {
        actText.innerHTML = "Tecnology School";
      }
    })
);
