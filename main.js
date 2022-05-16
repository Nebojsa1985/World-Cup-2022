console.log(db);

let groupsTableBody = document.querySelector('#groups-table-body')

//create accounts table
createAcountsTable()


function createAcountsTable() {
    let groupsAccounts = ''
    for (let i = 0; i < db.length; i++) {
        const account = db[i]

        groupsAccounts += `   

    <table>
    <tbody id="wcGroup">
    <tr>
        <th>Group ${account.id}</th>
        <th>Goals Scored</th>
        <th>Goals Conceded</th>
        <th>Goal diference</th>
        <th>Points</th>
    </tr>
    <tr id="team1Row">
        <td id="teamName">${account.team1}</td>
        <td id="goalsScored">0</td>
        <td id="goalsConceaded">0</td>
        <td id="goalsDiference">0</td>
        <td id="groupPoints">0</td>
    </tr>
    <tr id="team2Row">
        <td id="teamName">${account.team2}</td>
        <td id="goalsScored">0</td>
        <td id="goalsConceaded">0</td>
        <td id="goalsDiference">0</td>
        <td id="groupPoints">0</td>
    </tr>
    <tr id="team3Row">
        <td id="teamName">${account.team3}</td>
        <td id="goalsScored">0</td>
        <td id="goalsConceaded">0</td>
        <td id="goalsDiference">0</td>
        <td id="groupPoints">0</td>
    </tr>
    <tr id="team4Row">
        <td id="teamName">${account.team4}</td>
        <td id="goalsScored">0</td>
        <td id="goalsConceaded">0</td>
        <td id="goalsDiference">0</td>
        <td id="groupPoints">0</td>
    </tr>
    </tbody>
    </table>

    <div class="group-pairs">    
    <div id="first-leg">    
    <p id="match1">${account.team1} vs ${account.team2} <span id="team1Goal">0</span>:<span id="team2Goal">0</span></p>
    <p id="match2">${account.team3} vs ${account.team4} <span id="team3Goal">0</span>:<span id="team4Goal">0</span></p>
    </div> 
    <div id="second-leg">   
    <p id="match1">${account.team1} vs ${account.team3} <span id="team1Goal">0</span>:<span id="team3Goal">0</span></p>
    <p id="match2">${account.team2} vs ${account.team4} <span id="team2Goal">0</span>:<span id="team4Goal">0</span></p>
    </div> 
    <div id="third-leg">   
    <p id="match1">${account.team1} vs ${account.team4} <span id="team1Goal">0</span>:<span id="team4Goal">0</span></p>
    <p id="match2">${account.team2} vs ${account.team3} <span id="team2Goal">0</span>:<span id="team3Goal">0</span></p>
    </div> 
    <br>
    </div>  


        `      
    }

    groupsTableBody.innerHTML = groupsAccounts

}
//simulate group results
const fl = document.querySelectorAll('#first-leg  > p > span')
const sl = document.querySelectorAll('#second-leg  > p > span')
const tl = document.querySelectorAll('#third-leg  > p > span')

function simulateLeg(leg){
    for (let i = 0; i < leg.length; i++) {
         let res = Math.floor(Math.random() * 5)
         leg[i].innerHTML = res
    }
}




//add group table data
function countGoals(teamOneName,teamTwoName,teamOneGoals,teamTwoGoals,teamOnegoalsScored,teamOnegoalsConceaded,teamOnegoalsDiference,teamOnegroupPoints,teamTwogoalsScored,teamTwogoalsConceaded,teamTwogoalsDiference,teamTwogroupPoints) {

    for (let i = 0; i < teamOneGoals.length; i++) {
           let tm1gs = parseInt(teamOneGoals[i].innerHTML)
           let tm2gs = parseInt(teamTwoGoals[i].innerHTML)

           teamOnegoalsScored[i].innerHTML = parseInt(teamOnegoalsScored[i].innerHTML) + tm1gs
           teamOnegoalsConceaded[i].innerHTML = parseInt(teamOnegoalsConceaded[i].innerHTML) + tm2gs
           teamOnegoalsDiference[i].innerHTML = parseInt(teamOnegoalsScored[i].innerHTML) - parseInt(teamOnegoalsConceaded[i].innerHTML)

           if(tm1gs > tm2gs) {
            teamOnegroupPoints[i].innerHTML = parseInt(teamOnegroupPoints[i].innerHTML) + 3
           } else if(tm1gs == tm2gs) {
            teamOnegroupPoints[i].innerHTML = parseInt(teamOnegroupPoints[i].innerHTML) + 1
           }

          teamTwogoalsScored[i].innerHTML = parseInt(teamTwogoalsScored[i].innerHTML) + tm2gs
          teamTwogoalsConceaded[i].innerHTML = parseInt(teamTwogoalsConceaded[i].innerHTML) + tm1gs
          teamTwogoalsDiference[i].innerHTML = parseInt(teamTwogoalsScored[i].innerHTML) - parseInt(teamTwogoalsConceaded[i].innerHTML)
  
           if(tm2gs > tm1gs) {
           teamTwogroupPoints[i].innerHTML = parseInt(teamTwogroupPoints[i].innerHTML) + 3
           } else if(tm2gs == tm1gs) {
           teamTwogroupPoints[i].innerHTML = parseInt(teamTwogroupPoints[i].innerHTML) + 1
           } 

     }
  }
 

         

const tm1g1 = document.querySelectorAll('#first-leg > p > #team1Goal')
const tm2g1 = document.querySelectorAll('#first-leg > p > #team2Goal')
const tm3g1 = document.querySelectorAll('#first-leg > p > #team3Goal')
const tm4g1 = document.querySelectorAll('#first-leg > p > #team4Goal')

const tm1g2 = document.querySelectorAll('#second-leg > p > #team1Goal')
const tm2g2 = document.querySelectorAll('#second-leg > p > #team2Goal')
const tm3g2 = document.querySelectorAll('#second-leg > p > #team3Goal')
const tm4g2 = document.querySelectorAll('#second-leg > p > #team4Goal')

const tm1g3 = document.querySelectorAll('#third-leg > p > #team1Goal')
const tm2g3 = document.querySelectorAll('#third-leg > p > #team2Goal')
const tm3g3 = document.querySelectorAll('#third-leg > p > #team3Goal')
const tm4g3 = document.querySelectorAll('#third-leg > p > #team4Goal')

const name1t = document.querySelectorAll('#team1Row > #teamName')
const gs1t = document.querySelectorAll('#team1Row > #goalsScored')
const gc1t = document.querySelectorAll('#team1Row > #goalsConceaded')
const gd1t = document.querySelectorAll('#team1Row > #goalsDiference')
const gp1t = document.querySelectorAll('#team1Row > #groupPoints')

const name2t = document.querySelectorAll('#team2Row > #teamName')
const gs2t = document.querySelectorAll('#team2Row > #goalsScored')
const gc2t = document.querySelectorAll('#team2Row > #goalsConceaded')
const gd2t = document.querySelectorAll('#team2Row > #goalsDiference')
const gp2t = document.querySelectorAll('#team2Row > #groupPoints')

const name3t = document.querySelectorAll('#team3Row > #teamName')
const gs3t = document.querySelectorAll('#team3Row > #goalsScored')
const gc3t = document.querySelectorAll('#team3Row > #goalsConceaded')
const gd3t = document.querySelectorAll('#team3Row > #goalsDiference')
const gp3t = document.querySelectorAll('#team3Row > #groupPoints')

const name4t = document.querySelectorAll('#team4Row > #teamName')
const gs4t = document.querySelectorAll('#team4Row > #goalsScored')
const gc4t = document.querySelectorAll('#team4Row > #goalsConceaded')
const gd4t = document.querySelectorAll('#team4Row > #goalsDiference')
const gp4t = document.querySelectorAll('#team4Row > #groupPoints')


document.querySelector("#fl-button").addEventListener('click',() => {
    simulateLeg(fl)
    countGoals(name1t,name2t,tm1g1,tm2g1,gs1t,gc1t,gd1t,gp1t,gs2t,gc2t,gd2t,gp2t)
    countGoals(name3t,name4t,tm3g1,tm4g1,gs3t,gc3t,gd3t,gp3t,gs4t,gc4t,gd4t,gp4t)
    document.querySelector("#fl-button").style.display = "none"
    document.querySelector("#sl-button").style.display = "block"
})

document.querySelector("#sl-button").addEventListener('click',() => {
    simulateLeg(sl)
    countGoals(name1t,name3t,tm1g2,tm3g2,gs1t,gc1t,gd1t,gp1t,gs3t,gc3t,gd3t,gp3t)
    countGoals(name2t,name4t,tm2g2,tm4g2,gs2t,gc2t,gd2t,gp2t,gs4t,gc4t,gd4t,gp4t)
    document.querySelector("#sl-button").style.display = "none"
    document.querySelector("#tl-button").style.display = "block"
})

