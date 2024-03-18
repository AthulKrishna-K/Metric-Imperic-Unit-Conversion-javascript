

document.getElementById("clicks").addEventListener("click",function(){
    var num=document.getElementById("para").value
    var meter=(num*0.3048).toFixed(3);
    var feet=(num*3.28084).toFixed(3);
    var gallon = (0.264172 *num).toFixed(3);
    var liter = (num * 3.785412).toFixed(3);
    var pound = (num*2.2).toFixed(3);
    var kg = (num / 2.2).toFixed(3);
    
    document.getElementById("para1").textContent=`${num}meter=${feet} feet | ${num} feet = ${meter} meter`

    document.getElementById("para2").textContent=`${num}liters=${gallon} gallon| ${num} gallon = ${liter} liters`

    document.getElementById("para3").textContent=`${num}Kilos=${pound} pound | ${num} pound = ${kg} kg`
    
})
