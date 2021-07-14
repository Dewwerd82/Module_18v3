import '../source/style.css';
import '../source/style.scss';
import moment from 'moment';

const getTools = () =>
    import ('./api');


console.log('Im from source!');

const func = () =>
    console.log('this is a function');

func();

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    getTools().then(({ fetchTodos }) => {
        fetchTodos().then(resp => console.log(resp))
    })
})