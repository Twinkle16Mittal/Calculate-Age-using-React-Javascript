import React from 'react';
// class Car extends React.Component
// {
//     constructor(props)
//     {
//         super(props);
//     }
//     render()
//     {
//      return (
//         <div>
//         <h1>{this.props.brand}</h1>
//         <input type='text' />
//      </div>
//      );
//     }
// }
// class Hello extends React.Component{
//     constructor(props)
//     {
//         super(props);
//         this.state={
//             color:"pink",
//             name:"twinkle",
//             company:"innovaccer"
//         };
//     }
//     changecolor = ()=>{
//         this.setState({color:"blue"});
//     }
//     render()
//     {
//         return (
//         <div>
//             {/* <h1>This is {this.state.color} of color.The name of girl is {this.state.name}.She working in {this.state.company}</h1> */}
//             {/* <Car brand="new2" /> */}
//             {/* <button onClick={this.changecolor}>Submit</button> */}
           
//         </div>
//         );
//     }
// }
function Agecal()
{
    const calculate = ()=>
    {
       var date = document.getElementById("dobid").value; 
       var today= new Date();
       var todayyear=today.getFullYear();
       var todaymonth = today.getMonth();
       var dobyear=date.substring(6,10);
       var dobmon=date.substring(3,5);
       var dobdate = date.substring(0,2);
       var todaydate = today.getDate();
       var diff = Math.abs(todaymonth-dobmon);
       //alert(todaymonth);
       //alert(dobmon);
       //alert(diff);
       if(diff===0)
       alert(todayyear-dobyear);
       else
       {
         alert(todaydate);
         var year=todayyear-dobyear-1;
         var month=12-dobmon+todaymonth;
         alert(year + "years"+ month+ " month:");
       }
       document.getElementById("dobid").value="";

    };
         return(
           <div>
               <input type="text" id ="dobid"></input>
               <button onClick={()=>calculate()}>Age Calculate</button>
           </div>
         );
    
}

export default Agecal;
