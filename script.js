
const bonusesObject = {

  partialBody : [ 2, "Partial Body (1-2 sections)" ],
  halfBody  : [ 7, "Half Body (3-5 sections)" ],
  fullBody  : [15, "Full Body (6-7 sections)"],

  animationPrinciples  : [10, "Animation Principles"],
  offsetDetails  : [10, "Offset or Complex Details"],

  shading  : [3, "Shaded"],
  traditional  : [4, "x body - Traditional Bonus"],

  magic  : [4, "Magic"],
  jewellery  : [2, "Jewellery"],
  accessories  : [4, "Accessories"],
  outfit  : [4, "Clothing"],

  otherRex  : [2, "(Static) Other Player Rex"],
  otherRexAnim  : [4, "Animated Other Player Rex"],
  companion  : [1, "(Static) Companion"],
  companionAnim  : [2, "Animated Companion"],

  bgSimple  : [4, "Simple Animated BG (stacks)"],
  bgComplex  : [10, "Complex Animated BG (stacks)"],
  

  abstract  : [1, "Abstract BG"],
  pOrE  : [4, "Planes OR Elements"],
  pAndE  : [10, "Planes AND Elements"]
};
  
const bgStuff = ["abstract", "pOrE", "pAndE"];

const bkanim = {
  title: "Where am I?",
  rexLink: 'link',
  video: 'link',
  thumbnail: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d5874dce-fbf8-4a24-9ac6-7ff8037c25dc/digv9gz-1ea3ca16-0886-45b4-a56b-1a371c4b15ec.jpg/v1/fill/w_1039,h_769,q_70,strp/faces_of_anxiety_by_babykitten123_digv9gz-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q1ODc0ZGNlLWZiZjgtNGEyNC05YWM2LTdmZjgwMzdjMjVkY1wvZGlndjlnei0xZWEzY2ExNi0wODg2LTQ1YjQtYTU2Yi0xYTM3MWM0YjE1ZWMuanBnIiwiaGVpZ2h0IjoiPD0xNDIxIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvZDU4NzRkY2UtZmJmOC00YTI0LTlhYzYtN2ZmODAzN2MyNWRjXC9iYWJ5a2l0dGVuMTIzLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.ycV-RJ-Ow82pL3tYrT9KvwvhL7BB0GSQrlbupsNi2nw',
  sectionLog: [
    ['movement-1', 'fullBody', 'animationPrinciples', 'traditionalf'],
    ['movement-2', 'fullBody', 'animationPrinciples', 'traditionalf'],
    ['movement-3', 'fullBody', 'animationPrinciples', 'traditionalf', 'offsetDetails']
  ]
}


const flowerCrown = {
  title: "Flower Crown Fun",
  sectionLog: [
    ['Overall Bonuses', 'pAndE'],
    ['1-2', 'partialBody', 'animationPrinciples', 'accessories', 'shading'],
    ['2-3', 'halfBody', 'animationPrinciples', 'accessories', 'shading'],
    ['3-4', 'halfBody', 'animationPrinciples', 'accessories', 'shading']
  ],
  rexLink: 'https://rexalia.world/rex/1843',
  video: 'https://wixmp-ed30a86b8c4ca887773594c2.wixmp.com/v/mp4/66d32d06-14be-4636-b25f-95141f65a139/dho6i92-9d585a31-4e62-43b9-baec-14649c9f38bd.VideoQualities.res_1080p.cd5fdeb1f78a48869f03a16a4e08afb7.mp4',
  thumbnail: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/66d32d06-14be-4636-b25f-95141f65a139/dho6i92-bdd2204f-db03-42a1-893a-146fb860c19c.jpg/v1/fill/w_1069,h_748,q_70,strp/flower_crown_crafts___animation_by_gryphonillustrations_dho6i92-pre.jpg'
}

