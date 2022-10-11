// 1. PODSTAWOWE TYPY DANYCH
//type inference - automatyczne przypisywanie typów przez TS
// a) number
// let age = 21;
// let age: number = 31; - jeśli nie musimy tak nie piszemy
// age = 32;
// age = "Lalalala"; błąd, TS dodał automatycznie typ number
// console.log(age);

// b) string
// let imie: string = "John";
// imie = "123";
// const surname = "Smith";

//c) boolean
//const bool = true;
//let bool2: boolean = false;

// 2.TYPOWANIE FUNKCJI
//typowanie parametrów
// const add = (num1: number, num2: number): number => {
//   return num1 + num2;
// };

// const outcome = add(1, 2);

// const multiply = (num1: number, num2: number) => {
//   return num1 * num2;
// };

// ZADANIE 1. Napisz funkcje, która będzie oliczała cenę w zależności czy zniżka jest przyznana czy nie.
//Nazwa calculatePrice
//Parametry: originalPrice(liczba), hasDiscount(true/false)
//Funkcjonalność: Jeżeli parametr hasDiscount jest równy true, zwróć liczbę originalPrice pomniejszoną o 20%, jeżeli hasDiscount jest równe false, zwróć po prostu originalPrice

// const calculatePrice = (
//   originalPrice: number,
//   hasDiscount: boolean
// ): number => {
//   if (hasDiscount) {
//     return originalPrice * 0.8;
//   } else {
//     return originalPrice;
//   }
// };
// const price = 20;
// const discount = true;

// console.log(calculatePrice(price, discount));

// const button: HTMLButtonElement = document.querySelector("button");
// const categoryList: HTMLUListElement = document.querySelector(".categories");

//jeśli dodajemy typ do eventu to robimy (e: Event), ale nie dodaje się
//jeśli nie ma  returna to zwraca void
// button.addEventListener("click", (e) => {
// 1. W jakiś sposób wylosuj czy użytkownik ma zniżkę czy nie i zapisz do zmiennej true albo false;
//   const hasDiscount = Math.random() > 0.5 ? true : false;

// 2. Ściągnij wartość z inputu tekstowego (id "name");
//   const price = +document.querySelector("input").value;
//ten plus oznacza, że to typ number

// 3. Wykonaj console.log("You have to pay *tu cena, która jest wynikiem wywołania calculatePrice*");
//   console.log(`Tou have to pay ${calculatePrice(price, hasDiscount)}`);
// });

// 3. UNION TYPES - nie korzysta się z tego zbyt często; ten typ albo ten typ
// let cos: number | string = 0;
// cos = 12;
// cos = "Error";
// console.log(cos);

// 4. TYPE ALIAS
// type name = string;
// const firstName: name = "Sara";

// type Cos = number | string | boolean;
// let cos: Cos = 0;
// let cos2: Cos = "123";
// cos = 12;
// cos = "Error";
// cos = false;
// console.log(cos);

// 5. TYPE ALIAS + UNION TYPES: twarde ustawienie wartości
//JAKIŚ INPUT TEXT: [ Sport ]

// type Category = "life" | "work" | "education" | "sport";
// const myCategory: Category = "gym"; //ERROR
// const myCategory = "life";

// 6. TYPOWANIE OBIEKTÓW

//opcja 1 - definiowanie, że to obiekt niewiele daje
// const person: object = {
//     name: "John",
//     surname: "Smith",
//     age: 30
// };

// a)type alias
// type Person = { name: string, surname: string, age: number };

// b) interface
// interface Person {
//     name: string;
//     surname: string;
//     age: number;
//   }

//   interface Person2 extends Person {
//     married: boolean;
//   }
//   const person: Person = {
//     name: "John",
//     surname: "Smith",
//     age: 30,
//   };

//   const person2: Person2 = {
//     name: "Sara",
//     surname: "Smith",
//     age: 30,
//     married: true,
//   };

// 7. TYPOWANIE LIST
// const numbers: (number | string)[] = [1, 2, 3, "3", 4, 5];
// const persons: (Person | Person2)[] = [
//   {
//     name: "Sara",
//     surname: "Smith",
//     age: 30,
//     married: true,
//   },
//   {
//     name: "John",
//     surname: "Smith",
//     age: 30,
//   },
// ];

//PLIKACJA - TODO LIST TYPESCRIPT

import { Category, Todo } from "./helpers/interfaces";

// 1. WYbierz liste ul (klasa todos)
const todoList: HTMLUListElement = document.querySelector(".todos");

// 2. Stwórz listę z kategoriami todosów.
const categories: Category[] = ["life", "work", "sport", "education"];
// Otypuj odpowiednio listę categories (użyj typu Category)

// 3. Otypuj odpowiednio listę todos (stwórz interfejs Todo dla obiektów w środku listy)
// w interface.ts jest

const todos: Todo[] = [
  {
    title: "Wyrzucić śmieci",
    done: false,
    category: "life",
  },
  {
    title: "Pójść na siłke",
    done: true,
    category: "sport",
  },
  {
    title: "Nakarmić psa",
    done: false,
    category: "work",
  },
];

// 1. Stwórz funkcje render (parametry: todos (lista obiektów klasy Todo))
// W środku render:
const render = (todos: Todo[]) => {
  // 2. Na parametrze todos wywołaj metodę forEach (todo (obiekt klasy Todo))
  // W środku FE:
  todos.forEach((todo: Todo) => {
    // 3. Stwórz element <li>, klasę ustaw na kategorię z elementu po którym aktualnie iterujesz (1 par FE), textContent ma zawierać title i category
    const li = document.createElement("li");
    li.setAttribute("class", todo.category);
    li.textContent = `${todo.title} (${todo.category})`;

    // 4. Stwórz element <input>, type "checkbox", checked ustaw na własność done z elementy po którym aktualnie iterujesz, podepnij input do li (pkt 3)
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("checked", `${todo.done}`);
    li.appendChild(checkbox);

    // 5. Na input z pkt 4 nałóż event listener (click)
    // W środku EL:
    checkbox.addEventListener("click", () => {
      // 6. Jeżeli własność done aktulanego elementu ma wartość true, to ustaw ją na false, jeżeli ma false to ustaw true
      todo.done ? (todo.done = false) : (todo.done = true);
    });
  });
};
render(todos);

// 1. Stwórz funkcję renderCategories
// W renderCategories:
const renderCategories = () => {
  // 2. Wybierz ul (klasa "categories")
  const categoryContainer: HTMLUListElement =
    document.querySelector(".categories");
  categories.forEach((category: Category) => {
    // 3. Na arrayu categories (na górze) wywołujecie forEach (parametr: category (typ: Category))

    // 4. Stwórz element <li>
    const li = document.createElement("li");

    // 5. Stwórz element <input>, type "radio", name "category", value na parametr category z forEacha, podepnij input do li (pkt 4)
    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("name", "category");
    input.setAttribute("value", category);
    li.appendChild(input);

    // 6. Stwórz element <label>, textContent na category (parametr forEacha), podepnij label do li (pkt 4)
    const label = document.createElement("label");
    label.textContent = category;

    // 7. Do ula z pkt 2 podepnij li
    li.appendChild(label);
    categoryContainer.appendChild(li);
  });
};

renderCategories();

// Po klinięciu na button "Add" ma zostać dodany todos. Ściągnij text z inputu textowego i kategorie z radio inputów. Sam todos powinien przybrać formę obiektu klasy Todo. Ma zostać spushowany do listy todos oraz ma zostać wyrenderowany (przez wywołanie funkcji render)


