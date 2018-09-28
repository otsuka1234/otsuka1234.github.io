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
function TempertureBug()
{
var num1 = Number (document.project1.num1.value)
    if (10<=num1<=28)
    {
        return 'It is Winter'
    }
    if (28<num1<=55)
    {
        return 'It is Spring'
    }
    if (55<num1<75)
    {
        return 'It is Fall'
    }
    if (75<num1<88)
    {
        return 'it is Summer'
    }
    if(num1==451)
    {
        return 'Thats a good book. Also the tempature that paper burns'
    }
}
function TempertureBugCelsius()
{
    var num1 = Number (document.project1.num1.value)
    if (10<=num1<=28)
    {
        return 'It is Winter'
    }
    if (28<num1<=55)
    {
        return 'It is Spring'
    }
    if (55<num1<75)
    {
        return 'It is Fall'
    }
    if (75<num1<88)
    {
        return 'it is Summer'
    }
    if(num1==451)
    {
        return 'Thats a good book. Also that is the temperature that paper burns'
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