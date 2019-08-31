// Write your JS here

/*
STEP -1

1) declaring a variable hero and assigning it to an object.
2) hero object should have name property.
3) hero object should have heroic property which should be Boolean.
4) hero object should have inventory property and assign it to empty array.
5) hero object should have health property and asssign it to value 10.
6) hero object should have weapon propety which is an object containing type and damage property.
*/

const hero = {
    name: 'Hero1',
    heroic: true,
    inventory: [],
    health: 10,
    weapon:{
        type: "sword",
        damage: 2
    }
};

const enemy = {
   name: "enemy1",
   heroic: true,
   health:10,
   weapon:{
       type:"sword",
       damage:2
   }
}

const fight_array = ["rock","paper","scissors"];

//resting fucntion
function rest(restobject)
{
    if(restobject.health === 10)
    {
        alert("Health already has a value of 10");
        return restobject;
    }
    else
    {
        restobject.health = 10; 
        return restobject;
    }
}


//picking up the weapon
function pickUpItem(hobject,wobject)
{
    hobject.inventory.push(wobject); 
}

// Equipping the weapon
function equipWeapon(hobject)
{
    if(hobject.inventory[0])
    {
        const weapon1 = hobject.inventory[0];
        hobject.weapon = weapon1;
    }
}


function callpickup()
{
    const weapons={
        type:"dagger",
        damage:2
    }
    pickUpItem(hero,weapons);
}

// calling the rest function when clicking on the image
function callrest()
{
    const retsObject = rest(hero);
}

function callequipWeapon()
{
   equipWeapon(hero);
}

//creating as section for displaying the stats
function creatediv(hobject)
{
    const div = document.createElement("div");
    const paragraph1 = document.createElement("p");
    const paragraph2 = document.createElement("p");
    const paragraph3 = document.createElement("p");
    const paragraph4 = document.createElement("p");
    const hr = document.createElement("hr");
    paragraph1.innerHTML = `Name : ${hobject.name}`;
    paragraph2.innerHTML = `Health : ${hobject.health}`;
    paragraph3.innerHTML = `WeaponType : ${hobject.weapon.type}`;
    paragraph4.innerHTML = `Weapon Damage: ${hobject.weapon.damage}`;
    div.className = "display"
    section = document.getElementById("displayStats") ;
    div.append(paragraph1);
    div.append(paragraph2);
    div.append(paragraph3);
    div.append(paragraph4);
    div.append(hr);
    section.append(div);
}


function whenEnteredAName(val,inputfield)
{
    
    hero.name = val;
    creatediv(hero);
    inputfield.value=null;
}

// used for displaying the status
function displayStats()
{
    let inputfield = document.getElementById("name");
    let val = inputfield.value;
    if(val === "")
    {
        creatediv(hero);
    }
    else{
        whenEnteredAName(val,inputfield);
    }   
}


//shuffle 
function random_item(items)
{
  
  return items[Math.floor(Math.random()*items.length)];
     
}

function createFightDiv(choice1,choice2,msg,who,health)
{
    console.log(choice1, choice2, msg, who,health);
    const div1 = document.createElement("div");
    const paragraph1 = document.createElement("p");
    const paragraph2 = document.createElement("p");
    const paragraph3 = document.createElement("p");
    const paragraph4 = document.createElement("p");
    
    div1.className = "fight-answer"
    
    paragraph1.innerHTML = `Hero choice: ${choice1}`;
    paragraph2.innerHTML = `Enemy choice: ${choice2}`;
    paragraph3.innerHTML = `${msg}`;
    paragraph4.innerHTML = `${who} : ${health}`;
    

    section = document.getElementById("fight");
    div1.append(paragraph1);
    div1.append(paragraph2);
    div1.append(paragraph3);
    div1.append(paragraph4);
    section.append(div1);

}

function displayFinalWinner(final_winner)
{
    const div1 = document.createElement("div");
    const paragraph1 = document.createElement("p");
    paragraph1.innerHTML = `${final_winner}`
    div1.className = "final-winner"
    section = document.getElementById("finalwinner");
    div1.append(paragraph1);
    section.append(div1);

}

//fighting



function fight()
{
    let herohealth = hero.health;
     while((hero.health !== 0) || (enemy.health !==0))
     {
        let hero_choice = random_item(fight_array);
        let enemy_choice = random_item(fight_array);
        let msg;
        let health;
        let who;
        let final_winner;

        if(hero_choice === enemy_choice){
            msg = "It's a tie";
            who = "Hero and Enemy Health";
            health = hero.health;
        }

        else if (hero_choice === "rock") 
        {
            if(enemy_choice === "scisscors")
            {
                msg = "Hero Wins";
                who = "Enemy_Health : ";
                health = enemy.health -=1;
            }
            else
            {
                msg = "Enemy Wins";
                who = "Hero_Health : "
                health = hero.health -= 1;   
            }
        }


       else  if (hero_choice === "paper") 
        {
            if(enemy_choice === "scisscors")
            {
                msg = "Enemy Wins";
                who = "Hero_Health : ";
                health = hero.health -= 1;
            }
            else
            {
                msg = "Hero Wins";
                who = "Enemy_Health : ";
                health = enemy.health -= 1;   
             }
         }

        else if (hero_choice === "scissors") 
        {
            if(enemy_choice === "rock")
            {
                msg = "Enemy Wins";
                who = "Hero_Health : ";
                health = hero.health -= 1;
            }
            else
            {
                msg = "Hero Wins";
                who = "Enemy_Health : ";
                health = enemy.health -= 1;   
            }
         }

         if(enemy.health === 0)
         {
             final_winner = "Hero wins the game :)";
             displayFinalWinner(final_winner);   
             alert(final_winner);
             break;
         }
         else if(hero.health === 0)
         {
             final_winner = "Enemy wins the game :(";
             displayFinalWinner(final_winner);
             alert(final_winner);
             break;
         }

         createFightDiv(hero_choice,enemy_choice,msg,who,health);
    }
    hero.health = herohealth;
}


function shoot()
{
    document.getElementById('img1').style.display = 'block';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img3').style.display = 'none';

    alert("Hero wins by shooting the enemy");
}