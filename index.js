
document.addEventListener('DOMContentLoaded',()=>{
    let firstName = document.getElementById("firstName")
    let lastName = document.getElementById("lastName")
    let playerHeight = document.getElementById('heightOfPlayer')
    let playerWeight = document.getElementById("weightOfPlayer")
    let playerBirthDate = document.getElementById("born")
    let playerFrom = document.getElementById('from')
    let playerDebut = document.getElementById('debut')
    let playerPrevious = document.getElementById('previously')
    let playerNumber = document.getElementById('Num')
    let playerPosition = document.getElementById('position')
    let playerImage = document.getElementById('imageOfPlayer')
    let count = 0
    likeCounter.innerText = count
    let liker = document.getElementById('liker')
    liker.style.cursor = 'pointer'


    // players
    const curry = document.getElementById('LebronJames')
    const klay = document.getElementById('RussellWestbrook')
    const iguodala = document.getElementById('AnthonyDavis')
    const draymond = document.getElementById('CarmeloAnthony')
    const wiggins = document.getElementById('MalikMonk')
    // stats
    let postMPG = document.getElementById('postMPG')
    let postFG = document.getElementById('postFG')
    let post3PT = document.getElementById('post3PT')
    let postFT = document.getElementById('postFT')
    let postPPG = document.getElementById('postPPG')
    let postRPG = document.getElementById('postRPG')
    let postAPG = document.getElementById('postAPG')
    let postBPG = document.getElementById('postBPG')
    let careerMPG = document.getElementById('careerMPG')
    let careerFG = document.getElementById('careerFG')
    let career3PT = document.getElementById('career3PT')
    let careerFT = document.getElementById('careerFT')
    let careerPPG = document.getElementById('careerPPG')
    let careerRPG = document.getElementById('careerRPG')
    let careerAPG = document.getElementById('careerAPG')
    let careerBPG = document.getElementById('careerBPG')

    let playerMPG = document.getElementById('playerMPG')
    let playerFG = document.getElementById('playerFG')
    let player3PT = document.getElementById('player3PT')
    let playerFT = document.getElementById('playerFT')
    let playerPPG = document.getElementById('playerPPG')
    let playerRPG = document.getElementById('playerRPG')
    let playerAPG = document.getElementById('playerAPG')
    let playerBPG = document.getElementById('playerBPG')
   



    curry.addEventListener('click',(e)=>{
        e.preventDefault()
        firstName.textContent = 'Lebron'
        lastName.textContent = 'James'
        playerHeight.textContent = 2.06
        playerWeight.textContent = 113
        playerBirthDate.textContent = '30 December, 1984'
        playerFrom.textContent = 'Miami Heat, Cleveland Cavaliers'
        playerNumber.textContent = '#6'
        playerPosition.textContent = 'Shooting guard  and Small forward'
        playerImage.src = './images/lebron.png'
        playerImage.style.height = '650px'
        playerImage.style.width = '400px'

        fetch("https://nba-players.herokuapp.com/players-stats/james/lebron")
        .then((res)=>res.json())
        .then((playerData)=>{
            postMPG.textContent =  playerData.minutes_per_game
            postFG.textContent = playerData.field_goal_percentage
            post3PT.textContent =  playerData.three_point_percentage
            postFT .textContent = playerData.free_throw_percentage
            postPPG.textContent =  playerData.points_per_game
            postRPG.textContent =  playerData.rebounds_per_game
            postAPG.textContent =  playerData.assists_per_game
            postBPG.textContent =  playerData.blocks_per_game
        })

        careerMPG.innerText = '36:54'
        careerFG.innerText =  54.49
        career3PT.innerText = 36.2
        careerFT.innerText = 93.5
        careerPPG.innerText =  74.5
        careerRPG.innerText = 26.8
        careerAPG.innerText = 8.6
        careerBPG.innerText = 1.1
    })


    klay.addEventListener('click',(e)=>{
        e.preventDefault()
        firstName.textContent = 'Russell'
        lastName.textContent = 'Westbrook'
        playerHeight.textContent = 1.91
        playerWeight.textContent = 91
        playerBirthDate.textContent = '12 November, 1988'
        playerFrom.textContent = 'Thunder six'
        // playerDebut.textContent = 2011
        // playerPrevious.textContent = 'GSW 2009 - Date'
        playerNumber.textContent = '#0'
        playerPosition.textContent = 'Point Guard'
        playerImage.src = './images/westbrook.jpeg'
        playerImage.style.height = '650px'
        playerImage.style.width = '400px'

        fetch("https://nba-players.herokuapp.com/players-stats/westbrook/russell")
        .then((res)=>res.json())
        .then((playerData)=>{
            postMPG.textContent =  playerData.minutes_per_game
            postFG.textContent = playerData.field_goal_percentage
            post3PT.textContent =  playerData.three_point_percentage
            postFT .textContent = playerData.free_throw_percentage
            postPPG.textContent =  playerData.points_per_game
            postRPG.textContent =  playerData.rebounds_per_game
            postAPG.textContent =  playerData.assists_per_game
            postBPG.textContent =  playerData.blocks_per_game
        })

        careerMPG.innerText = '35:52'
        careerFG.innerText =  44.4
        career3PT.innerText = 30.8
        careerFT.innerText = 70.8
        careerPPG.innerText =  25.4
        careerRPG.innerText = 9.5
        careerAPG.innerText = 9.9
        careerBPG.innerText = 0.2
        
    })

    iguodala.addEventListener('click',(e)=>{
        e.preventDefault()
        firstName.textContent = 'Anthony'
        lastName.textContent = 'Davis'
        playerHeight.textContent = 2.08
        playerWeight.textContent = 115
        playerBirthDate.textContent = '11 March, 1993'
        playerFrom.textContent = 'New Orleans Pelicans'
        // playerDebut.textContent = 2004
        // playerPrevious.textContent = 'Miami Heat'
        playerNumber.textContent = '#3'
        playerPosition.textContent = 'Power forward / Center'
        playerImage.src = './images/anthony.jpg'
        playerImage.style.height = '650px'
        playerImage.style.width = '400px'

        fetch("https://nba-players.herokuapp.com/players-stats/davis/anthony")
        .then((res)=>res.json())
        .then((playerData)=>{
            postMPG.textContent =  playerData.minutes_per_game
            postFG.textContent = playerData.field_goal_percentage
            post3PT.textContent =  playerData.three_point_percentage
            postFT .textContent = playerData.free_throw_percentage
            postPPG.textContent =  playerData.points_per_game
            postRPG.textContent =  playerData.rebounds_per_game
            postAPG.textContent =  playerData.assists_per_game
            postBPG.textContent =  playerData.blocks_per_game
        })
        careerMPG.innerText = '36:17'
        careerFG.innerText =  55.6
        career3PT.innerText = 34.7
        careerFT.innerText = 82
        careerPPG.innerText =  26.5
        careerRPG.innerText = 10.4
        careerAPG.innerText = 2.4
        careerBPG.innerText = 2.0
    })

    draymond.addEventListener('click',(e)=>{
        e.preventDefault()
        firstName.textContent = 'Carmelo'
        lastName.textContent = 'Anthony'
        playerHeight.textContent = 2.01
        playerWeight.textContent = 109
        playerBirthDate.textContent = '29 May, 1984'
        playerFrom.textContent = 'nuggets'
        // playerDebut.textContent = 2008
        // playerPrevious.textContent = 'USA National Team'
        playerNumber.textContent = '#7'
        playerPosition.textContent = 'Power Foward'
        playerImage.src = './images/carmelo.jpg'
        playerImage.style.height = '650px'
        playerImage.style.width = '400px'

        fetch("https://nba-players.herokuapp.com/players-stats/anthony/carmelo")
        .then((res)=>res.json())
        .then((playerData)=>{
            postMPG.textContent =  playerData.minutes_per_game
            postFG.textContent = playerData.field_goal_percentage
            post3PT.textContent =  playerData.three_point_percentage
            postFT .textContent = playerData.free_throw_percentage
            postPPG.textContent =  playerData.points_per_game
            postRPG.textContent =  playerData.rebounds_per_game
            postAPG.textContent =  playerData.assists_per_game
            postBPG.textContent =  playerData.blocks_per_game
        })

        careerMPG.innerText = '32.36'
        careerFG.innerText =  42.2
        career3PT.innerText = 30
        careerFT.innerText = 36.2
        careerPPG.innerText =  77.6
        careerRPG.innerText = 6.0
        careerAPG.innerText = 1.5
        careerBPG.innerText = 0.6
    })

    wiggins.addEventListener('click',(e)=>{
        e.preventDefault()
        firstName.textContent = 'Malik'
        lastName.textContent = 'Monk'
        playerHeight.textContent = 1.90
        playerWeight.textContent = 91
        playerBirthDate.textContent = 'February 4, 1998'
        playerFrom.textContent = 'Thornhill Canada'
        // playerDebut.textContent = 2011
        // playerPrevious.textContent = 'Minnesota Timberwolves'
        playerNumber.textContent = '#11'
        playerPosition.textContent = 'Shooting guard'
        playerImage.src = './images/monk.jpeg'
        playerImage.style.height = '650px'
        playerImage.style.width = '500px'

        fetch("https://nba-players.herokuapp.com/players-stats/monk/malik")
        .then((res)=>res.json())
        .then((playerData)=>{
            console.log(playerData.name);
            
            postMPG.textContent =  playerData.minutes_per_game
            postFG.textContent = playerData.field_goal_percentage
            post3PT.textContent =  playerData.three_point_percentage
            postFT .textContent = playerData.free_throw_percentage
            postPPG.textContent =  playerData.points_per_game
            postRPG.textContent =  playerData.rebounds_per_game
            postAPG.textContent =  playerData.assists_per_game
            postBPG.textContent =  playerData.blocks_per_game
        })

        careerMPG.innerText = '13:10'
        careerFG.innerText =  34.3
        career3PT.innerText = 33.9
        careerFT.innerText = 70.6
        careerPPG.innerText =  5.3
        careerRPG.innerText = 1.0
        careerAPG.innerText = 1.3
        careerBPG.innerText = 0.1
    })

    liker.addEventListener('click',(e)=>{
        e.preventDefault
        count++
        likeCounter.innerText = count
        liker.style.color = 'red'

    })

    let comments = document.getElementById('comments')
    let form = document.getElementById('form')
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        let userInput = document.getElementById('input').value
        let addComment = document.createElement('li')
        addComment.innerText = userInput
        addComment.style.fontFamily = 'Bilbo Swash Caps', 'cursive';
        addComment.style.listStyle = 'none'
        addComment.style.fontSize = '25px'
        comments.appendChild(addComment)
        form.reset()
    })

    let inputFirstName = document.getElementById('inputFirstName')
    let inputLastName = document.getElementById('inputLastName')
    let userForm = document.getElementById('userForm')
    userForm.addEventListener('submit',(e)=>{
        e.preventDefault();
       if (inputFirstName.value === '' ) {
           alert('Add first name')
           
       }else if (inputLastName.value === '') {
           alert('Add last name')
       }else{
           fetch(`https://nba-players.herokuapp.com/players-stats/${inputLastName.value}/${inputFirstName.value}`)
           .then((res)=>res.json())
           .then((data)=>{
            playerMPG.textContent =  data.minutes_per_game
            playerFG.textContent =   `${data.field_goal_percentage}%`
            player3PT.textContent =  `${data.three_point_percentage}%`
            playerFT .textContent =  `${data.free_throw_percentage}%`
            playerPPG.textContent =  data.points_per_game
            playerRPG.textContent =  data.rebounds_per_game
            playerAPG.textContent =  data.assists_per_game
            playerBPG.textContent =  data.blocks_per_game
           })
           .catch(()=>{
               alert(`Im sorry.This player is not in our database.Try another Player`)
           })
            let newImage = document.getElementById('playerInputImage')
            newImage.src = `https://nba-players.herokuapp.com/players/${inputLastName.value}/${inputFirstName.value}`
            userForm.reset()
       }
       

        
    })
})