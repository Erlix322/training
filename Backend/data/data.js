var User = [
    {
        id:1,
        first:"Eric",
        last :"Brandt", 
    },
    {
        id:2,
        first:"Felix",
        last:"Brandt"
    }
]

var Todo = [
    {
        id:1,
        title:"Homework",
        content:"I've got a lot todo today!"
    }
];

function addTodo(old,newtd){
    if(newtd != null)
    return [].concat(old,newtd);
    else return old;
}

exports.addTodo = addTodo;
exports.user = User;
exports.todo = Todo;