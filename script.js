//let create the score object/
const scores={
    red:0,
    blue:0,
    green:0,
    yellow:0
}
//opening function creating//
function OpeningCeremony(scores,callback){
console.log("Openceremony function call")
setTimeout(()=>{
    console.log("Let the games begin");
    Race100(scores,callback);
},1000)
}



///create Race100 function//
function Race100(scores,callback){
console.log("Race100 function call")
setTimeout(()=>{
    console.log("Previous Score is",scores);
    const times={
        red:Math.floor(Math.random()*5),
        blue:Math.floor(Math.random()*5),
        green:Math.floor(Math.random()*5),
        yellow:Math.floor(Math.random()*5)
    }
    const sortedtime=Object.entries(times).sort((a,b)=>{return a[1]-b[1]})
    const first = sortedtime[0][0];
    const second= sortedtime[1][0];
    scores[first]+=50;
    scores[second]+=25;
    console.log("Updated Score is",scores);
    console.log(`The winner of the 100M race is ${first}, followed by ${second}`);
    callback(scores,LongJump);
},3000)
}

//create a longjump function//
function LongJump(scores,callback){
console.log("Longjump function call");
setTimeout(()=>{
console.log("Previous Score is",scores);
let randcol;
randcol = ["red", "yellow", "green", "blue"][Math.floor(Math.random() * 4)];
scores[randcol]+=150;
console.log(scores[randcol]);
    console.log("Updated Score is",scores)
    console.log(`The winner of the Long Jump is ${randcol}`);
    callback(scores,HighJump);
},2000)
}

//create highjump//
function HighJump(scores){
    console.log("highjump function call");
    console.log("Previous Score is",scores)

    const color=prompt("What colour secured the highest jump - ");
    if(color&&scores[color]){
        scores[color]+=100;
        console.log(`The winner is ${color}`);
    }
    else{
        console.log("Event was cancelled");
    }
    //call the award ceremony fn
    console.log("Updated Score is",scores)
AwardCeremony(scores);
}


//Awarceremony function created//
function AwardCeremony(scores) {
    console.log("AwardCeremony function call")
console.log("SCORES-->",scores);
const sortsc=Object.entries(scores).sort((a,b)=>(b[1]-a[1]));
console.log(`${sortsc[0][0]} first with ${sortsc[0][1]} pts`);
  console.log(`${sortsc[1][0]} second with ${sortsc[1][1]} pts`);
  console.log(`${sortsc[2][0]} third with ${sortsc[2][1]} pts`);
}


//call the function//
OpeningCeremony(scores,Race100);