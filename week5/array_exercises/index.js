//FSW-105 Week5
//Array Filter Exercises

//Section 1: .filter()

//Question 1
console.log("***************");
console.log("***Filter Q1***");
console.log("***************");

function fiveAndGreaterOnly(arr){
    const result = arr.filter(function(num) {
        if (num >=5) {
            return true;
        }
    })
     return result;
}
console.log(fiveAndGreaterOnly([3,6,8,2])); //[9,8]

//Question 2
console.log("***************");
console.log("***Filter Q2***");
console.log("***************");

function evensOnly(arr){
    const result = arr.filter(function(num){
        if(num % 2 === 0){
            return true;
        }
    })
    return result;
}
console.log(evensOnly([3,6,8,2])); //[6,8,2]

//Question 3
console.log("***************");
console.log("***Filter Q3***");
console.log("***************");

function fiveCharactersOrFewerOnly(arr){
    const result = arr.filter(function(num){
        if(num.length <= 5){
            return true;
        }
    })
    return result;
}
console.log(fiveCharactersOrFewerOnly(["dog","wolf","by","family","eaten","camping"])); //[by,dog,wolf,eaten]

//Question 4
console.log("***************");
console.log("***Filter Q4***");
console.log("***************");

function peopleWhoBelongToTheIlluminati(arr){
    const result = arr.filter(function(num) {
        if (num.member === true){
            return true;
        }
    })
    return result;
}
console.log(peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kanye West", member: false },
    { name: "Bob Ziroll", member: true }
]));

//Question 5
console.log("***************");
console.log("***Filter Q5***");
console.log("***************");

function ofAge(arr){
    const result = arr.filter(function(num){
        if (num.age >= 18) {
            return true;
        }
    })
    return result;
}
console.log(ofAge([
    { name: "Angelina Jolie", age: 80},
    { name: "Eric Jones", age: 2},
    { name: "Paris Hilton", age: 5},
    { name: "Kanye West", age: 16},
    { name: "Bob Ziroll", age: 100}
]));

//Section 2: .map()

//Question 1
console.log("***************");
console.log("***Map Q1***");
console.log("***************");

function doubleNumbers(arr){
    const result = arr.map(function(num){
    return num*2;
    })
return result
}

console.log(doubleNumbers([2,5,100])); //[4,10,200]

//Question 2
console.log("***************");
console.log("***Map Q2***");
console.log("***************");

function stringItUp(arr){
    const result = arr.map(function(num){
        return num.toString();
    })
    return result
}
console.log(stringItUp([2, 5, 100])); //["2","5","100"]

//Question 3
console.log("***************");
console.log("***Map Q3***");
console.log("***************");