const sharkSave = {
  title: 'Shark Save',
  video: 'https://wixmp-ed30a86b8c4ca887773594c2.wixmp.com/v/mp4/66d32d06-14be-4636-b25f-95141f65a139/dhrez0e-bc4e7463-e482-4356-88ec-d748514caa48.VideoQualities.res_1080p.9d4603cfda884763b8cc8806c0fe4a8b.mp4',
  thumbnail: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/66d32d06-14be-4636-b25f-95141f65a139/dhrez0e-5e5f9fc3-d4f8-4312-b4bb-fd091653824c.jpg/v1/fill/w_1192,h_670,q_70,strp/shark_save____animation_by_gryphonillustrations_dhrez0e-pre.jpg',
  rexLink: 'https://rexalia.world/rex/2237',
  sectionLog: [
    ['Overall Bonuses', 'pAndE', 'bgSimple'],
    ['fr6-7', 'fullBody', 'animationPrinciples', 'shading'],
    ['fr7-8', 'fullBody', 'animationPrinciples', 'shading'],
    ['fr8-9', 'fullBody', 'animationPrinciples', 'shading', 'offsetDetails']
  ]
}

const scipiosLook = {
  title: "scipiosLook",
  video: 'temp',
  thumbnail: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/66d32d06-14be-4636-b25f-95141f65a139/dho5tik-ccc4e5de-ca1f-4ac8-9c33-4ac0616999fc.gif/v1/fill/w_425,h_270,q_85,strp/scraps_test_by_gryphonillustrations_dho5tik-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjcwIiwicGF0aCI6IlwvZlwvNjZkMzJkMDYtMTRiZS00NjM2LWIyNWYtOTUxNDFmNjVhMTM5XC9kaG81dGlrLWNjYzRlNWRlLWNhMWYtNGFjOC05YzMzLTRhYzA2MTY5OTlmYy5naWYiLCJ3aWR0aCI6Ijw9NDI1In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.pACdT6FfHC10OCI8uc6T8kYjy097ZbigrXjLvMGJo2E',
  sectionLog: [
    ['Overall Bonuses', 'abstract'],
    ['1-10', 'fullBody', 'animationPrinciples', 'offsetDetails', 'traditionalf']
  ]
}

const minecraftRun = {
  title: 'minecraft Run',
  sectionLog: [
    ['frames 1-5', 'fullBody', 'animationPrinciples'],
    ['frames 5-10', 'fullBody', 'animationPrinciples']
  ]
}


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
  if (bonus.includes('traditional')) {
    let bodyArray = ['p', 'h', 'f'];    
    for (let b=0; b<bodyArray.length; b++) {
      let type = bodyArray[b]
      if (type == "p") type = "partialBody";
      if (type == "h") type = "halfBody";
      if (type == "f") type = "fullBody";
      let bonusAmount = (bonusesObject[type][0] * bonusesObject.traditional[0]) - bonusesObject[type][0]

      writeBonuses('traditional' + bodyArray[b], bonusAmount)
    }
  } else {
    bonusAmount = bonusesObject[bonus][0].toString();
    writeBonuses(bonus, bonusAmount)
  }
}

function writeBonuses(bonusName, bonusAmount) { //private/protected
  let allBonusInstances = document.getElementsByClassName(bonusName);
  for (let i=0; i<allBonusInstances.length; i++) {
    let item = allBonusInstances.item(i);
    if (bonusName.includes('traditional')) {
      bonusName = 'traditional';
      item.innerHTML = "+ &nbsp;" + bonusAmount + " MP &nbsp;&nbsp; Traditional Bonus (x" + bonusesObject['traditional'][0] + " Body bonus)"
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
  for (let i=0; i<allSubtotals.length; i++) {
    let calculated = 0;
    let group = allSubtotals[i];
    let currentSubtotal = document.getElementById(`subtotals-${i}`);

    for (let j=0; j<group.length; j++) {
      let item = group[j];
      
      if (item.includes("traditional")) {
        let type = item.charAt(item.length - 1);
        if (type == "p") type = "partialBody";
        if (type == "h") type = "halfBody";
        if (type == "f") type = "fullBody";
      
        let bonusAmount = (bonusesObject[type][0] * bonusesObject.traditional[0]) - bonusesObject[type][0]
        calculated += bonusAmount;
        currentSubtotal.innerHTML = `<i>Subtotal: ${calculated} MP</i>`
    
      }
      else {
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



mpLogObj(scipiosLook)

start();

calculations();

buttonFunctions();

