var path = [["1_4","2_4","2_3","2_2"],
            ["3_2","4_2", "4_3", "4_4"],
            ["5_4","6_4","6_3","6_2","6_1"],
            ["7_1","8_1", "8_2", "8_3","8_4","8_5","8_6"],
            ["9_6","10_6", "10_5", "10_4"],
            ["10_3","11_3"]];

var steps = ["H_1","H_2","H_3","H_4","H_5","H_6","H_7","H_8","H_9","H_10","H_11"];

var promptInput = ["Top","Top-Left","Top-Right"];
var wrongCounter = 0;

//// ========== Hiding all the divs except for the first stage of the game ========== ////
var hideSteps = function()
{
    for (i=0; i<steps.length;i++)
    {
        var hideDiv = document.getElementById(steps[i]);  
        hideDiv.style.opacity = "0.0";
    }    
}
//// ================================================================================ ////

//// ========== showing all the divs except for the first stage of the game ========== ////
var showSteps = function(i)
{
    var showDiv = document.getElementById(steps[i]);  
    showDiv.style.opacity = "1.0";       
}
//// ================================================================================ ////

//// ==================== Make the image visible ===================== ////
var displayImage = function(id)
{    
    var imageD = document.getElementById(id);
    imageD.style.opacity = "1.0"; 
}
//// ============================================================================= ////

// ==================== Make the image invisible ===================== ////
var hideImage = function(id)
{    
    var imageH = document.getElementById(id);    
    imageH.style.opacity = "0.0";       
}
//// ============================================================================= ////

////// ==================== Change the color of the path ===================== ////
var pathColor = function(i)
{
    for (j=0;j<path[i].length;j++)
        {
            var pathTaken = document.getElementById(path[i][j]);
            //pathTaken.style.backgroundColor = "grey";
            ///////// Change the path image taken by the object to the next step/////////
            pathTaken.style.backgroundImage = "url('./images/Road.jpg')";                                
        }                
}
//// ================================================================================ ////

///////////////////// Stages using function/////////////////////////////////////////////////
var stage1 = function()
{
    alert("Here is the prince who wants to reach to his princess.");
    var reply = prompt("But he needs your help to reach her. Would you help him to find his way through? Yes or No");
    {
        var input = prompt("You want to go Top,Top-Left or Top-Right");   
        while(!(input == promptInput[1])) 
            { 
            alert("Sorry you have made a wrong choice");
            var input = prompt("You want to go Top,Top-Left or Top-Right");
            // wrongCounter++;
            // console.log(wrongCounter);         
            }
            showSteps(0);
            showSteps(1);
            hideImage("P_1");        
            pathColor(0);  
            displayImage("P_2"); 
            setTimeout(stage2, 1000);
            
    }
}


var stage2 = function()
{
    {
        var input = prompt("You want to go Top,Top-Left or Top-Right");   
        while(!(input == promptInput[2])) 
            { 
            alert("Sorry you have made a wrong choice");
            var input = prompt("You want to go Top,Top-Left or Top-Right");
            // wrongCounter++; 
            // console.log(wrongCounter);         
            }
            showSteps(2);
            showSteps(3);
            hideImage("P_2");        
            pathColor(1);  
            displayImage("P_3");
            setTimeout(stage3, 1000);
             
    }
}

var stage3 = function()
{
    
    {
        var input = prompt("You want to go Top,Top-Left or Top-Right");   
        while(!(input == promptInput[1])) 
            { 
            alert("Sorry you have made a wrong choice");
            // wrongCounter++; 
            // console.log(wrongCounter);         
            }
            showSteps(4);
            showSteps(5);
            hideImage("P_3");        
            pathColor(2);  
            displayImage("P_4"); 
            setTimeout(stage4, 1000);
    }
}

var stage4 = function()
{
    
    {
        var input = prompt("You want to go Top,Top-Left or Top-Right");   
        while(!(input == promptInput[2])) 
            { 
            alert("Sorry you have made a wrong choice");
            // wrongCounter++; 
            // console.log(wrongCounter);         
            }
            showSteps(6);
            showSteps(7);
            hideImage("P_4");        
            pathColor(3);  
            displayImage("P_5"); 
            setTimeout(stage5, 1000);
    }
}

var stage5 = function()
{
    
    {
        var input = prompt("You want to go Top,Top-Left or Top-Right");   
        while(!(input == promptInput[1])) 
            { 
            alert("Sorry you have made a wrong choice");
            // wrongCounter++; 
            // console.log(wrongCounter);         
            }
            showSteps(8);        
            hideImage("P_5");        
            pathColor(4);  
            displayImage("P_6"); 
            setTimeout(stage6, 1000)
            
    }
}

var stage6 = function()
{
    
    {
        var input = prompt("You want to go Top,Top-Left or Top-Right");   
        while(!(input == promptInput[0])) 
            { 
            alert("Sorry you have made a wrong choice");
            // wrongCounter++; 
            // console.log(wrongCounter);         
            }
            showSteps(9);
            showSteps(10);
            hideImage("P_6");        
            pathColor(5);  
            displayImage("P_7"); 
            alert("Awesome!!! Prince has found his Princess");
    }
}

setTimeout(stage1,1000);