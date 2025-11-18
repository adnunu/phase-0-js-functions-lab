
function calculateTax(amount){
    return amount * 0.1
}

function convertToUpperCase(text){
    return text.toUppercase()
}
function findMaximum(num1, num2){
    if (num1 > num2){
        return num1
    }

    else {
        return num2}
}
function isPalindrome(word){
     let reversed= word.split('').reverse().join('')
     return word == reversed

    }

function calculateDiscountedPrice(originalprice ,dicountpercentage){
    return originalprice- (originalprice-dicountpercentage)
}


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };