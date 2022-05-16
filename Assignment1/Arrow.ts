
/*let array1:string[]=['Tom','Ivan','Jerry'];
export interface MyObject{name:string;length:number;}//using generic array type,Array<elementType>
let array2:MyObject[];
array2=array1.map(v=>{return{name:v};}) as MyObject[];*/

let StringArray = ['Tom', 'Ivan', 'Jerry']

 var arrowFunction = (StringArray)=>{
    let resArray=[];
     StringArray.map((ele)=>{
        let object={
            name:"",
            length:0
        };
        object.name=ele;
        object.length= ele.length;
        resArray.push(object);
     })
     return resArray;
 }
 console.log(arrowFunction(StringArray));

//const getArrowvalue= (m) =>10*m; //arrow function