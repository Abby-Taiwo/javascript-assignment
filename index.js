//number1
function printSum(arr) { // array a
    let sum = 0
    for (let item of arr) { // loop through the array and get each integer
        // let new sum value equals current integer + the next integer,until end of array
        sum += item 
    }
    console.log(sum) // output of the sum of array items
}

//number2
function compareTriplets(a,b) { // array a and b
    let alicePoint = 0
    let bobPoint = 0
    let finalArray=[]

    // loop through a or b,since value of i is equal for both arrays
    for (let i=0; i < a.length; i++) { 
            if( a[i] > b[i] ) { // if alice rating is greater than bob's
                alicePoint += 1 // add 1 to current alicepoint
              } else if(a[i] < b[i]) { // if alice rating is lesser than bob's 
                bobPoint +=1  // add 1 to current bobpoint
              } 
    } 
    finalArray.push(alicePoint,bobPoint) // pushing both values into an array
    console.log(finalArray) // output to compare person with greater point
}


//number 3 
function ratioFinder(a) { // array a
    let ratioPositive = 0
    let ratioNegative = 0
    let ratioZeros = NaN // because 0 / 0 is always NaN
    let negativeValues = []
    let positiveValues = []

    a.forEach(curr => { // loop through the array and get each integer
       if (curr < 0 ) { // if integer is negative 
           negativeValues.push(curr) // push all negative integers into an array

           // begin loop through the array at second item
           for (let i = 1; i = negativeValues.length; i++) { 
               // previous item / current item  (not to go beyond array length)
               ratioNegative = negativeValues[i-1]/negativeValues[i] 
           }    
       } else if (curr > 0) { // if integer is positive
            positiveValues.push(curr) // push all positive integers into an array

            // begin loop through the array at second item
            for (let i = 1; i = positiveValues.length; i++) { 
                // previous item / current item  (not to go beyond array length) 
                ratioPositive = positiveValues[i-1]/positiveValues[i] 
            }
       }  
   });
      // output of their ratios with decimal places
      console.log(ratioNegative)
      console.log(ratioPositive,ratioZeros)
      console.log(ratioZeros) 
}

// ratioFinder([2,0,-2,-4.9,0,85,34,0,1.5])

//number4
function firstFunction(a,b) { // array a
    return a+b // add integer a and b together,also the output
}
