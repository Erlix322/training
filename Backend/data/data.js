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
        content:"Awww man!!"
    },
    {
        id:2,
        title:"Learning",
        content:"Roasted!!"
    },
    {
        id:3,
        title:"Shopping",
        content:"Yeah, a new game!"
    },
    {
        id:4,
        title:"Wasting",
        content:"I think I'm totally wasted!!"
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