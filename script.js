
const bonusesObject = {

  partialBody : [ 3, "Partial Body (1-2 sections)" , 'none'],
  halfBody  : [ 8, "Half Body (3-5 sections)" , 'none'],
  fullBody  : [15, "Full Body (6-7 sections)", 'none'],

  animationPrinciples  : [2, "Animation Principles", 'multiplied'],
  offsetDetails  : [0, "Complex Details", 'multiplied'],
  trad3: [2, "3+ handDrawn frames inbetween keys", 'multiplied'],

  shading  : [5, "Shaded", 'flat'],
  traditional  : [4, "Traditional Bonus", 'multiplied'],

  magic  : [4, "Magic", 'none'],
  jewellery  : [2, "Jewellery", 'none'],
  accessories  : [4, "Accessories", 'none'],
  outfit  : [4, "Clothing", 'none'],

  /*otherRex  : [2, "(Static) Other Player Rex"],
  otherRexAnim  : [4, "Animated Other Player Rex"],
  companion  : [1, "(Static) Companion"],
  companionAnim  : [2, "Animated Companion"],*/

  bgSimple  : [4, "Simple Animated BG (stacks)", 'none'],
  bgComplex  : [10, "Complex Animated BG (stacks)", 'none'],
  

  abstract  : [1, "Abstract BG", 'none'],
  pOrE  : [4, "Planes OR Elements", 'none'],
  pAndE  : [10, "Planes AND Elements", 'none']
};
  
const bgStuff = ["abstract", "pOrE", "pAndE"];

const multiplied = ['animationPrinciples','offsetDetails', 'trad3', 'shading',  'traditional']
const bodyParts = ['partialBody', 'halfBody', 'fullBody']


function start () {
  let bonusKeys = Object.getOwnPropertyNames(bonusesObject);
  for (let i=0; i<bgStuff.length; i++) {
    let index = bonusKeys.indexOf(bgStuff[i]);
    bonusKeys.splice(index, 1);
  }/*
  for (let i=0; i<bodyParts.length; i++) {
    let index = bonusKeys.indexOf(bodyParts[i]);
    bonusKeys.splice(index, 1);
  }
  */
  //<div id='thing' class='bonusvalue'> <input type="number" id="partialBody" class="inputbox"> Partial Body (1-2 sections) <br> </div>

  let htmlContainer = document.getElementById('bonus-values');
  htmlContainer.innerHTML
  for (let i=0; i < bonusKeys.length; i++) {
    let currentBonus = bonusKeys[i];
    let bonusHtml = `<div id="value-${currentBonus}" class='bonusvalue'>`
    if (bonusesObject[currentBonus][2] != 'none') {
      if (bonusesObject[currentBonus][2] == 'multiplied') {
        bonusHtml += `<input type="radio" name="multiply-${currentBonus}" id="multiplied-${currentBonus}" value="multiplied" checked> &nbsp; <input type="radio" name="multiply-${currentBonus}" id="flat-${currentBonus}" value="flat"> &nbsp;&nbsp; `
      } else {
        bonusHtml += `<input type="radio" name="multiply-${currentBonus}" id="multiplied-${currentBonus}" value="multiplied"> &nbsp; <input type="radio" name="multiply-${currentBonus}" id="flat-${currentBonus}" value="flat" checked> &nbsp;&nbsp; `
      }
    } else {
      bonusHtml += `&nbsp;&nbsp;&nbsp;&nbsp;`
    }
    bonusHtml += `<input type="number" id="input-${currentBonus}" class="inputbox"> ${bonusesObject[currentBonus][1]} <br> </div>`
    htmlContainer.innerHTML += bonusHtml;

    if (i == 2) {
      htmlContainer.innerHTML += `<p><strong>Additional Bonuses: </strong> <i> Use radio buttons to change if this bonus is multiplied by the body sections bonus, or if it should be flat</i> <br> x &nbsp; _</p>`
    } else if (i==7) {
      htmlContainer.innerHTML += `<p><strong> Flat bonuses:</strong></p>`
    } else if (i == 11) {
      htmlContainer.innerHTML += `<p><strong>Animated Background:</strong></p>`
    }

    
    let htmlItem = document.getElementById(`input-${currentBonus}`);
    htmlItem.setAttribute("value", bonusesObject[currentBonus][0])
    /*
    htmlItem.addEventListener("input", (e) => {
      bonusesObject[currentBonus][0] = Number(e.target.value);
      updateValues(currentBonus);
      writeMPlogStuff(currentBonus);
      calculations();
    })*/
    writeBonuses(currentBonus);
  }
  for (let i=0; i<bgStuff.length; i++) {
    writeBonuses(bgStuff[i])
  }

  

  document.addEventListener('input', (e) => {
    if ( e.target.type == 'radio' ) {
      let id = e.target.id;
      id = id.split("-")[1];
      if (id != undefined) {
        bonusesObject[id][2] = String(e.target.value);
        //flatOrMultiply(id)
        writeBonuses(id)
        calculations();
      }
    }
    if (e.target.type == 'number') {
      let id = e.target.id;
      id = id.split("-")[1];
      if (id != undefined){
        bonusesObject[id][0] = Number(e.target.value);
        //updateValues(id);
        writeBonuses(id);
        calculations();
      }
    }
});

}

function flatOrMultiply (id) {

}

/*
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
}*/

/*
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
    }* /
  else {
    bonusAmount = bonusesObject[bonus][0];
    writeBonuses(bonus, bonusAmount)
  }
} */

