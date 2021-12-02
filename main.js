//               تمرین اول- حذف حروف تکراری از متن (بدون در نظر گرفتن فاصله)  

// function Delete (text) {
//   let array=[]
//   let answer
//   array=text.split("")
//      for ( let i in array) {
//       if ( array[i]==" " && array[--i]==array[i+2] ){
//         delete (array[i+2])
//      }
//     } answer=array.join("")
//     let array2=answer.split("")
//     for ( let j in array2) {
//       if ( array2[j]==array2[++j]){
//         delete (array2[j])
//       }
//     } answer=array2.join("")

//   console.log(answer) 
//    }
   
//    Delete("helloo omid: How are emad") 



//           تمرین دوم- تقسیم آرایه به آرایه‌هایی به طول عدد ورودی 

//  function chunkify (array, number) {
//   let result=[]
//   let array2=[]
//   let counter= array.length-1
//   if (array.length<number) {
//     return array
//   }
//   else 
//   {
//     for (let i in array) {
//       array2.push(array[i])
//       if (Number(i)==counter || array2.length==number) {
//         result.push (array2)
//         array2=[]
//       }
//     }
//   } return result
// }


// const square= {
//     weidth:12,
//     heigth:20,
//      fun1:function area() {
//         return this.weidth *this.heigth
//      },
//      fun2: function centerpoint() {
//              return `(this.weidth/2)` + `(this.heigth/2)`
//      }
 
// }    

// console.log (square.fun2())

function noprime (impotdigit)

const type= {
        

}




function log (type,masseage) {
     switch (type) {
             case INFO: 
             console.log("programm work very good"); break;
             case Error:
                console.log("we have a problem")
     }
}



       
        
 