function capitalizeNames(arr) {
    const result = arr.map(function(num){
        return num.charAt(0).toUpperCase() + num.substring(1).toLowerCase();
    })
    return result
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

//Question 4
console.log("***************");
console.log("***Map Q4***");
console.log("***************");

function namesOnly(arr) {
    const result = arr.map(function(num){
        return num.name;
    })
    return result
}
console.log(namesOnly([
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kayne West", age: 16},
    {name: "Bob Ziroll", age: 100}
]))
//Question 5
console.log("***************");
console.log("***Map Q5***");
console.log("***************");

function makeStrings(arr) {
    const result = arr.map(function(num){
        if(num.age >= 18){
            return num.name + " can go to The Matrix";
        } else {
            return num.name + " is under age!!";
        }
    })
    return result
}
console.log(makeStrings([
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kayne West", age: 16},
    {name: "Bob Ziroll", age: 100}
]))
//Question 6
console.log("***************");
console.log("***Map Q6***");
console.log("***************");

//Couldn't manipulate the DOM in node, so I took the easy way out on this one, but I would use the .ammendDocument methods to do this, I believe.
function readyToPutInTheDOM(arr){
    const result = arr.map(function(num){
        return "<h1>" + num.name + "</h1>" + "<h2>" + num.age + "</h2>";
    })
    return result
}
//the graphic was missing from the document to accompany this question, so I used the same array as before.
console.log(readyToPutInTheDOM([
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kayne West", age: 16},
    {name: "Bob Ziroll", age: 100}
]))
//Section 3: .reduce()

//Question 1
console.log("***************");
console.log("***Reduce Q1***");
console.log("***************");

function total(arr){
    const result = arr.reduce(function(final, num){
        final += num;
        return final;
    })
    return result
}
console.log(total([1, 2, 3]));
//Question 2
console.log("***************");
console.log("***Reduce Q2***");
console.log("***************");

function stringConcat(arr){
    const result = arr.reduce(function(prev, current, index){
        return index == 0 ? current : prev.toString() + current.toString();
        
    })
    return result
}
console.log(stringConcat([1, 2, 3]));
//Question 3
console.log("***************");
console.log("***Reduce Q3***");
console.log("***************");
//I feel like this could be shorter if I wasn't using reduce, but I think I get the concept of it.
function totalVotes(arr) {
    const result = arr.reduce(function(total, person){
        if(person.voted === true){
            total++
        }
        return total;
    }, 0)
    return "Total number of voters: " + result
}
let voters = [
    {name:'Bob', age: 30, voted: true},
    {name:'Jake', age: 32, voted: true},
    {name:'Kate', age: 25, voted: false},
    {name:'Sam', age: 20, voted: false},
    {name:'Phil', age: 21, voted: true},
    {name:'Ed', age: 55, voted: true},
    {name:'Tami', age: 54, voted: true},
    {name:'Mary', age: 31, voted: false},
    {name:'Becky', age: 43, voted: false},
    {name:'Joey', age: 41, voted: true},
    {name:'Jeff', age: 30, voted: true},
    {name:'Zack', age: 19, voted: false}
]
console.log(totalVotes(voters));

//Question 4
console.log("***************");
console.log("***Reduce Q4***");
console.log("***************");

function shoppingSpree(arr) {
    result = arr.reduce(function(total, itemCost){
        total.price += itemCost.price;
        return total;
    })
    return result.price;
}
let wishlist = [
    {title: "Tesla Model S", price: 90000},
    {title: "4 carat diamond ring", price: 45000},
    {title: "Fancy hacky Sack", price: 5},
    {title: "Gold fidgit spinner", price: 2000},
    {title: "A second Tesla Model S", price: 90000}
]
console.log(shoppingSpree(wishlist));

//Question 5
console.log("***************");
console.log("***Reduce Q5***");
console.log("***************");

function flatten(arr) {
    const result = arr.reduce(function(flat, next){
        return flat.concat(next);
    })
    return result;
}
let arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]
console.log(flatten(arrays));
//Question 6
console.log("***************");
console.log("***Reduce Q6***");
console.log("***************");

function voterResults(arr) {
    const result = arr.reduce(function(final, voter){
        if(voter.age >= 18 && voter.age <= 25) {
            final.youth++
            if(voter.voted === true) {
                final.youngVotes++
            }
        } else if(voter.age >= 26 && voter.age <= 35) {
            final.mids++
            if(voter.voted === true) {
                final.midVotes++
            };
        } else if(voter.age >= 36 && voter.age <= 55) {
            final.olds++
            if(voter.voted === true) {
                final.oldVotes++
            }
        }
        return final;
    }, {youngVotes: 0, youth: 0, midVotes: 0, mids: 0, oldVotes: 0, olds: 0});
    return result;
}
console.log(voterResults(voters));

//Section 4: .sort()

//Question 1
console.log("***************");
console.log("***Sort Q1***");
console.log("***************");

function leastToGreatest(arr) {
    result = arr.sort(function(a, b){
        return a-b;;
    });
    return result;
};
console.log(leastToGreatest([1,3,5,2,90,20]));

//Question 2
console.log("***************");
console.log("***Sort Q2***");
console.log("***************");

function greatestToLeast(arr) {
    result = arr.sort(function(a, b){
        return b-a;
    });
    return result;
};
console.log(greatestToLeast([1,3,5,2,90,20]));

//Question 3
console.log("***************");
console.log("***Sort Q3***");
console.log("***************");

function lengthSort(arr) {
    result = arr.sort(function(a, b){
        return a.length - b.length;
    });
    return result;
};
console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));

//Question 4
console.log("***************");
console.log("***Sort Q4***");
console.log("***************");

function alphabetically(arr) {
    result = arr.sort(function(a, b){
        if(a < b) {
            return -1;
        } if(a > b) {
            return 1;
        };
    });
    return result;
};
console.log(alphabetically(["dog", "wolf", "by", "family", "eaten"]));

//Question 5
console.log("***************");
console.log("***Sort Q5***");
console.log("***************");

function byAge(arr){
    result = arr.sort(function(a, b){
        return a.age - b.age;
    });
    return result;
};
console.log(byAge([
    {name: "Quiet Samurai", age: 22},
    {name: "Arrogant Ambassador", age: 100},
    {name: "Misunderstood Observer", age: 2},
    {name: "Unlucky Swami", age: 77}
]));