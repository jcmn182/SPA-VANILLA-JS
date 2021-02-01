import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

import {router} from './router/index.route';

router(window.location.hash)

window.addEventListener('hashchange', () =>{
    router(window.location.hash)
})