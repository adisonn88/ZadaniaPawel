/* const bike = {
    name: "bicykl",
    size: 25,
    km: 1,
    color: 'red',

    sayMyName: function(){
        console.log(this.name);
    },

    go:function () {
        this.km = this.km + 1;
        return this.km;
    },

    stop:function (){

    },
};

console.log(bike);
console.log(bike.go())
console.log(bike.go())
console.log(bike.go())
console.log(bike.go())
console.log(bike);


const showProperties = function(myObject){
    console.log(Object.values(myObject));
}

const car = {
    model: 'bmw'
}

const person = {
    name: 'Anna'
}

showProperties(car);
showProperties(person);

const newProperties = function(newObject) {
    console.log(Object.keys(newObject));
}

const myName = {
    name: 'krzysztof'
}

const house = {
    type: 'flat'
}

newProperties(myName);
newProperties(house);

*/

const car = {
    make: "Ford",
    model: "Explorer",
    year: 2008,
    color: "red",
    fuel: "gas",
    mpg: 18,
    doors: "",
    maxSpeed: ""
  };
  


  //1. Uzywajac metody for ... in wyswietl wszystkie pola obiektu car
/*
  for(let property in car2){
    console.log(property);
  }
*/


  
  //2. Uzywajac metody for ... in wyswietl wszystkie wartosci z obiektu car w takim porządku:
  //   "nazwaPola": "wartosc Pola"
  

for (let property in car2) {
  console.log(property + ":" + car2[property]);
}

  
  //3. Uzywajac metody for ... in stworz nowy obiekt ktory bedzie zawieral pola z obiektu car tylko te ktore maja NIE pusta wartość
  // Oczekiwana struktura nowego obiektu:
  //
  // const nonEmptyCar = {
  //   make: "Ford",
  //   model: "Explorer",
  //   year: 2008,
  //   color: "red",
  //   fuel: "gas",
  //   mpg: 18
  // }
  
  const nonEmptyCar = {};

  for(let property in car2) {
    console.log(property);
    console.log(car2[property]);

    if(car2[property].toString().lenght > 0){
       nonEmptyCar[property] = car2[property];
    }
  }

  console.log(nonEmptyCar);
  
  //4. Uzywajac metody Object.values() wyswietl wszystkie wartosci pól z obiektu car

  console.log(Object.values(car));
  
  //5. Uzywajac metody Object.keys() wyswietl wszystkie nazwy pól z obiektu car

  console.log(Object.keys(car));
  
  //6. Korzystajac z metody Object.values() pokaz tylko te wartosci pól które nie są puste
  
  
  //7 Sprawdz czy w obiecie car sa pola: isBike, gas, eco, mpg, year
  // I wydrukuj to w formacie:
  // Obiekt ma pole isBike: false,
  // Obiekt ma pole gas: false,
  // Obiekt ma pole mpg: true,
  // itd.
  
  
  //8. PRzy uzyciu metody Object.entries() zamien obiekt car na tablice w formacie [[klucz, wartosc], [klucz, wartosc], ...]
  

  // Zadania:

// 1.
// Przy uzyciu funkcji for napisz petle ktora zamieni tekst elementow z tablicy na pisane duzymi literami:
const ex1 = ['anna', 'maciej', 'michal', 'Monika', 'JOANNA'];

for (let i = 0; i< ex1.length; i++) {
    console.log(ex1[i].toUpperCase());
}

console.log(ex1);

ex1.forEach((name,index) => {
    console.log(name.toUpperCase());
}

console.log(ex1);

//2. Wykonaj to samo zadanie z funkcja map
const ex2 = ['anna', 'maciej', 'michal', 'Monika', 'JOANNA'];


//3. Dostajesz z jakiegoś zródła danych taki napis:

const names = "anna maciej michal Monika JOANNA"

//Potrzebujesz zrobic z tego liste.
//Nastepnie wyswietl tylko kobiece imiona
//Nastepnie spraw aby pierwsza litera byla zawsze duza, a reszta imienia byla malymi literami


const namesArray = names.split('');
console.log(namesArray)

const females = namesArray.filter(function(name){
    return name.charAt(name.length -1)
    .toLowerCase()==='a';
})

console.log(females);

const femaleName = female.map(function(name){
    console.log(name[0].toUpperCase())
    return '${name[0].toUpperCase()}${name.slice(1).toLowerCase'
})

console.log(femaleName);


//4.
//Dostajesz liste obiektow. Kazdy obiekt zawiera informacje odnosnie uzytkownika (jego imie, nazwisko, wiek)
//Wyswietl te dane w formie przyjaznej uzytkownikowi
const users = [
  {
    name: "Michal",
    lastname: "Kowalski",
    age: "23"
  },
  {
    name: "Jan",
    lastname: "Zielony",
    age: "12"
  },
  {
    name: "Kuba",
    lastname: "Czerwony",
    age: "82"
  },
  {
    name: "Joanna",
    lastname: "Niebieska",
    age: "31"
  },
  {
    name: "Anna",
    lastname: "Brazowa",
    age: "26"
  },
  {
    name: "Agnieszka",
    lastname: "Zolta",
    age: "18"
  },
];


users.forEach((user)=>{
    const text = "imie to :" + user.name + ".Nazwisko to: " + user.lastname + ".Wiek to: " + user.age;
    console.log(text);
})



//5. Do swojej aplikacji planujesz dodac nowa funkcjonalnosc. Osoby ponizej 18 roku zycia musza byc odpowiednio oznaczone.
// Dodaj do kazdego obiektu w tablicy pole isAdult, ktore bedzie mialo wartosc true jesli osoba jest pelnoletnia, i wartosc false jesli nie jest
// pelnoletnia

const userWithAdultInfo = user.map((user)=>{
    console.log(user);
    if(user.age>18) {
        user.isAdult = true;

        return user;
    }
    user.isAdult = false;
    return user;
})

console.log(userWithAdultInfo);


//6 Orzymales tablice tablic [[..], [...]], potrzebujesz z niej zrobic plaska tablice [...]. Uzyj reduce
const array3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const flatterArray = array3.reduce((result, nextElement))

// 7 Masz taka liste zakupów, podlicz ile bedzie kosztowac taki koszyk zakupow (wynik: 227005 :) )
const wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 }
];


