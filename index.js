
const allSeat = document.getElementsByClassName("seat");


let count = 0;

for(const seat of allSeat){
    seat.addEventListener("click" , function(e){
      count = count + 1 ;
      console.log(count);
      const word = e.target.parentNode.childNodes[3].innerText ;
      const price = document.querySelector("h3").innerText;

      const selectContainer = document.getElementById("select-btn-container");
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.innerText = word;
      const p2 = document.createElement("p");
      p2.innerText = price ;

      li.appendChild(p);
      li.append(p2);
      selectContainer.appendChild(li);
      
      const totalPrice = document.getElementById("total-price").innerText;
      const convertTotalCost = parseInt(totalPrice);
     const sum = convertTotalCost + parseInt(price);


   setInnerText("total-price" , sum);
    setInnerText("seat-count" , count);

    });

   
}

const btn = document.getElementById("apply-btn");
btn.addEventListener("click" , function() {
  
  const cuponElement = document.getElementById("input-field").value;
 
})


function setInnerText (id , value ){
    document.getElementById(id).innerText = value;
   
}