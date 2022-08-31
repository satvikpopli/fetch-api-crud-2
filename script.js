"use strict";

const url = "https://630a8ccaf280658a59d0126b.mockapi.io/posts";

let saveButton = document.querySelector(".save");

function cleanPostsArea() {
    postsArea.innerHTML = "";
}

// DISPLAY POSTS
const postsArea = document.querySelector(".posts");
const template = document.querySelector("template");
const form = document.querySelector("form");

async function display() {
    cleanPostsArea();
    const response = await fetch(url);
    const allPosts = await response.json();
    allPosts.forEach(post => {
        const clone = template.content.cloneNode(true);
        const card = clone.querySelector(".card");
        card.querySelector(".card-title").textContent = post.title;
        card.querySelector(".card-text").textContent = post.content;
        card.id = post.id;
        postsArea.prepend(clone);

        const deleteBtn = card.querySelector(".delete");
        deleteBtn.addEventListener("click", deletePost.bind(card));

        const editBtn = card.querySelector(".edit");
        editBtn.addEventListener("click", editPost.bind(card));
    });
}

display();




// ADD POSTS
async function addPost(title, content) {

}

const addPostButton = document.querySelector(".submit");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
addPostButton.addEventListener("click", async (e) => {
    e.preventDefault();
    const title = titleInput.value;
    const content = contentInput.value;
    const newPost = {
        'title': `${title}`,
        'content': `${content}`
    }
    await fetch(url,
        {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    display();
    titleInput.value = "";
    contentInput.value = "";
})


// DELETE POSTS
async function deletePost() {
    await fetch(`${url}/${this.id}`, {
        method: 'DELETE'
    });
    display();
}


// EDIT POSTS
async function editPost() {
    const anchor = document.querySelector("#anchor")
    const title = this.querySelector(".card-title").textContent;
    const content = this.querySelector(".card-text").textContent;
    titleInput.value = title;
    contentInput.value = content;
    let saveButtonNew = saveButton.cloneNode(true);
    saveButton.remove();
    saveButton = saveButtonNew;  // clone and replace to get rid of all previous eventListeners
    addPostButton.style.display = "none";
    form.appendChild(saveButton);
    saveButton.style.display = "inline";
    anchor.scrollIntoView();
    saveButton.addEventListener("click", async (e) => {
        e.preventDefault();
        const title = titleInput.value;
        const content = contentInput.value;
        const newPost = {
            'title': `${title}`,
            'content': `${content}`
        }
        await fetch(`${url}/${this.id}`,
            {
                method: 'PUT',
                body: JSON.stringify(newPost),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        titleInput.value = "";
        contentInput.value = "";
        addPostButton.style.display = "inline";
        saveButton.style.display = "none";
        display();
    })
}