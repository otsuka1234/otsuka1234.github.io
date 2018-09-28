/*
NOTES NOTES NOTES NOTES NOTES NOTES NOTES NOTES NOTES NOTES NOTES NOTES

Comparison Operators are symbols/math that let us COMPARE 2 or more values

=symbol is an ASSIGNMENT operator, we use it to ASSIGN a value to a variable
     ex.  var x=5; sets x equal to a value of 5

== symbol is a COMPARISION operator, we use it to COMPARE two values for equality
    ex. x++y; will return TRUE or FALSE depending on whether x and y hold equal values

 if (x===y) {...} STRICT EQUAL, meaning that both the VALUE and DATA TYPE of x and y must be the same

 if (x==y)(...) LOOSE equal. Values must still be the same, but DATA TYPE does not.
               Javascript will attempt to convert the data type, but don't rely on it if possible

 if (x !== y) {...} LOOSE not-equal, this will return TRUE if VALUE is not equal or if DATA TYPE is not equal

 if (x != y) {...} Values are not equal (DATA TYPE is ignored0

 x < y  means x is less than y
 x <= y means x is less than or equal to y
 x > y  means x is greater than y
 x >= y means x is great than or equal to y
 */
function wordMatch()
{
    var str1 ="Apple";
    var str2 ="Apple";
    //logic gate-- aka Conditional Statement,.. BOOLEAN statement b.c. result is always y/n
     if (str1 == str2) //meaninf if the two strings are EQUAL
     {
         return  "The two strings are EQUAL!! wowo";
     }
     else
     {
         return "those strings are different!@!";
     }
    //return str1 == str2;
}

function strictEqual()
{
    var x = 7; // DATA TYPE is NUMERIC (MATHHHHHHHHH)
    var y = 7; //DATA TYPE IS STRING (LABBBBEEELLL)

    if (x === y)
    {
        return "x and y have the same VALUE and DATA TYPE"
    }
    if (x == y)
    {
        return "both x and y have the same VALUE";
    }
}

/*
MINI PROJECT 1
    TASK: Write a function named 'greaterNum' that does the following:
        () Take 2 arguments (parameters), both of which are NUMBERS (datatype?)
        () Return whichever number is the greater (higher value) number
        () Call that function 2 time with different number pairs, and long the output
             to make sure it works (expected output:" the greater number of 23 and 33 is 33")
    GAMEPLAN!!!
    HTML:
    (*) Add 2 input boxes to collect 2 number to compare
    (*) Create a button that calls the function
    (*) Place for the output

    JavaScript:
    () Function 'greaterNum' that uses if-then to compare numbers
 */
function greaterNum ()
{
    var num1 = Number(document.project1.input1.value);
    var num2 = Number(document.project1.input2.value);

    if (num1 > num2)
    {
        return "The greater number of " + num1 + " and "+ num2 +  " is " + num1;
    }
    if (num2 > num1)
    {
        return "The greater number of "+ num1 +" and "+ num2 + " is " + num2;
    }
    else if (num1 == num2)
    {
        return"They're equal";
    }

}

/* MINI PROJECT 2
TASK: Write a function named 'helloWorld' that:
            - Takes 1 argument, language code 9example 'en','es', 'de', ..)
            - Returns "Hello, world!" for the language code given.
            - it should default returning English " Hello World"
            - Call the function for each of the supporting language and
            log the result to make sure it works!
       HTML:
       (*)box for the output "Hello, world!"
       (*)input box for the language code
       (*)FORM on the html document.
       (*)button to call the function.
       JavaScript:
       (*)function 'helloWorld'
       ()if-else statement with language codes
       ()PULL language code FROM html and use in 'helloWorld'

 */
function helloWorld ()
{
    var language = document.project2.input1.value; //capture data from input box on HTML
    //here comes the LOGIC
    language = language.toLowerCase();

    if (language == 'kr')
    {
        return "안녕 세상!";
    }
    if (language == 'ru')
    {
        return "Привет(Privet mir!)";
    }
    if (language =='de')
    {
        return "Hallo Welt!";
    }
    if (language == 'pl')
    {
        return "Witaj świecie!";
    }
    if (language == 'en')
    {
        return "MURICA YALL!!";
    }
    if (language == 'jp')
    {
        return "こんにちは世界 (Kon'nichiwa sekai!!!)";
    }
    else
    {
        return "hello world!";
    }



}
/*
MINI PROJECT 3
Task: Write a function named 'assignGrade' that:
    -takes 1 argument, a numeric score (wx.80, 90 etc)
    -returns a grade for the score. Either A, B,C,D,F+
    -Call that function for a few different scores and log the results
HTML:
()box for the output 'assignGrade'
()input box for the language code
()button to call the function.
()FORM on the html document.
JavaScript:
()call function 'assignGrade'
()Pull output from HTML
 */

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





    /*
    Mini PROJECT 4
    Write a function named 'pluralize' that:
    -take 2 arguments,a noun and a  number
    -return the number and pluralized form of the noun
            Ex input: number 3 noun dog
            Ex output: "3 dogs"
    -Test a few different nouns (it will not be perfect)
    -Allow for a few special case like mouse, goose, cactus
     */






   function pluralize()
    {
        var quantity = Number(document.project4.num1.value);
        var noun = document.project4.word1.value.toLowerCase();

        if ( noun == 'mouse')//special if-else for case of MOUSE
        {
            if(quantity > 1)
            {
                return quantity + " " + "mice";
            }
            else
            {
                return quantity + " " + "mouse";
            }
        }

        if ( noun == 'deer')//special if-else for case of deer

            if(quantity > 1)
            {
                return quantity + " " + "deer";
                }

            if ( noun == 'cactus')//special if-else for case of Cactus
            {
                if(quantity > 1)
                {
                    return quantity + " " + "cacti";
                }
                else
                {
                    return quantity + " " + "cactus";
                }
            }
        if (quantity > 1)
    {
       return quantity + " " + noun +"s";
    }
    else
    {
        return quantity + " " + noun;
    }
    }

