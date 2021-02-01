import home from './home.controllers.js';
import post from './post.controller.js';
import notFound from './notFound.controllers.js'

const pages = {
    home: home,
    post: post,
    notFound: notFound
}

export {pages};