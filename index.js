const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: ["Muzzarella", "Tomate", "Queso Azul", "Parmesano", "Roquefort",],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// a) Mostrar las pizzas que tengan un id impar.
function ids_impar (array){
  const res = array.filter((pizza) => pizza.id % 2 !== 0);
  console.log("Pizzas con número de identificación impar:")
  res.forEach(i => {
    console.log(`- ID: ${i.id}, ${i.nombre}, $${i.precio}.`);
  })
}
console.log("a)")
ids_impar(pizzas)

// b) Mostrar las pizzas con precio menor a 600.
function low_cost (array){
  const res = array.filter((pizza) => pizza.precio < 600);
  res.forEach (i =>{
    console.log(`Si, la ${i.nombre} tiene un costo de $${i.precio}.`)
  })
}
console.log("b)")
low_cost(pizzas)

// c) Mostrar nombre y precio de las pizzas.
function menu (array){
  console.log("Menú completo:")
  array.forEach (i => {
    console.log(`- ${i.nombre}, $${i.precio}.`)
  })
}
console.log("c)")
menu(pizzas)

// d) Mostrar cada pizza con sus ingredientes.
function receta (array){
  console.log("Ingredientes:")
  array.forEach (pizza => {
    console.log(`- La ${pizza.nombre} está hecha con los ingredientes: ${pizza.ingredientes.join(', ')}`)
  })
}
console.log("d)")
receta(pizzas)