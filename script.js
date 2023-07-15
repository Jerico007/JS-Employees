/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  let ans = arr.map((val,index) => {
    if(val.profession === "developer")
    {
      return arr[index];
    }
  })

  //Filter process
  ans = ans.filter((val,index) => {
    if(val != undefined)
    {
      return ans[index];
    }
  })
  console.log(ans);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  let ans = []
  arr.forEach((val,index)=>{
     if(val.profession === "developer")
     {
      ans.push(arr[index]);
     }
  })

  console.log(ans);
}

function addData() {
  //Write your code here, just console.log
  arr.push({id:4,name:"susan",age:"20",profession:"intern"});
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr.forEach((val ,index)=>{
    if(val.profession === "admin")
    {
      arr.splice(index ,1);
    }
  })
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newarr = [
    { id: 4, name: "jhones", age: "19", profession: "web-developer" },
    { id: 5, name: "jeri", age: "22", profession: "android-developer" },
    { id: 6, name: "kraken", age: "20", profession: "manager" },
  ];

  arr = arr.concat(newarr);
  console.log(arr);
}
