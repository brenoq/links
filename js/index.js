function toggleDark() {
  let x = document.getElementById("back");
  let t = document.getElementById("toggleLabel")
  console.log(x.className);
  if (x.className == "light") {
    x.className = "dark";
    t.innerHTML = "Light"
  } else if (x.className == "dark") {
    x.className = "light";
    t.innerHTML = "Dark"
  }
} 