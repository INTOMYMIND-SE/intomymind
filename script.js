

  const targetNum1 = 10130; 
  const targetNum2 = 8224; 
  let count1 = 1000; 
  let count2 = 1000; 
  const element1 = document.getElementById("testimonial-numbers1"); 
  const element2 = document.getElementById("testimonial-numbers2"); 

  const interval1 = setInterval(() => {
    count1 += 30; 
    element1.textContent = count1; 
    if (count1  >= targetNum1 ) {
      clearInterval(interval1);
    }
  }, 1); 

  const interval2 = setInterval(() => {
    count2 += 20; 
    element2.textContent = count2; 
    if (count2 >= targetNum2) {
      clearInterval(interval2);
    }
  }, 1); 



