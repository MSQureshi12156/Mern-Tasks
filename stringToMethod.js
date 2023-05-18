string = "my name is Salman $#      "
names = "MY NAME IS SALMAN"

//String Method


//UpperCase All Character
console.log("UpperCase All Character:" + string.toUpperCase())

//LowerCase All Character except first character
console.log("Lowercase All Character:" + names.slice(0,1) + names.slice(1).toLowerCase())

//Remove all Right spaces from the string
console.log("Remove Right Spaces:" + string.trimEnd())

//Replace Special Charecters from the string
console.log("Remove Right Spaces:" + string.replace("$#", "@"))

//Remove last 3 characters from the string
console.log("Remove last 3 characters:" + names.slice(0, -3))
//Concat 2 strings string
console.log("Concat 2 strings string:" + string.concat(" ", names))




