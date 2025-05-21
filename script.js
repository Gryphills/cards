
const bonusesObject = {

  partialBody : [ 2, "Partial Body (1-2 sections)" , 'none'],
  halfBody  : [ 7, "Half Body (3-5 sections)" , 'none'],
  fullBody  : [14, "Full Body (6-7 sections)", 'none'],

  animationPrinciples  : [1, "Animation Principles", 'multiplied'],
  offsetDetails  : [0, "Offset Details", 'multiplied'],
  trad3: [4, "3 or more hand-drawn frames BETWEEN keys", 'multiplied'],

  shading  : [5, "Shaded", 'flat'],
  traditional  : [3, "Traditional Bonus (keys + at least 1 inbetween are drawn)", 'multiplied'],

  magic  : [2, "Magic", 'none'],
  jewellery  : [1, "Jewellery", 'none'],
  accessories  : [2, "Accessories", 'none'],
  outfit  : [2, "Clothing", 'none'],

  /*otherRex  : [2, "(Static) Other Player Rex"],
  otherRexAnim  : [4, "Animated Other Player Rex"],
  companion  : [1, "(Static) Companion"],
  companionAnim  : [2, "Animated Companion"],*/

  bgSimple  : [4, "Simple Animated BG (stacks w other bg bonus)", 'none'],
  bgComplex  : [10, "Complex Animated BG (stacks w other bg bonus)", 'none'],
  tinyFlair: [5, "Small Animated Flair (ONLY applies to regular art cards)", 'none'],
  

  abstract  : [1, "Abstract BG", 'none'],
  pOrE  : [4, "Planes OR Elements", 'none'],
  pAndE  : [10, "Planes AND Elements", 'none'],

  staticBody: [1, "Static Body Sections (never moves)", 'static'],
  staticShading: [2, "Static Shading", 'static'],
  staticFlat: [1, 'Static Flat', 'static'],
  normalBody: [1, "Body Sections", 'static'],
  normalShading: [2, "Shaded/Painted", 'static'],
  normalFlat: [1, 'Flat Colored', 'static']
};
  
const fixedStuff = ["abstract", "pOrE", "pAndE", 'staticBody', 'staticShading', 'staticFlat', 'normalBody', 'normalShading', 'normalFlat'];

const multiplied = ['animationPrinciples','offsetDetails', 'trad3', 'shading',  'traditional']
const bodyParts = ['partialBody', 'halfBody', 'fullBody']


