const url = "https://630a8ccaf280658a59d0126b.mockapi.io/posts";

let saveButton = document.querySelector(".save");


// DISPLAY POSTS
const postsArea = document.querySelector(".posts");
const template = document.querySelector("template");
const form = document.querySelector("form");


























// async function fetchPosts() {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
// }

// const template = document.querySelector("template");


// // GET POSTS

// const postsArea = document.querySelector(".posts");

// async function displayPosts() {
//     const allPosts = await fetchPosts();
//     allPosts.forEach(post => {
//         const card = template.content.querySelector(".card").cloneNode(true);
//         card.querySelector(".card-title").textContent = post.title;
//         card.querySelector(".card-text").textContent = post.content;
//         card.id = post.id;
//         const deletebtn = card.querySelector(".delete");
//         deletebtn.addEventListener("click", (e) => {
//             deletePost(e.target.closest(".card").id);
//             e.target.closest(".card").remove();
//         });
//         postsArea.appendChild(card);
//     })
// }

// displayPosts();

// // ADD POSTS
// const submitButton = document.querySelector(".submit");
// submitButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     const title = document.querySelector("#title").value;
//     const content = document.querySelector("#content").value;
//     const newPost = { "title": `${title}`, "content": `${content}` };
//     fetch(url, {
//         method: "POST",
//         body: JSON.stringify(newPost),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     })
//     displayPosts();
// })

// // DELETE POSTS
// async function deletePost(id) {
//     await fetch(`${url}/${id}`, {
//         method: "DELETE"
//     })
// }


// // EDIT POSTS
// // editButton.addEventListener("click", (e) => {
// //     e.preventDefault();
// //     const title = document.querySelector("#title").value;
// //     const content = document.querySelector("#content").value;
// //     const newPost = { "title": `${title}`, "content": `${content}` };
// //     fetch(url, {
// //         method: "PUT",
// //         body: JSON.stringify(newPost),
// //         headers: {
// //             "Content-Type": "application/json"
// //         }
// //     })
// //     displayPosts();
// // })


