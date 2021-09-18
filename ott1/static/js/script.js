// let a=10;
// // a = 20;
// let b=20.5;
// c=5;  
// console.log(a);
// // alert(a);
// // document.write(a);
// if(a>b){
//     console.log("Value of a and b is 10");
//     alert("a is greater");
// }
// else if(a<b){
//     // alert("a is less than b");
//     // console.log("False")
// }
// else{
//     alert("False");
// }

// // switch(a){
// //     case 10:
// //         alert("value of a is 10");
// //         break;
// //     case 20:
// //         alert("VAlue of a is 20");
// //         break;
// //     case 10:
// //         alert("10")
// //         break;
// //     default:
// //         alert("Defaut")
// // }

// // for loop

// // for(let i=1;i<=10;i++){
// //     // alert(i*10);
// //     console.log(i*10);
// // }

// //   
// let z=1;
// do{
// console.log(z*20)
// z++;
// }while(z<=10)

// // function addTwoNums(){
// //     lclNum1=2;
// //     lclNum2=5;
// //     console.log(lclNum1+lclNum2);
// // }
// function addTwoNums(a,b){
//     console.log(a*b)
// }

// addTwoNums(10,2);
// console.log(typeof(a))
// console.log(typeof(b))

// let d=['2','4','8']
// console.log(d);
// d[50]=6;
// // alert(d.length);
// console.log(d[6]);
// console.log(d);

// document.getElementById("txtbox1").value='10';

// function fun(){ 
//     let x = document.getElementById("textbox2").value;
//     let y =document.getElementById("textbox3").value;
//     if (x==""|| y==""){
//         alert('Enter the value in textbox')
//     }
//     else{
//         alert(x+y)
//     }
// }

// function up() {
//     var x = document.getElementById("txtbox4");
//     x.value = x.value.toUpperCase();
//   }

//   function down() {
//     var x = document.getElementById("txtbox5");
//     x.value = x.value.toUpperCase();
//   }

//   function change(){
//     var x = document.getElementById("txtbox6");
//     x.value = x.value.toUpperCase(); 
//   }

// $(document).ready(function(){
//     alert("Inside Query!");
//     });

//     alert("Outside Jquery!")

    //
    $(document).ready(function(){
        let num=$('#textbox3').val(10);
        // alert(num);

        // $('#button').click(function(){
        //     alert("Button clicked")
        // });
        // $('#textbox2').hide();
        });
        $('#btn1').click(function(){
            // alert("Button clicked")
            // $('#textbox2').toggle();
            // let a=$('#span').text();
            // let a=$('#span').html();

            // alert(a)
            // alert("clicked")
            $('#image').attr('src','static/media/images/harry2.png');
        });
        $('#btn2,#btn3').click(function(){
            // alert("Working");

            // $('#span').append('Namastee!! </br>');
            $('p').css({'color':'red','background-color':'black'})
        });