function start () {
  let bonusKeys = Object.getOwnPropertyNames(bonusesObject);
  for (let i=0; i<fixedStuff.length; i++) {
    let index = bonusKeys.indexOf(fixedStuff[i]);
    bonusKeys.splice(index, 1);
  }
  let index = bonusKeys.indexOf('offsetDetails');
  bonusKeys.splice(index, 1);
  /*
  for (let i=0; i<bodyParts.length; i++) {
    let index = bonusKeys.indexOf(bodyParts[i]);
    bonusKeys.splice(index, 1);
  }
  */
  //<div id='thing' class='bonusvalue'> <input type="number" id="partialBody" class="inputbox"> Partial Body (1-2 sections) <br> </div>

  let htmlContainer = document.getElementById('bonus-values');
  let bonusValueStuff = `<div class="valuecategory">  <p><strong> Moving Body Sections:</strong> </p>`
  for (let i=0; i < bonusKeys.length; i++) {
    let currentBonus = bonusKeys[i];
    let bonusHtml = `<div id="value-${currentBonus}" class='bonusvalue'>`
    if (bonusesObject[currentBonus][2] != 'none') {
      if (bonusesObject[currentBonus][2] == 'multiplied') {
        bonusHtml += `<input type="radio" name="multiply-${currentBonus}" id="multiplied-${currentBonus}" value="multiplied" checked> <input type="radio" name="multiply-${currentBonus}" id="flat-${currentBonus}" value="flat"> &nbsp;&nbsp; `
      } else {
        bonusHtml += `<input type="radio" name="multiply-${currentBonus}" id="multiplied-${currentBonus}" value="multiplied"> <input type="radio" name="multiply-${currentBonus}" id="flat-${currentBonus}" value="flat" checked> &nbsp;&nbsp; `
      }
    } else {
      bonusHtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`
    }
    bonusHtml += `<input type="number" id="input-${currentBonus}" class="inputbox"> ${bonusesObject[currentBonus][1]} <br> </div>`
    bonusValueStuff += bonusHtml;

    if (i == 2) {
      bonusValueStuff += `</div><div class="valuecategory"><p><strong>Additional Bonuses: </strong> <br> <i> Use radio buttons to change if this bonus is multiplied by the body sections bonus, or if it should be flat</i> <br><br> (x)&nbsp;(_)</p>`
    } else if (i==6) {
      bonusValueStuff += `</div> <div class="valuecategory"><p><strong> Flat bonuses:</strong></p>`
    } else if (i == 10) {
      bonusValueStuff += `</div> <div class="valuecategory"> <p><strong>Animated Background:</strong></p>`
    }

    
    
    /*
    htmlItem.addEventListener("input", (e) => {
      bonusesObject[currentBonus][0] = Number(e.target.value);
      updateValues(currentBonus);
      writeMPlogStuff(currentBonus);
      calculations();
    })*/
    writeBonuses(currentBonus);
  }
  htmlContainer.innerHTML += bonusValueStuff

  for (let i=0; i < bonusKeys.length; i++) {
    let currentBonus = bonusKeys[i];
    let htmlItem = document.getElementById(`input-${currentBonus}`);
    htmlItem.setAttribute("value", bonusesObject[currentBonus][0])
  }

  for (let i=0; i<fixedStuff.length; i++) {
    writeBonuses(fixedStuff[i])
  }

  
    let allNoteInstances = document.getElementsByClassName("note_");
    for (let i=0; i<allNoteInstances.length; i++) {
      let item = allNoteInstances.item(i);
        let classes = item.getAttribute('class');
        classes = classes.split(" ");
        let note = "";
        for (let i=0; i < classes.length; i++) {
          if (classes[i].includes('*')) {
            note = classes[i].replaceAll("*", " ");
            break;
          }
        }

        item.innerHTML = "<i>" + note + "</i>";
    }
  
  

  document.addEventListener('input', (e) => {
    if ( e.target.type == 'radio' ) {
      let id = e.target.id;
      id = id.split("-")[1];
      if (id != undefined) {
        bonusesObject[id][2] = String(e.target.value);
        writeBonuses(id)
        calculations();
      }
    }
    if (e.target.type == 'number') {
      let id = e.target.id;
      id = id.split("-")[1];
      if (id != undefined){
        bonusesObject[id][0] = Number(e.target.value);
        writeBonuses(id);
        if (id == 'partialBody' || id == 'halfBody' || id=='fullBody') {
          for (let i=0; i<multiplied.length; i++) {
            writeBonuses(multiplied[i])
          }
        }
        calculations();
      }
    }
});

}



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
        item.innerHTML = "+ &nbsp;" + bonusAmount + " MP &nbsp;&nbsp;" +  bonusesObject[bonus][1] + "<i> (" + bonusesObject[bonus][0] + "x Body  Bonus)</i> <br>"
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
  
  else if (bonusesObject[bonus][2] == 'static') {
    let allBonusInstances = document.getElementsByClassName(bonus);
    //let bonusAmount = bonusesObject[bonus][0]
    for (let i=0; i<allBonusInstances.length; i++) {
      let item = allBonusInstances.item(i);
      let classes = item.getAttribute('class').split(" ")
      let sections = 0;
      for (let i=0; i < classes.length; i++) {
        //console.log(classes[i]);
        if (classes[i].length == 1){
          sections = classes[i];
          break
        }
      }
      let bonusAmount = Number(sections) * bonusesObject[bonus][0];
      item.innerHTML = "+ &nbsp;" + bonusAmount + " MP &nbsp;&nbsp;" + bonusesObject[bonus][1] + "<br>";
    }
  }
}



const allSubtotals = [];
const allTotals = [];
const calculatedSubtotals = [];
const cardInfoList = [];



const cardTitleObj = {

}



function mpLogObj(object, container) {
    let title = object.title;
    let rexlink = object.rexLink
    let videolink = object.video;
    let sectionsArray = object.sectionLog;
    let thumbnail = object.thumbnail;


    let logContainer = document.getElementById("all-logs");
    if (container != null) {
      logContainer = document.getElementById(container);
    };
    let randomNumber = Math.floor(Math.random()*11);
    let classTitle = title.split(" ")[0] + randomNumber;
    object.classTitle = classTitle;
    //console.log(classTitle)
    let newLog = `<br> <div class="mpLog"> <div class="titlestuff"> <strong> ${title} </strong> <br>`
    if (object.rexName != 'no' && object.rexName != undefined) {
      newLog += ` <i> for ${object.rexName} </i> <br>`
    }
    if (videolink != 'no' && videolink != undefined) {
      newLog +=` <a href="${videolink}"> Video Link</a>  `
    }
    newLog += `</div> <br> <div class="image" id="image-${classTitle}"> <img src="${thumbnail}" height="150px"> </div> <br> <div id="button-${classTitle}"> <i>(click to show/hide card details)</i></div>`
    newLog += `<div class="cardcontainer" id="cardinfo-${classTitle}" style="display:none"> `

    for (let i=0; i<sectionsArray.length; i++) {
      let section = sectionsArray[i];
      let subtotal = [];
      for (let j=0; j<section.length; j++) {
        if (!section[j].includes('offset')) {

          if (j==0) {
            newLog += `<div class="sectionstart"> ${section[0]}: </div>`;
          }
          else {
            newLog += `<div class="${section[j]} inputrows"> </div>`
            if (!section[j].includes('note_')) {
              subtotal.push(section[j])
            }
          }
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
      let item = group[j].split(" ")[0];
    
      if (item != 'note_') {
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
        } else if (bonusesObject[item][2] == "static") {
            let sections = group[j].charAt(group[j].length - 1)
            calculated += Number(sections) * bonusesObject[item][0];
        } else if (item != "note_") {
          calculated += bonusesObject[item][0];
        }
      }
      currentSubtotal.innerHTML = `<i><strong>Subtotal: ${calculated} MP</strong></i>`
      calculatedSubtotals[i] = (calculated);
    }
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

mpLogObj(sirius)
mpLogObj(minecraftRun)
mpLogObj(scipiosLook)
mpLogObj(tritTrot)
//mpLogObj(hyllinFight)
mpLogObj(selkieSwim)
mpLogObj(coac)
mpLogObj(coac2)
mpLogObj(foxJump)

//let logContainer = document.getElementById("all-logs");

//mid body
mpLogObj(flowerCrown)
mpLogObj(starburst)
mpLogObj(astra)
mpLogObj(headbang)


//partial body

mpLogObj(ervioWave)
mpLogObj(gotSticks)

//slight bonus

mpLogObj(glacialPixel, 'normal-logs');
mpLogObj(miliCombined, 'normal-logs');
mpLogObj(panningBg, 'normal-logs')

start();

calculations();

buttonFunctions();

