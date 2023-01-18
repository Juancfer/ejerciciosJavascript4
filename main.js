/* 
    Dado el siguiente array, muestra por consola
    la suma de premios de los jugadores de uruguay
*/

const players = [
    {name: 'Cristiano Ronaldo', country: 'Portugal', goldenBall: 5 , goldenBoot: 6},
    {name: 'Lionel Messi', country: 'Argentina', goldenBall: 7, goldenBoot: 4},
    {name: 'Luis Suárez', country: 'Uruguay', goldenBall : 0, goldenBoot: 2},
    {name: 'Diego Forlan', country: 'Uruguay', goldenBall :0 , goldenBoot: 2},
    {name: 'Thierry Henry', country: 'Francia', goldenBall : 0, goldenBoot: 2},
]

const playersCount = (players) => {
    let playerGolden = 0;

    players.forEach((player) => {
        if(player.country === 'Uruguay'){
            playerGolden = (player.goldenBall + player.goldenBoot) + playerGolden
        }
    })
    return playerGolden

} 

console.log(playersCount(players));




/* 
    Dado el siguiente array:
*/

const forbesList = [
    {name: 'Elon Musk', amount: 219, age: 50, country:'EEUU', company:'Tesla', industry: 'Automotive'},
    {name: 'Jeff Bezos', amount: 171, age: 58, country:'EEUU', company:'Amazon', industry: 'Technology'},
    {name: 'Bernard Arnault', amount: 158, age: 73, country:'France', company:'LVMH', industry: 'Fashion'},
    {name: 'Bill Gates', amount: 129, age: 66, country:'EEUU', company:'Microsoft', industry: 'Technology'},
    {name: 'Warren Buffet', amount: 118, age: 91, country:'EEUU', company:'Berkshire', industry: 'Finance'},
    {name: 'Larry Page', amount: 111, age: 49, country:'EEUU', company:'Google', industry: 'Technology'},
    {name: 'Sergey Brin', amount: 171, age: 58, country:'EEUU', company:'Google', industry: 'Technology'},
    {name: 'Larry Ellison', amount: 106, age: 77, country:'EEUU', company:'Software', industry: 'Technology'},
    {name: 'Steve Ballmer', amount: 91, age: 66, country:'EEUU', company:'Microsoft', industry: 'Technology'},
    {name: 'Mukesh Ambani', amount: 90, age: 64, country:'India', company:'Diversified', industry: 'Finance'},
]


/* 
    1) Muestra por consola el listado de nombres de los millonarios
*/

const millonarieNameList = (forbesList) => forbesList.map(millonarie => millonarie.name)
console.log(millonarieNameList(forbesList))

/* 
    2) Muestra por consola (true/false) si está Amancio en la lista
*/

const millonarieAmancio = (forbesList) => {
    const amancioArray = forbesList.filter(millonarie => millonarie.name === 'Amancio Ortega')
    return amancioArray.length > 0 ? true : false
} 
console.log(millonarieAmancio(forbesList))

/* 
    3) Muestra por consola un listado con el resultado de dividir su patrimonio entre los años que tienen
*/

const millonarieMoneyList = (forbesList) => forbesList.map(millonarie => millonarie.amount / millonarie.age);
console.log(millonarieMoneyList(forbesList))


/* 
    4) Muestra por consola la media de edad de los 10 billonarios de la lista forbes*/

    const millonarieAge = (forbesList) => forbesList.reduce( (count, millonarie) => count + millonarie.age, 0) / forbesList.length;
    console.log(millonarieAge(forbesList))

/* 
    5) Muestra por consola la suma de dinero de los millonarios de EEUU que están relacionados con technología
*/

const moneyCount = (forbesList) => {
    let millonarieMoney = 0;

    forbesList.forEach((millonarie) => {
        if(millonarie.country === 'EEUU' && millonarie.industry === 'Technology'){
            millonarieMoney = millonarie.amount + millonarieMoney
        }
    })
    return millonarieMoney

} 

console.log(moneyCount(forbesList));



/*
    6) Muestra por consola el millonario más joven que no sea de EEUU
*/


const millonarieLowerAge = (forbesList) => forbesList.filter(millonarie => millonarie.country === 'EEUU')
    .reduce( function(youngest, millonarie){
        return (youngest.age === undefined || youngest.age >= millonarie.age) ? millonarie : youngest;
    },{})
console.log(millonarieLowerAge(forbesList))


/* 7) Muestra por consola el millonario más mayor del top 5 de millonarios de EEUU
*/

const millonarieOld = (forbesList) => forbesList.filter(millonarie => millonarie.country === 'EEUU')
    .slice(0,5)
    .reduce( function(old, millonarie){
        return (old.age === undefined || old.age <= millonarie.age) ? millonarie : old;
    },{});

console.log(millonarieOld(forbesList))


/*
    8) Muestra por consola la media de edad y media de dinero de los millonarios de Google y Microsoft juntos
*/

const millonarieMedia = (forbesList) => {
    const millonarieGoogleMicrosoft = forbesList.filter(millonarie => millonarie.company === 'Google' || millonarie.company === 'Microsoft' )
    return millonarieGoogleMicrosoft.reduce( (count, millonarie) => count + millonarie.age, 0) / millonarieGoogleMicrosoft.length;
}
console.log(millonarieMedia(forbesList))
