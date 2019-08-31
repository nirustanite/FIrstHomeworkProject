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

/*
STEP -2

 1) Adding rest, pickUpItem and equipItem functions.
 2) rest function can be called with an object as arguent.

*/

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

function pickUpItem(hobject,wobject)
{
    hobject.inventory.push(wobject);
   
}

console.log(hero);
function equipWeapon(hobject)
{
    if(hobject.inventory[0])
    {
        const weapon1 = hobject.inventory[0];
        console.log(weapon1);
        hobject.weapon = weapon1;
    }
}

// calling the rest function when clicking on the image
function callpickup()
{
    hero.weapon.type="dagger"
    pickUpItem(hero,hero.weapon);
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
