## Javascript data structure questions
​
### level 1:
1. Convert [1, 2, 3] to [2, 3, 4] using one line of code.
Output should be [2, 3, 4]
2. Calculate total of all the numbers in array [1, 2, 3] using one line of code.
Output should be a number: 6
3. Print all the properties of the object along with value {name: 'Elie', rank: 'Pro'}.
Output should be a string: "name: Elie, rank: Pro"
​
### level 2:
1. Write a function to remove all even numbers from an Array.
```
Input array: 
[1, 3, 4, 6, 7, 8]
```
```
Output should be array: [1, 3, 7]
```
2. Replace all the vowels in a string with uppercase vowels.
```
Input string: 'Elie'
```
```
Output should be string: 'ElIE'
```
3. Write a function to find the maximum number in an array.
```
Input array: [1, 3, 4, 6, 7, 8, 2, 5]
```
```
Output should be a number: 8
```
​
### level 3:
1. Write a recursive function that transforms all the strings to uppercase.
```
// Input object
​
const user = {
    name: "Elie",
    job: "Instructor",
    workDetails: {
        type: "Part Time",
        hours: "40 hours"
    }
    educationQualifications: [
        {
            name: "Full Stack",
            type: "Certification"
        },
        {
            name: "Javascript",
            type: "Certification"
        }
    ]
}
// Output should be
​
{
    name: "ELIE",
    job: "INSTRUCTOR",
    workDetails: {
        type: "PASRT TimeTIME",
        hours: "40 HOURS"
    }
    educationQualifications: [
        {
            name: "FULL STACK",
            type: "CERTIFICATION"
        },
        {
            name: "JAVASCRIPT",
            type: "CERTIFICATION"
        }
    ]
}
```
2. Write a function that takes a string with key value pairs sum the value of all unique properties and return an object from it.
```
Input string: "a:2,b:3,c:4,a:5,b:6"
```
```
Output should be object: {a: 7, b: 9, c: 4}
```
3. Check for balanced parentheses using a stack
```
Example:
exp = "{[({})]}" should be valid
but "{[(]} should be invalid
```

