import view from '../views/post.html'

const getPost = async () => {
   const response = await fetch ('https://jsonplaceholder.typicode.com/posts');
   return await response.json()
}

export default async () => {
    const divElement = document.createElement('div')
    divElement.innerHTML = view;
    const postElement = divElement.querySelector('#post');
    let total = divElement.querySelector('#total');

    const post = await getPost();
    total.innerHTML = post.length;

    post.forEach(post => {
        postElement.innerHTML += `
        <li class="list-group-item border-primary bg-dark text-white">
        <h5>${post.title}</h5>
        <p>${post.body}</p>
        </li>
        `
    });
    
    return divElement
}
