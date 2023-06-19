/*
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

RAGIONAMENTO BASE
1. creare un array che conterrà la lista della spesa 
2. creare un ciclo while che percorre l'array
3. per ogni elemento dell'array creare un elemento html 
  - inserire il dato corrente della lista nell'elemento creato
  -inserire l'elemento html nell contenitore nell'html 

*/
const shoppingList = [
  "latte",
  "pane",
  "pasta",
  "frutta",
  "olio",
  "carta igenica",
  "dentifricio",
]

let i = 0
while (i < shoppingList.length) {
  console.log(shoppingList[i])
  i++
}