wishlist.forEach(function(element)) {
    console.log(element.price);
}


// 8. Masz liste z glosowania obywateli. Sprawdz jak rozklado sie glosowanie w przedzialach wiekowych
// 18-25 - young, 26-35 - medium, 36-55 - senior



// Oczekiwany rezultat: { young: 1, medium: 3, senior: 3 }
const voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];

const votersData=voter.reduce((result, voter)=>

  console.log(voter);
  console.log(result);

  if (voter.age<25 && voter.voted) {
    result.['young'] += 1;
    return result;
  }

  if (voter.age>26 && voter.age<35){
    result['medium'] += 1;
  }
  
  if(voter.age>=36) {
    result['senior'] += 1;
  }

}, {
  young: 0,
  medium: 0,
  senior: 0,
})
  
/*
const Person = function(newName, newLastNAme){
  this.name = newName;
  this.lastName = newLastNAme;

  this.sayMyFullName = () => {
    console.log(this.name + this.lastName);
  }
}

const anna = new Person('Anna', 'Kowalska');
const michak = new Person('michal', 'zdun');

anna.sayMyFullName();

const car = {
  name: "Fiat",
  model: "500"
}

*/

// 1 Napisz funkcje która przyjmuje 2 liczby jako argument i zwraca liczbę, która jest większa.
//Użyj ternary operator

const comparator = (first, second) => {
  return (first > second) ? first : second;
}

console.log(comparator(1,2))

const comparator = (first,second) => {
  if(first >= second) {
    return first;
  } else {
    return second;
  }
}

// 2
// Na podstawie ponizszych danych, wylistuj logi, ktore wystapily po 1 stycznia 2019 roku.

/*

const logs = [
  {
    type: 'error',
    message: 'Error on production',
    date: 'December 17, 2018'
  },
  {
    type: 'warning',
    message: 'Only warning - problem with message',
    date: 'January 12, 2019'
  },
  {
    type: 'log',
    message: 'Log data',
    date: 'January 17, 2018'
  },
  {
    type: 'critical',
    message: 'Critical Error on producition',
    date: 'February 21, 2019'
  },{
    type: 'error',
    message: 'Error on production',
    date: 'March 28, 2019'
  },
  {
    type: 'log',
    message: 'only log data -> dont worry ',
    date: 'February 27, 2019'
  },
  {
    type: 'critical',
    message: 'Critical error, do something',
    date: 'February 22, 2019'
  },
  {
    type: 'warning',
    message: 'Just warning',
    date: 'December 11, 2018'
  },
  {
    type: 'bug',
    message: 'We found a bug!',
    date: 'March 27, 2019'
  },
  {
    type: 'error',
    message: 'Error on production',
    date: 'December 1, 2018'
  }
];

// Napisz funkcje ktora wyswietli najnowszy blad z logow.
// Napisz funkcje ktora wyswietli najstarszy blad.

const date = new Date('January 1, 2019')
console.log(date.getTime());

const newestLog = logs.reduce((result, log) => {
  console.log(log);
  const dateInMs = new Date(log.date).getTime();

  if(dateInMs >= date) {
    result.push(log);
  }

  return result;
}, []);

console.log(date)


const start = new Date().getTime();

console.log(start);

let end;

setTimeout(()=> {
  end = new Date().getTime()
  console.log('hello')
}, 3000);

*/

// Dostajesz od swojego dostawcy dancyh takie dane w takim formacie:
const data = ['name', 'Michal', 'lastName', 'Kowalski', 'age', '21', 'job', 'programmer'];

// Stworz z tego obiekt
// {
//   name: ...
//   lastName: ...
//   ...
// }
// Jesli bedziesz potrzebowal zobacz jakie jeszcze dane przyjmuje metoda reduce:
// https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Array/Reduce


const dataObject = data.reduce((result, currentData, index, array) => {
  if(index % 2 === 0) {
    result [array[index]] = array[index + 1]
    
    
  }
  return result;
}, {});

console.log(dataObject);