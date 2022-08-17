const projectTitle = "Counter";
// the timer reference
let timer;
// the initial index
let i = 0;
function printTitle() {
// printing the characters using the index
document.getElementById("title").innerHTML += (projectTitle[i]);
// increase the index
i++;
// if the index reaches the maximum text length, stop the timer
if(i >= projectTitle.length) 
    clearInterval(timer);
}
// pass in function, instead of calling it
timer = setInterval(printTitle, 200);

////////////////////

function showImage (){
const image = document.createElement('img');
image.src  = 'taxy.gif'
image.width = 400
image.height = 290
document.querySelector('.title').appendChild(image)
}
setTimeout(showImage, 2000)

/////////////////////
let counting;

function start()
{   
    // Start button disabled after clicked
    let disableButton = document.getElementById("start");
    disableButton.disabled = true; 
  // variables for our seconds, minutes, and hours
  let counter_s = 1;
  let counter_m = 0;
  let counter_h = 0;
    s = document.getElementById("seconds");
    m = document.getElementById("minutes");
    h = document.getElementById("hours");

    counting = setInterval(
        function(){
            if(counter_s == 60)
            {
                // When counter reaches 60, start from 0 again
                counter_s = 0; 
                counter_m++;
                // If counter_s is 60, print 1 minute in counter_m
                m.innerHTML = counter_m;  

                if(counter_m == 60)
                {
                    counter_m = 0;
                    counter_h++;
                    h.innerHTML = counter_h;
                }
                if (counter_h == 24) 
                {
                    counter_h = 0;
                }
            }

            s.innerHTML = counter_s;
            counter_s++;
        }
        ,1000);

}

function reset(){ 
    // Function to reset the counter
    let enableButton = document.getElementById("start");
    // Reactivating the button to start the counter again
    enableButton.disabled = false; 

        clearInterval(counting);
        document.getElementById('seconds').innerHTML = 0;
        document.getElementById('minutes').innerHTML = 0;
        

}
