// let url = "https://v2.jokeapi.dev/joke/Any";

// fetch(url)
// .then((Response) => {
//   console.log("Respond success");
//   Response.json().then((data) => {
//     console.log(data);
//   })
// })
// .catch((err) => {
//   console.log("Error", err);
// })


let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  console.log("Click");
})

let url = "https;//catfact.ninja/fact";

async function getFacts() {
  try {
    let res = await axios.get(url);
    return res.data.fact;
  } catch (err) {
    console.log("Error", err);
    return "No fact found.";
  }
}