document.querySelector("#tl-button").addEventListener('click',() => {
    simulateLeg(tl)
    countGoals(name1t,name4t,tm1g3,tm4g3,gs1t,gc1t,gd1t,gp1t,gs4t,gc4t,gd4t,gp4t)
    countGoals(name2t,name3t,tm2g3,tm3g3,gs2t,gc2t,gd2t,gp2t,gs3t,gc3t,gd3t,gp3t)
    document.querySelector("#tl-button").style.display = "none"
    document.querySelector("#draw-button").style.display = "block"    
})
const groupPairsA = [] 
const firstA = []
const secondA = [] 
document.querySelector("#draw-button").addEventListener('click',() => {
     

    const groups = document.querySelectorAll("#wcGroup");
	for (var i = 0; i < groups.length; i++) {
      const group = groups[i].children
      const kex = Array.from(group)

        let after = [
          {
            "name" : kex[1].children[0].innerHTML,
            "goalsScored" : kex[1].children[1].innerHTML,
            "goalsConceded" : kex[1].children[2].innerHTML,
            "goalsDiference" : kex[1].children[3].innerHTML,
            "groupPoints" : kex[1].children[4].innerHTML
          },{
            "name" : kex[2].children[0].innerHTML,
            "goalsScored" : kex[2].children[1].innerHTML,
            "goalsConceded" : kex[2].children[2].innerHTML,
            "goalsDiference" : kex[2].children[3].innerHTML,
            "groupPoints" : kex[2].children[4].innerHTML
          },{
            "name" : kex[3].children[0].innerHTML,
            "goalsScored" : kex[3].children[1].innerHTML,
            "goalsConceded" : kex[3].children[2].innerHTML,
            "goalsDiference" : kex[3].children[3].innerHTML,
            "groupPoints" : kex[3].children[4].innerHTML
          },{
            "name" : kex[4].children[0].innerHTML,
            "goalsScored" : kex[4].children[1].innerHTML,
            "goalsConceded" : kex[4].children[2].innerHTML,
            "goalsDiference" : kex[4].children[3].innerHTML,
            "groupPoints" : kex[4].children[4].innerHTML
          }        
        ]
      
        after.sort((a,b)=> (a.groupPoints.localeCompare(b.groupPoints) || a.goalsDiference - b.goalsDiference || a.goalsScored - b.goalsScored));
    
        groupPairs = after.slice(2)
        first = after.slice(3)
        second = after.slice(-2, -1)

        groupPairs.forEach(element => groupPairsA.push(element.name))  
        first.forEach(element => firstA.push(element.name))    
        second.forEach(element => secondA.push(element.name))
      
	}


    console.log(groupPairsA);

    function simulateEliminationRound(x,y){

            let teamOne = Math.floor(Math.random() * firstA.length)
            let teamTwo = Math.floor(Math.random() * secondA.length)

            if (teamTwo === teamOne) {
                teamTwo = Math.floor(Math.random() * secondA.length)
            }
            console.log('team1: '+firstA[teamOne]);
            console.log('team2: '+secondA[teamTwo]);
            document.querySelector(x).innerHTML = firstA[teamOne]
            document.querySelector(y).innerHTML = secondA[teamTwo]
            firstA.splice(teamOne,1)
            secondA.splice(teamTwo,1)



    }
    simulateEliminationRound('#elTeam1','#elTeam2')
    simulateEliminationRound('#elTeam3','#elTeam4')
    simulateEliminationRound('#elTeam5','#elTeam6')
    simulateEliminationRound('#elTeam7','#elTeam8')
    simulateEliminationRound('#elTeam9','#elTeam10')
    simulateEliminationRound('#elTeam11','#elTeam12')
    simulateEliminationRound('#elTeam13','#elTeam14')
    simulateEliminationRound('#elTeam15','#elTeam16')

    groupsTableBody.style.display = "none"
    document.querySelector("#draw-button").style.display = "none"
    document.querySelector("#elimination-round-body").style.display = "grid"
    document.querySelector("#er-button").style.display = "block"
})



