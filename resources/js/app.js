/**
 * Materialize inicializations
 */

document.addEventListener('DOMContentLoaded', function() {
    var selectElems = document.querySelectorAll('select');
    M.FormSelect.init(selectElems);

    var dropdownElems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(dropdownElems);

    var textareaElems = document.querySelectorAll('textarea[data-length]');
    M.CharacterCounter.init(textareaElems);

    var modalElems = document.querySelectorAll('.modal');
    M.Modal.init(modalElems);
});

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('async-helper', require('./components/AsyncHelperComponent.vue').default);
Vue.component('reaction-list', require('./components/ReactionListComponent.vue').default);
Vue.component('comment-list', require('./components/CommentListComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
