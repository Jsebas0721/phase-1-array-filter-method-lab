// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(driversArray, string){

    let matchingDrivers = driversArray.filter(element => element.toLowerCase() === string.toLowerCase());
    if(matchingDrivers){
        return matchingDrivers;
    }   
}

function fuzzyMatch(driversArray, string){

    let matchingDrivers = driversArray.filter(element => element.toLowerCase().substring(0, string.length) === string.toLowerCase());

    if(matchingDrivers){
    return matchingDrivers;
    }
    
}

//fuzzyMatch(drivers, 'Sa');

function matchName(driversArray, string){

    let matchingDrivers = driversArray.filter(element => element.name === string );    

    if(matchingDrivers){
        return matchingDrivers;
    }
}