//simulate elimination results
const er = document.querySelectorAll('#elimination-match  > #elTeamGoal')
const qf = document.querySelectorAll('#q-match  > #qTeamGoal')
const sf = document.querySelectorAll('#semi-match  > #semiTeamGoal')
const fg = document.querySelectorAll('#final-match  > #finalTeamGoal')
const winTeam = document.querySelector('#winner')

const elimin = document.querySelectorAll('#elimination-match')
const quarter = document.querySelectorAll('#q-match')
const semi = document.querySelectorAll('#semi-match')
const final = document.querySelectorAll('#final-match')

const qteams = document.querySelectorAll('#qTeam')
const semiteams = document.querySelectorAll('#semiTeam')
const finalteams = document.querySelectorAll('#finalTeam')

function simulateRoundMatch(leg){
    for (let i = 0; i < leg.length; i++) {
         let res = Math.floor(Math.random() * 5)
         leg[i].innerHTML = res
    }    
}

function drawElimination(x,y) {
for (let i = 0; i < x.length; i++) {
    const team1 = x[i].children[0].innerHTML
    const team2 = x[i].children[1].innerHTML
    const tg1 = parseInt(x[i].children[2].innerHTML) 
    const tg2 = parseInt(x[i].children[3].innerHTML)
    if (tg1 > tg2) {
        y[i].innerHTML = team1
    }
    if (tg1 < tg2) {
        y[i].innerHTML = team2
    }
    if (tg1 == tg2) {
        let penalty = Math.floor(Math.random() * 1)
        if(penalty == 0) {
            x[i].innerHTML = x[i].innerHTML + '(' + team1 + '-Pen.win' + ')'
            y[i].innerHTML = team1
        } else {
            x[i].innerHTML = x[i].innerHTML + '(' + team2 + '-Pen.win' + ')'
            y[i].innerHTML = team2
        }        
        } 
    }
}

function finalGame(x,y) {
    for (let i = 0; i < x.length; i++) {
        const team1 = x[i].children[0].innerHTML
        const team2 = x[i].children[1].innerHTML
        const tg1 = parseInt(x[i].children[2].innerHTML) 
        const tg2 = parseInt(x[i].children[3].innerHTML)
        if (tg1 > tg2) {
            y.innerHTML = team1 + ' won the World Cup!!!!'
        }
        if (tg1 < tg2) {
            y.innerHTML = team2 + ' won the World Cup!!!!'
        }
        if (tg1 == tg2) {
            let penalty = Math.floor(Math.random() * 1)
            if(penalty == 0) {
                x[i].innerHTML = x[i].innerHTML + '(' + team1 + '-Pen.win' + ')'
                y.innerHTML = team1 + ' won the World Cup!!!!'
            } else {
                x[i].innerHTML = x[i].innerHTML + '(' + team2 + '-Pen.win' + ')'
                y.innerHTML = team2  + ' won the World Cup!!!!'
            }        
            } 
        }
    }

document.querySelector("#er-button").addEventListener('click',() => {
    simulateRoundMatch(er)
    drawElimination(elimin,qteams)
    document.querySelector("#er-button").style.display = 'none'
    document.querySelector("#q-button").style.display = 'block'
})

document.querySelector("#q-button").addEventListener('click',() => {
    simulateRoundMatch(qf)
    drawElimination(quarter,semiteams)
    document.querySelector("#q-button").style.display = 'none'
    document.querySelector("#semi-button").style.display = 'block'
})
document.querySelector("#semi-button").addEventListener('click',() => {
    simulateRoundMatch(sf)
    drawElimination(semi,finalteams)
    document.querySelector("#semi-button").style.display = 'none'
    document.querySelector("#final-button").style.display = 'block' 
})
document.querySelector("#final-button").addEventListener('click',() => {
    simulateRoundMatch(fg)  
    finalGame(final,winTeam)    
    document.querySelector("#final-button").style.display = 'none' 
    document.querySelector("body").style.background = "url('./img/trophypreview.png')" 
    document.querySelector("body").style.color= "black" 
    setInterval(createTrophy, 300);
})

//funkcija kisa trofeja
function createTrophy() {
    const trophy = document.createElement('div');
    trophy.classList.add('trophy');

    trophy.style.left = Math.random() * 100 + 'vw';

    trophy.style.animationDuration = Math.random() * 2 + 3 + 's';

    trophy.innerText = '🏆';

    document.body.appendChild(trophy);

    setTimeout(()=>{
        trophy.remove();
    }, 2000);

}