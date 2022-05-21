/* Array.filter() */

// Ejemplo #1
const numbers = [10,20,30,40,45,50,52,100];

const filterNumber = numbers.filter(x => x < 50);
console.log(filterNumber);

// Ejemplo #2
const guitars = [
    { company: 'Fender', date: 1979, name: 'Yngwie Malmsteen Stratocaster'},
    { company: 'Ibanez', date: 2005, name: 'Ibanez RG GIO GRX70QA'},
    { company: 'Squier', date: 1979, name: 'Mainstream Stratocaster'},
    { company: 'Yamaha', date: 2015, name: 'Yamaha PAC012/100 Series 012'}
];   


const showGuitar = guitars.filter(guitar => guitar.name == 'Yngwie Malmsteen Stratocaster');// Filtro por nombre
console.log(showGuitar);


const showGuitar2 = guitars.filter(guitar => guitar.date === 1979); // Filtro por fecha
console.log(showGuitar2);


