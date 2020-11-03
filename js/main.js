/**
 * ESERCITAZIONI INSIEME
 */


/** JSnack 1 *********************************************************
* Creare un array di oggetti
* Ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
* nome e peso.
* Stampare a schermo la bici con peso minore con handlebars.
* 
*/

/*let bici = [
  {nome: 'velocipede', peso: 10, colore: 'lightblue'},
  {nome: 'hybrid-bike', peso: 35, colore: 'green'},
  {nome: 'ciclo-cross', peso: 20, colore: 'red'}
];



let lightBike = null;
bici.forEach(element => {
  if (lightBike == null || lightBike.peso > element.peso)  {
    lightBike = element;
  } 
});

const {nome,peso} = lightBike;
  $('.content').html(
      `<div>
          <h3> La bici più leggera è: ${nome}</h3>
          <h4> Il suo peso è: ${peso}</h4>
      </div>
      `
  );*/



  /** JSnack 2**********************************
  * Creiamo un array di oggetti (scelti da voi)
  * Creiamo una copia da questo array di partenza e aggiungiamo ai singoli
  * elementi una nuova proprietà position che contiene una lettera casuale.
  * Non dobbiamo modificare l'array iniziale.
  */

// Creazione array con nomi
/*const nomi = ['marco', 'filippo', 'genzianello'];
console.log(nomi);

// Chiedo numero ad utente
let totale = nomi.lenght -1;
let min  = parseInt(prompt('inserisci un numero tra 0 e 2'));
let max  = parseInt(prompt('inserisci un numero tra 0 e 2'));
let nuovaLista = [];

nuovaLista = nomi.filter ((element, index)=>{
    return min  <= index && max <= index;
})

console.log(nuovaLista);

/*if(isNaN(numero) || numero < 0 || numero > 2) {
    
    console.log('warning: non hai inserito un numero valido!');
} else {
    
    var nome_scelto = nomi[numero];
    console.log(nome_scelto);
}*/




/***************************************
 * JSnack 3
  * Creiamo un array di oggetti (scelti da voi)
  * Creiamo una copia da questo array di partenza e aggiungiamo ai singoli
  * elementi una nuova proprietà position che contiene una lettera casuale.
  * Non dobbiamo modificare l'array iniziale.
  * 
 */


const scuola = [
    {plesso: 'Classe 1', componenti: 15},
    {plesso: 'Classe 2', componenti: 20},
    {plesso: 'Classe 3', componenti: 18},
    {plesso: 'Classe 4', componenti: 26}
  ]
  let area = [];
  
  area = scuola.map( (element) => {
    return {
        ...element,
        complesso: generatecomplesso()
        }
});

console.table(scuola);
console.table(area);

//Function complesso

  function generatecomplesso() {
    let sezione = '123';
    let complesso = sezione[randcomplesso(0, sezione.length - 1)];

    return complesso;
  }

  function randcomplesso(min,max) {
    return Math.floor (Math.random() * max - min + 1 ) + min;
  }



