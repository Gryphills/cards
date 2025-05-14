
const bonusesObject = {

  partialBody : [ 3, "Partial Body (1-2 sections)" ],
  halfBody  : [ 8, "Half Body (3-5 sections)" ],
  fullBody  : [15, "Full Body (6-7 sections)"],

  animationPrinciples  : [2, "Animation Principles"],
  offsetDetails  : [0, "Complex Details"],
  trad3: [2, "3+ handDrawn frames inbetween keys"],

  shading  : [0.5, "Shaded"],
  traditional  : [4, "x body - Traditional Bonus"],

  magic  : [4, "Magic"],
  jewellery  : [2, "Jewellery"],
  accessories  : [4, "Accessories"],
  outfit  : [4, "Clothing"],

  /*otherRex  : [2, "(Static) Other Player Rex"],
  otherRexAnim  : [4, "Animated Other Player Rex"],
  companion  : [1, "(Static) Companion"],
  companionAnim  : [2, "Animated Companion"],*/

  bgSimple  : [4, "Simple Animated BG (stacks)"],
  bgComplex  : [10, "Complex Animated BG (stacks)"],
  

  abstract  : [1, "Abstract BG"],
  pOrE  : [4, "Planes OR Elements"],
  pAndE  : [10, "Planes AND Elements"]
};
  
const bgStuff = ["abstract", "pOrE", "pAndE"];

const multiplied = ['animationPrinciples','offsetDetails', 'trad3', 'shading',  'traditional']

function start() {
  let bonusKeys = Object.getOwnPropertyNames(bonusesObject);
  for (let i=0; i<bgStuff.length; i++) {
    let index = bonusKeys.indexOf(bgStuff[i]);
    bonusKeys.splice(index, 1);
  }

  for (let i=0; i < bonusKeys.length; i++) {
    let currentBonus = bonusKeys[i];
    let htmlItem = document.getElementById(currentBonus);
    htmlItem.setAttribute("value", bonusesObject[currentBonus][0])
    htmlItem.addEventListener("input", (e) => {
      bonusesObject[currentBonus][0] = Number(e.target.value);
      updateValues(currentBonus);
      writeMPlogStuff(currentBonus);
      calculations();
    })
    writeMPlogStuff(currentBonus);
  }
  for (let i=0; i<bgStuff.length; i++) {
    writeMPlogStuff(bgStuff[i])
  }
}

function writeMPlogStuff(bonus) { //start it
  
  if (multiplied.includes(bonus)) {
    let bodyArray = ['p', 'h', 'f'];
    for (let b=0; b<bodyArray.length; b++) {
      let type = bodyArray[b]
      if (type == "p") type = "partialBody";
      if (type == "h") type = "halfBody";
      if (type == "f") type = "fullBody";
      let bonusAmount = (bonusesObject[type][0] * bonusesObject[bonus][0])
      console.log(bonus + bodyArray[b])
      writeBonuses(bonus + bodyArray[b], bonusAmount)
    }
  }
  /*
  if (bonus.includes('traditional')) {
    let bodyArray = ['p', 'h', 'f'];
    for (let b=0; b<bodyArray.length; b++) {
     // console.log("yeah??")
      let type = bodyArray[b]
      //allBonusInstances = document.getElementsByClassName(type);
      if (type == "p") type = "partialBody";
      if (type == "h") type = "halfBody";
      if (type == "f") type = "fullBody";
        //console.log(type + "is the type???")
      let bonusAmount = (bonusesObject[type][0] * bonusesObject.traditional[0]) - bonusesObject[type][0]

      writeBonuses('traditional' + bodyArray[b], bonusAmount)
    }*/
  else {
    bonusAmount = bonusesObject[bonus][0];
    writeBonuses(bonus, bonusAmount)
  }
}

function writeBonuses(bonusName, bonusAmount) { //private/protected
  let allBonusInstances = document.getElementsByClassName(bonusName);
  for (let i=0; i<allBonusInstances.length; i++) {
    let item = allBonusInstances.item(i);
    if (multiplied.includes(bonusName.substring(0, bonusName.length - 1))) {
      bonusName = bonusName.substring(0, bonusName.length - 1);
      item.innerHTML = "+ &nbsp;" + bonusAmount + " MP &nbsp;&nbsp;" +  bonusesObject[bonusName][1] + "(" + bonusesObject[bonusName][0] + "x Body Sections bonus) <br>"
    } else {
      item.innerHTML = "+ &nbsp;" + bonusAmount + " MP &nbsp;&nbsp;" + bonusesObject[bonusName][1] + "<br>";
    }
  }
}

function updateValues(updatedBonus) {
  let collectionToUpdate = document.getElementsByClassName(updatedBonus)
  for (let i=0; i < collectionToUpdate.length; i++) {
    let current = collectionToUpdate.item(i);
    current.innerHTML = bonusesObject[updatedBonus]
  }
}


const allSubtotals = [];
const allTotals = [];
const calculatedSubtotals = [];


function mpLogObj(object) {
  mpLog(object.title, object.rexLink, object.video, object.sectionLog, object.thumbnail)
}

