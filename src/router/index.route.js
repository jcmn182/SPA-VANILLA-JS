 import {pages} from '../controllers/index.js'
 let content = document.getElementById('root');
 
 const router = async (route) => {
     content.innerHTML = '';
    switch(route){
        case '#/':
           return content.appendChild(pages.home());
        case '#/products':
            return content.appendChild(await pages.post());
        case '#/post':
            return content.appendChild(pages.notFound()); 
        default:
            return content.appendChild(pages.notFound());         
    }
}

export {router};