function writeBonuses(bonus) { 

  if (bonusesObject[bonus][2] == 'multiplied') {
    //let bonusName = bonus.substring(0, bonus.length - 1)
    for (let i=0; i<bodyParts.length; i++) {
      let type = bodyParts[i];
      let typeid = bonus + type.charAt(0);
      let allBonusInstances = document.getElementsByClassName(typeid);
      let bonusAmount = bonusesObject[bonus][0] * bonusesObject[type][0]
      for (let i=0; i<allBonusInstances.length; i++) {
        let item = allBonusInstances.item(i);
        item.innerHTML = "+ &nbsp;" + bonusAmount + " MP &nbsp;&nbsp;" +  bonusesObject[bonus][1] + "(" + bonusesObject[bonus][0] + "x Body Sections bonus) <br>"
      }
    }
  }
  else if (bonusesObject[bonus][2] == 'flat') {
    for (let i=0; i<bodyParts.length; i++) {
      let type = bodyParts[i];
      let typeid = bonus + type.charAt(0);
      let allBonusInstances = document.getElementsByClassName(typeid);
      let bonusAmount = bonusesObject[bonus][0]
      for (let i=0; i<allBonusInstances.length; i++) {
        let item = allBonusInstances.item(i);
        item.innerHTML = "+ &nbsp;" + bonusAmount + " MP &nbsp;&nbsp;" + bonusesObject[bonus][1] + "<br>";
      }
    }
  }
  else if (bonusesObject[bonus][2] == 'none') {
    let allBonusInstances = document.getElementsByClassName(bonus);
    let bonusAmount = bonusesObject[bonus][0]
    for (let i=0; i<allBonusInstances.length; i++) {
      let item = allBonusInstances.item(i);
        item.innerHTML = "+ &nbsp;" + bonusAmount + " MP &nbsp;&nbsp;" + bonusesObject[bonus][1] + "<br>";
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
const cardInfoList = [];



const cardTitleObj = {

}



function mpLogObj(object) {
    let title = object.title;
    let rexlink = object.rexLink
    let videolink = object.video;
    let sectionsArray = object.sectionLog;
    let thumbnail = object.thumbnail;
    let gif = object.gif;


    let logContainer = document.getElementById("all-logs");
    let randomNumber = Math.floor(Math.random()*11);
    let classTitle = title.split(" ")[0] + randomNumber;
    object.classTitle = classTitle;
    //console.log(classTitle)
    let newLog = `<br> <div class="mpLog"> <div class="titlestuff"> <strong> ${title} <br> <a href="${rexlink}"> Rex Import </a> -- <a href="${videolink}"> Video Link</a> </strong> </div> <br>`
    newLog += `<div class="image" id="image-${classTitle}"> <img src="${thumbnail}" height="150px"> </div> <br> <div id="button-${classTitle}"> <i>(click to show/hide card details)</i></div>`
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
    cardTitleObj[classTitle] = object;

    
    
}


function calculations() {

  //calculatedSubtotals = [];
  for (let i=0; i<allSubtotals.length; i++) {
    let calculated = 0;
    let group = allSubtotals[i];
    let currentSubtotal = document.getElementById(`subtotals-${i}`);
    let bonusKeys = Object.getOwnPropertyNames(bonusesObject);

    for (let j=0; j<group.length; j++) {
      let item = group[j];
    

      if (bonusKeys.includes(item.substring(0, item.length - 1))) {
    
        //we are a potential multiplier
        let bonusName = item.substring(0, item.length - 1)
        if (bonusesObject[bonusName][2] == "multiplied") {
          
          let type = item.charAt(item.length - 1);
          
            if (type == "p") type = "partialBody";
            else if (type == "h") type = "halfBody";
            else if (type == "f") type = "fullBody";
          
          calculated += (bonusesObject[bonusName][0] * bonusesObject[type][0]);
        } else {
          calculated += bonusesObject[bonusName][0]
        }
      } else {
        calculated += bonusesObject[item][0];
      }
    }
    currentSubtotal.innerHTML = `<i>Subtotal: ${calculated} MP</i>`
    calculatedSubtotals[i] = (calculated);
      
  /*
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
      */
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
    
      }
      else {
        //console.log(item);
        //console.log(bonusesObject[item])
        calculated += bonusesObject[item][0];
        currentSubtotal.innerHTML = `<i>Subtotal: ${calculated} MP</i>`
    
      }
    }
    calculatedSubtotals[i] = (calculated);
    }*/
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
      //console.log("CLICK YEAHHHHH")
      let style = cardInfo.getAttribute("style");
      if (style == "" || style == null) 
        cardInfo.setAttribute("style", "display:none")
      else
        cardInfo.setAttribute("style", "")
    })
    }

  let image = document.getElementById(`image-${classTitle}`);
  image.addEventListener('mouseenter', (e) => {
      imageToGif(e.target)
    });
    image.addEventListener('mouseleave', (e) => {
      gifToImage(e.target)
  });

  }
}


function imageToGif(image) {
  let id = image.getAttribute('id').split('-')[1];
  let cardObj = cardTitleObj[id]
  if (cardObj.gif != undefined) {
    image.innerHTML = `<img src="${cardObj.gif}" height="150px">`
  }
}
function gifToImage(image) {
  let id = image.getAttribute('id').split('-')[1];
  let cardObj = cardTitleObj[id]
  if (cardObj.thumbnail != undefined) {
    image.innerHTML = `<img src="${cardObj.thumbnail}" height="150px">`
  }
  //image.setAttribute('src', cardObj.thumbnail)
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
