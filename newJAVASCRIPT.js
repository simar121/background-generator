const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

const double=[];
const newArray=array.forEach((num)=>{
  num.username=num.username.concat("!");
  double.push(num.username);
  
});

double.forEach((item)=>{
console.log(item);
});

const newmap=array.map((num)=>{
  return num.username.concat("?");

});

console.log(newmap.map(num=> {return num}));
const newarray=array.filter(num=>{return num.team==="red"});
newarray.forEach((net)=>{console.log(net)});