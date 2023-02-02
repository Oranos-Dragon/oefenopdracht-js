//objects
let person = {//opdracht 1
    firstname: "",
    surname: "",
    age: "",
    school: "",
    score: ""
}
let post = {//opdracht 2
    username: "",
    title: "",
    story: "",
    date: "",
    views: 10
}
const pizzaOne = {//opdracht 3
    pizza: "Cheeze Pizza",
    description: "The cheeze pizza is from italy and is good for if you dont want alot on your pizza.",
    ingrediants: "Cheeze, Tomatoe sauce",
}
const PizzaTwo = {
    pizza: "Salami Pizza",
    description: "The salami pizza first originated from italy and now is popoular around the entire world.",
    ingrediants: "Salami, Cheese, Tomatoe sauce"
}
const PizzaThree = {
    pizza: "4 Cheezes",
    description: "This pizza has 4 different cheezes, what more do you want.",
    ingrediants: "Cheeze, Cheeze, Cheeze, Cheeze, Tomatoe sauce"
}
const pizzas = [pizzaOne, PizzaTwo, PizzaThree];
//auto's opdracht 4
let opel1 = {
    title: "Opel Corsa 1.4 Turbo OPC-Line CARPLAY NAV PANO DAB XENON STU",
    description: "IntelliLink Pakket, OPC Line Pack, Winter-pakket 2, Cosmo+ pakket, Achteruitrijcamera, Android Auto, Apple Carplay, bi-xenon koplampen, Dab, Dodehoek detector, Elektrisch schuif-/kanteldak.",
    price: 13944.00,
    kilometer: 45320,
    buildDate: 2016
}
let Mercedes = {
    title: "Mercedes-Benz B-klasse 200 Prestige AMG CARBON/LM18/LEER/NAV",
    description: "Beste klant, voor meer informatie over deze auto vragen wij u telefonisch contact te nemen met ons, e-mails worden niet dagelijks gelezen. Dus graag even bellen naar 06 12 777 808 of 010 795 34 61",
    price: 29950.00,
    kilometer: 44293,
    buildDate: 2016
}
let BMW = {
    title: "BMW Z4 Roadster sDrive20i High Executive M Sport Automaat",
    description: "M sport, Parking Pack, Safety-pack, BMW Z4 Roadster sDrive20i High Executive M Sport Automaat / BMW M 50 Jahre uitvoering / Adaptieve LED / Harman Kardon / Live Cockpit Professional / M sportstoelen / Comfort Access",
    price: 71375.00,
    kilometer: 1,
    buildDate: 2023
}
let Opel2 = {
    title: "Opel Corsa 1.2 16V 5D 2014 Bruin / 2tone",
    description: "Super zuinige en mooie auto in een bijzondere 2 tone kleur. Binnenkant in top staat.Full options! Weinig kilometers. Ennn.....altijd van een oude man geweest.",
    price: 7950.00,
    kilometer: 80000,
    buildDate: 2023
}
let opel3 = {
    title: "De mooiste Opel Mokka-e 's | GS Line | Elegance | 3-Fase",
    description: "Bezoek onze website (via button/link) waar u onze uitgebreide voorraad aan Opel Mokka's vindt. Hier kunt u de auto's bekijken op ruim 60 foto's en via onze 360 graden film van binnen en buiten. Ook actuele verkoopprijzen en alle specificaties staan hier overzichtelijk gepresenteerd. Al deze auto's zijn per direct beschikbaar en uiteraard ook online te bestellen.",
    price: 34895.00,
    kilometer: 0,
    buildDate: 2022
}
//products opdracht 5
let itemOne = {
    title: "Sun Vaatwastabletten all in 1 normaal",
    description: "",
    action: "van 9.45 naar 2.49 per pak",
    price: 2.49
}
let itemTwo = {
    title: "Mona Pudding vanille aardbeiensaus",
    description: "Pudding met vanillesmaak met 11% aardbeiensaus",
    action: "van 1.79 naar 89 cent per pak",
    price: 0.89
}
let itemThree = {
    title: "1 de Beste Mandarijnen verpakt",
    description: "Mandarijn",
    action: "van 2.49 naar 1.99 voor 1kg",
    price: 2.49
}
let itemFour = {
    title: "McVitie's Digestive puur",
    description: "TARWEBISCUITS MET EEN LAAGJE PURE CHOCOLADE.",
    action: "van 1.89 naar 99 cent per pak",
    price: 0.99
}
let itemFive = {
    title: "Alpro Haverdrink (vers) zonder suiker",
    description: "Haverdrink met toegevoegde calcium en vitaminen.",
    action: "van 2.39 naar 99 cent per pak",
    price: 0.99
}
//articles opdracht 6
let phoneOne = {
    title: "Samsung Galaxy S23, 256GB opslag Zwart",
    height: 6.1,
    screenSize: "2340x1080",
    storage: 256,
    price: 949.00
}
let phoneTwo = {
    title: "Samsung Galaxy S22 128GB Zwart",
    height: 6.1,
    screenSize: "2340x1080",
    storage: 128,
    price: 608.73
}
let phoneThree = {
    title: "Samsung Galaxy S23 Ultra, 12GB ram, 1TB opslag Groen",
    height: 6.8,
    screenSize: "3088x1440",
    storage: 1000,
    price: 1579.00
}
let phoneFour = {
    title: "Samsung Galaxy S22 Ultra, 12GB, 256GB Zwart",
    height: 6.8,
    screenSize: "3088x1440",
    storage: 256,
    price: 1110.00
}
let phoneFive = {
    title: "Google Pixel 6a Groen",
    height: 6.1,
    screenSize: "2400x1080",
    storage: 128,
    price: 389
}

//opdracht 7
let i = 0;
while (i < pizzas.length) {
    console.log(pizzas[i]);
    i++;
}

//opdracht 8
const phones = [phoneOne,phoneTwo, phoneThree, phoneFour, phoneFive];
let j = 0;
while (j < phones.length) {
    console.log(phones[i]);
    j++;
}