const cardInfoList = ['testnoexisty']

function mpLog(title, rexlink, videolink, sectionsArray, thumbnail) {
    let logContainer = document.getElementById("all-logs");
    let randomNumber = Math.floor(Math.random()*11);
    let classTitle = title.split(" ")[0] + randomNumber;
    //console.log(classTitle)
    let newLog = `<br> <div class="mpLog"> <div class="titlestuff"> <strong> ${title} <br> <a href="${rexlink}"> Rex Import </a> -- <a href="${videolink}"> Video Link</a> </strong> </div> <br>`
    newLog += `<div class="image" id="image-${classTitle}"> <img src="${thumbnail}" height="150px"> </div> <div id="button-${classTitle}"> <i>(click to show/hide card details)</i></div> <br>`
    newLog += `<div class="cardcontainer" id="cardinfo-${classTitle}" style="display:none"> `

    for (let i=0; i<sectionsArray.length; i++) {
      let section = sectionsArray[i];
      let subtotal = [];
      for (let j=0; j<section.length; j++) {
        if (j==0) {
          newLog += `<div class="sectionstart"> ${section[0]}: </div>`;
        }
        else {
          newLog += `<div class="${section[j]} inputrows"> </div>`
          subtotal.push(section[j])
        }
      }
      allSubtotals.push(subtotal);
      newLog += `<div class="subtotal" id="subtotals-${allSubtotals.length - 1}"> ?</div>`
    }
    allTotals.push(sectionsArray.length);
    newLog += `</div> <div class="total" id="totals-${allTotals.length - 1}"> </div> </div>`
    logContainer.innerHTML += newLog

    cardInfoList.push(classTitle);

}


function calculations() {
  //console.log(allSubtotals)
  //calculatedSubtotals = [];
  for (let i=0; i<allSubtotals.length; i++) {
    let calculated = 0;
    let group = allSubtotals[i];
    let currentSubtotal = document.getElementById(`subtotals-${i}`);

    for (let j=0; j<group.length; j++) {
      let item = group[j];
     // console.log(item)

      if (multiplied.includes(item.substring(0, item.length - 1))) {
        let itemName = item.substring(0, item.length - 1)
        let type = item.charAt(item.length - 1);
        if (type == "p") type = "partialBody";
        if (type == "h") type = "halfBody";
        if (type == "f") type = "fullBody";

        let bonusAmount = (bonusesObject[type][0] * bonusesObject[itemName][0]) - bonusesObject[type][0]
        calculated += bonusAmount;
        //console.log('trad bonuse: ' + bonusAmount)
        currentSubtotal.innerHTML = `<i>Subtotal: ${calculated} MP</i>`
      }
      
      /*if (item.includes("traditional")) {
        //console.log('TRADITIONAL OK')
        let type = item.charAt(item.length - 1);
        if (type == "p") type = "partialBody";
        if (type == "h") type = "halfBody";
        if (type == "f") type = "fullBody";
      
        let bonusAmount = (bonusesObject[type][0] * bonusesObject.traditional[0]) - bonusesObject[type][0]
        calculated += bonusAmount;
        //console.log('trad bonuse: ' + bonusAmount)
        currentSubtotal.innerHTML = `<i>Subtotal: ${calculated} MP</i>`
    
      }*/
      else {
        //console.log(item);
        //console.log(bonusesObject[item])
        calculated += bonusesObject[item][0];
        currentSubtotal.innerHTML = `<i>Subtotal: ${calculated} MP</i>`
    
      }
    }
    calculatedSubtotals[i] = (calculated);
  }

let usedSubtotals = 0;
  for (let i=0; i<allTotals.length; i++) {
    let calculated = 0;
    let subSectionCount = allTotals[i];
    for (let c = 0; c < subSectionCount; c++) {
      calculated += calculatedSubtotals[usedSubtotals + c]
    }
    usedSubtotals += subSectionCount;
    let currentTotal = document.getElementById(`totals-${i}`);
    currentTotal.innerHTML = `<strong>Total MP: ${calculated} MP</strong>`;
  }
}

function buttonFunctions() {
  for (let i=0; i<cardInfoList.length; i++) {
    let classTitle = cardInfoList[i];
    let button = document.getElementById(`button-${classTitle}`);
    let cardInfo = document.getElementById(`cardinfo-${classTitle}`);
    
    if (button != null || cardInfo != null) {
    button.addEventListener("click", (e) => {
      console.log("CLICK YEAHHHHH")
      let style = cardInfo.getAttribute("style");
      if (style == "" || style == null) 
        cardInfo.setAttribute("style", "display:none")
      else
        cardInfo.setAttribute("style", "")
    })
    }
  }
}


//fullbodies:
mpLogObj(scipiosLook)
mpLogObj(sirius)
mpLogObj(minecraftRun)
mpLogObj(selkieSwim)
mpLogObj(foxJump)
mpLogObj(hyllinFight)

//mid body
mpLogObj(flowerCrown)
mpLogObj(astra)
mpLogObj(starburst)

//partial body

mpLogObj(ervioWave)

//slight bonus


start();

calculations();

buttonFunctions();


