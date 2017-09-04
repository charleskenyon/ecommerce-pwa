// import curry from 'ramda/src/curry';
// import compose from 'ramda/src/compose';
import renderPlp from './plp';

import '../styles/main.scss';

document.addEventListener('click', () => {
  System.import('./testImport').then((module) => {
    console.log(module.default());
  });
});

renderPlp();

// create router.js script that uses System.import() for page specific scripts  

// development with node & express - page 160 for subdomain (eg admin.dianawilsonarcana.co.uk)