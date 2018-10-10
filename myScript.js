/* Home Mini Project:TemperatureBug
Create a function called TemperatureBug that does the following:
Accepts 1 argument, a number that represents a temperature in degrees
The function will return “Spring, Summer, etc…” based on temperature entered
Ex. Input:  95
Ex. Output:  Summer
Feel free to add any easter eggs aka Special cases
BONUS (must do): Make a different picture appear based on TEMP (beach pic, snowman pic, flowers for spring

PLAN:
HTMl:
(*)Create a button that calls the function
(*)Create a place  for the Input
JavaScript:
(*) PULL information from HTML
(*)function 'TemperatureBug'
()if-else statement with language codes
(*) Easter Eggs!
 */

function TemperatureBug()
{

    var num1 = Number (document.project1.num1.value)

    if (num1 == 451)
    {

        document.getElementById("temppic").src="img/fahrenheit.gif";
        return "That's a good book. Also the temperature that paper burns";
    }
    else if (num1 > 99)
    {
        document.getElementById("temppic").src="img/Chicago.jpg";
        return "You do NOT live near Chicago its toooo HOOTT";
    }
    else if (75 <num1)
    {
        document.getElementById("temppic").src="img/Summer.gif";
        return "it is Summer";
    }
    else if (55< num1 )
    {
        document.getElementById("temppic").src="img/Fall.gif";
        return "It is Fall";
    }
    else if (28< num1)
    {
        document.getElementById("temppic").src="img/Spring.gif";
        return "It is Spring";
    }
    else if (-10<= num1 )
    {
        document.getElementById("temppic").src="img/Winter.gif";
        return "It is Winter";
    }
    else
    {
        document.getElementById("temppic").src="img/error.jpg";
        return " it froze the system";
    }
}
function TemperatureBugCelsius()
{

    var num1 = Number (document.project1.num1.value)

 if (50< num1)
{

    document.getElementById("temppic").src="img/error.gif";
    return "ERROR wow that broke the scale";
}
 else if (13 <num1)
 {
     document.getElementById("temppic").src="img/Summer.gif";
     return "it is Summer";
 }
 else if (5< num1 )
 {
     document.getElementById("temppic").src="img/Fall.gif";
     return "It is Fall";
 }
 else if (-4< num1)
 {
     document.getElementById("temppic").src="img/Spring.gif";
     return "It is Spring";
 }
 else if (-13<= num1 )
    {
        document.getElementById("temppic").src="img/Winter.gif";
        return "It is Winter";
    }
    else
 {
     document.getElementById("temppic").src="img/error.jpg";
     return " it froze the system";
 }

}




function assignGrade()
{
    var num1 = Number (document.project3.num1.value)

    if (num1>89)
    {
        if (num1>95)
        {
            return "A+";
        }
        else
        {
            return "A";
        }
    }
    else if (num1>79)
    {
        if (num1>85)
        {
            return "B+";
        }
        else
        {
            return "B";
        }
    }
    else if (num1>69)
    {
        if (num1>75)
        {
            return "C+";
        }
        else
        {
            return "C";
        }
    }
    else if (num1>59)
    {
        if (num1>65)
        {
            return "D+";
        }
        else
        {
            return "D";
        }
    }
    else if (num1<=59)
    {
        return "F";
    }

}

function dropDown ()
{
    var activity = myList.options[myList.selectedIndex].text;

    var num1 = Number (document.DropDown.num1.value);

    if ( activity == 'Running')
    {
        document.getElementById("temppic").src="img/running.gif";
        return num1 * 13 + ' '+ 'Calories';
    }
    if ( activity == 'Walking')
    {
        document.getElementById("temppic").src="img/walking.gif";
        return num1 * 5 + ' '+ 'Calories';
    }
    if ( activity == 'Swimming')
    {
        document.getElementById("temppic").src="img/swimming.gif";
        return num1 * 8 + ' '+ 'Calories';
    }
    if ( activity == 'Biking')
    {
        document.getElementById("temppic").src="img/biking.gif";
        return num1 * 11 + ' '+ 'Calories';
    }
    if ( activity == 'Dancing')
    {
        document.getElementById("temppic").src="img/dancing.gif";
        return num1 * 6 + ' '+ 'Calories';
    }
    if ( activity == 'Hiking')
    {
        document.getElementById("temppic").src="img/hiking.gif";
        return num1 * 7 + ' '+ 'Calories';
    }
    if ( activity == 'Sleeping')
    {
        document.getElementById("temppic").src="img/sleeping.gif";
        return "MOOOM MR.K is Sleep grading again!!! ";
    }

}