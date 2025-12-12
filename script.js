// Navegação entre as guias

// Manipulação de Strings

let oneString = "One string";
let anotherString = "Another string";

console.log(oneString);
console.log(anotherString);
console.log(anotherString[5]);
console.log(anotherString.length);
console.log(anotherString.charAt(5));
console.log(anotherString.concat(" ", "with", " ", "concat", "."));
console.log(anotherString.indexOf("palavra"));
console.log(anotherString.lastIndexOf("o"));
console.log(anotherString.match(/[a-z]/g)); // Retorna todas as minúsculas
console.log(anotherString.match(/[a-z]/)); // Retorna primeira minúscula, o indice, o input e o group
console.log(anotherString.search(/x/)); // Busca uma palavra
console.log(anotherString.replace(/Another/, "One more"));
console.log(anotherString.replace(/r/, "#")); // Apenas a primeira
console.log(anotherString.replace(/r/g, "#")); // Todas
console.log(anotherString.slice(2, 7));
console.log(anotherString.slice(-6));
console.log(anotherString.split("r"));
console.log(anotherString.split("r", 2));
console.log(anotherString.toUpperCase());

const domElement = document.getElementById("texto-dinamico");
const stringColors = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6"];

let corIndex = 0;

document.getElementById("btn-uppercase").addEventListener("click", () => {
  domElement.textContent = domElement.textContent.toUpperCase();
});

document.getElementById("btn-lowercase").addEventListener("click", () => {
  domElement.textContent = domElement.textContent.toLowerCase();
});

document.getElementById("btn-cor").addEventListener("click", () => {
  changeTextColor(stringColors);
});

function changeTextColor(newColor) {
  domElement.style.color = newColor[corIndex];
  corIndex = (corIndex + 1) % stringColors.length;
}

function changeVisibility() {
  domElement.style.display == none ? "block" : "none"; // hidden
}
/*
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

// // ========================================
// // NAVEGAÇÃO ENTRE SEÇÕES
// // ========================================
// const navButtons = document.querySelectorAll(".nav-btn");
// const sections = document.querySelectorAll(".section-group");

// navButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const targetSection = button.dataset.section;

//     // Remove active de todos os botões
//     navButtons.forEach((btn) => btn.classList.remove("active"));

//     // Adiciona active no botão clicado
//     button.classList.add("active");

//     // Esconde todas as seções
//     sections.forEach((section) => section.classList.add("hidden"));

//     // Mostra a seção alvo
//     const targetElement = document.querySelector(
//       `[data-group="${targetSection}"]`
//     );
//     if (targetElement) {
//       targetElement.classList.remove("hidden");
//     }
//   });
// });

// // ========================================
// // SEÇÃO BÁSICO - Card 1: Manipulação de DOM
// // ========================================
// const textoDinamico = document.getElementById("texto-dinamico");
// const cores = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6"];
// let corIndex = 0;

// document.getElementById("btn-cor")?.addEventListener("click", () => {
//   textoDinamico.style.color = cores[corIndex];
//   corIndex = (corIndex + 1) % cores.length;
// });

// document.getElementById("btn-toggle")?.addEventListener("click", () => {
//   textoDinamico.style.display =
//     textoDinamico.style.display === "none" ? "block" : "none";
// });

// document.getElementById("btn-uppercase")?.addEventListener("click", () => {
//   textoDinamico.textContent = textoDinamico.textContent.toUpperCase();
// });

// document.getElementById("btn-lowercase")?.addEventListener("click", () => {
//   textoDinamico.textContent = textoDinamico.textContent.toLowerCase();
// });

// // ========================================
// // SEÇÃO BÁSICO - Card 2: Eventos Avançados
// // ========================================
// const inputEventos = document.getElementById("input-eventos");
// const eventLog = document.getElementById("event-log");
// let eventCount = 0;

// function logEvent(eventType, eventData) {
//   eventCount++;
//   const logEntry = document.createElement("div");
//   logEntry.textContent = `[${eventCount}] ${eventType}: ${eventData}`;
//   eventLog.insertBefore(logEntry, eventLog.firstChild);

//   // Mantém apenas os últimos 10 eventos
//   if (eventLog.children.length > 10) {
//     eventLog.removeChild(eventLog.lastChild);
//   }
// }

// inputEventos?.addEventListener("input", (e) => {
//   logEvent("input", e.target.value);
// });

// inputEventos?.addEventListener("focus", () => {
//   logEvent("focus", "Input focado");
// });

// inputEventos?.addEventListener("blur", () => {
//   logEvent("blur", "Input desfocado");
// });

// inputEventos?.addEventListener("keydown", (e) => {
//   logEvent("keydown", `Tecla: ${e.key}`);
// });

// document.getElementById("btn-clear-log")?.addEventListener("click", () => {
//   eventLog.innerHTML = "";
//   eventCount = 0;
// });

// // ========================================
// // SEÇÃO BÁSICO - Card 3: Event Delegation (Todo List)
// // ========================================
// const todoInput = document.getElementById("todo-input");
// const todoList = document.getElementById("todo-list");
// const btnAddTodo = document.getElementById("btn-add-todo");

// btnAddTodo?.addEventListener("click", addTodo);
// todoInput?.addEventListener("keypress", (e) => {
//   if (e.key === "Enter") addTodo();
// });

// function addTodo() {
//   const text = todoInput.value.trim();
//   if (!text) return;

//   const li = document.createElement("li");
//   li.innerHTML = `
//     <span>${text}</span>
//     <button class="btn-delete" data-action="delete">❌</button>
//   `;
//   li.dataset.id = Date.now();

//   todoList.appendChild(li);
//   todoInput.value = "";
// }

// // Event Delegation - Um único listener para toda a lista
// todoList?.addEventListener("click", (e) => {
//   const li = e.target.closest("li");
//   if (!li) return;

//   if (e.target.dataset.action === "delete") {
//     li.remove();
//   } else {
//     li.classList.toggle("completed");
//   }
// });

// // ========================================
// // SEÇÃO INTERMEDIÁRIO - Card 4: Array Methods
// // ========================================
// const arrayOriginal = [10, 25, 5, 18, 33, 42, 7, 15];
// const arrayResult = document.getElementById("array-result");

// function showResult(title, result) {
//   arrayResult.innerHTML = `<strong>${title}:</strong> ${JSON.stringify(
//     result
//   )}`;
// }

// document.getElementById("btn-map")?.addEventListener("click", () => {
//   const result = arrayOriginal.map((num) => num * 2);
//   showResult("Map (x2)", result);
// });

// document.getElementById("btn-filter")?.addEventListener("click", () => {
//   const result = arrayOriginal.filter((num) => num > 20);
//   showResult("Filter (>20)", result);
// });

// document.getElementById("btn-reduce")?.addEventListener("click", () => {
//   const result = arrayOriginal.reduce((acc, num) => acc + num, 0);
//   showResult("Reduce (soma)", result);
// });

// document.getElementById("btn-sort")?.addEventListener("click", () => {
//   const result = [...arrayOriginal].sort((a, b) => a - b);
//   showResult("Sort (crescente)", result);
// });

// document.getElementById("btn-chain")?.addEventListener("click", () => {
//   const result = arrayOriginal
//     .filter((num) => num > 10)
//     .map((num) => num * 2)
//     .reduce((acc, num) => acc + num, 0);
//   showResult("Chain (.filter.map.reduce)", result);
// });

// // ========================================
// // SEÇÃO INTERMEDIÁRIO - Card 5: Closures
// // ========================================
// function createCounter() {
//   let count = 0;

//   return {
//     increment: () => ++count,
//     decrement: () => --count,
//     getValue: () => count,
//   };
// }

// const counter1 = createCounter();
// const counter2 = createCounter();

// document.getElementById("btn-inc1")?.addEventListener("click", () => {
//   document.getElementById("counter1").textContent = counter1.increment();
// });

// document.getElementById("btn-dec1")?.addEventListener("click", () => {
//   document.getElementById("counter1").textContent = counter1.decrement();
// });

// document.getElementById("btn-inc2")?.addEventListener("click", () => {
//   document.getElementById("counter2").textContent = counter2.increment();
// });

// document.getElementById("btn-dec2")?.addEventListener("click", () => {
//   document.getElementById("counter2").textContent = counter2.decrement();
// });

// // ========================================
// // SEÇÃO INTERMEDIÁRIO - Card 6: Destructuring
// // ========================================
// const destructResult = document.getElementById("destruct-result");

// document.getElementById("btn-destructure")?.addEventListener("click", () => {
//   const user = { nome: "João", idade: 25, cidade: "São Paulo" };
//   const { nome, idade } = user;
//   destructResult.textContent = `const { nome, idade } = user;\n// nome: ${nome}\n// idade: ${idade}`;
// });

// document.getElementById("btn-spread")?.addEventListener("click", () => {
//   const arr1 = [1, 2, 3];
//   const arr2 = [4, 5, 6];
//   const combined = [...arr1, ...arr2];
//   destructResult.textContent = `const combined = [...arr1, ...arr2];\n// ${JSON.stringify(
//     combined
//   )}`;
// });

// document.getElementById("btn-rest")?.addEventListener("click", () => {
//   function sum(...numbers) {
//     return numbers.reduce((a, b) => a + b, 0);
//   }
//   const result = sum(1, 2, 3, 4, 5);
//   destructResult.textContent = `function sum(...numbers) {\n  return numbers.reduce((a, b) => a + b);\n}\nsum(1,2,3,4,5) = ${result}`;
// });

// // ========================================
// // SEÇÃO INTERMEDIÁRIO - Card 7: Template Literals
// // ========================================
// document
//   .getElementById("btn-generate-template")
//   ?.addEventListener("click", () => {
//     const nome = document.getElementById("user-name").value || "Visitante";
//     const idade = document.getElementById("user-age").value || "??";

//     const template = `
//     <div style="padding: 15px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 12px;">
//       <h3>Olá, ${nome}! 👋</h3>
//       <p>Você tem ${idade} anos.</p>
//       <p>Ano de nascimento aproximado: ${2024 - idade}</p>
//     </div>
//   `;

//     document.getElementById("template-output").innerHTML = template;
//   });

// // ========================================
// // SEÇÃO AVANÇADO - Card 8: Classes & POO
// // ========================================
// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = parseFloat(price);
//     this.id = Date.now() + Math.random();
//   }

//   render() {
//     return `
//       <div class="product-item">
//         <span>${this.name} - R$ ${this.price.toFixed(2)}</span>
//         <button onclick="removeProduct(${this.id})">Remover</button>
//       </div>
//     `;
//   }
// }

// const products = [];

// document.getElementById("btn-add-product")?.addEventListener("click", () => {
//   const name = document.getElementById("product-name").value;
//   const price = document.getElementById("product-price").value;

//   if (name && price) {
//     const product = new Product(name, price);
//     products.push(product);
//     updateProductDisplay();

//     document.getElementById("product-name").value = "";
//     document.getElementById("product-price").value = "";
//   }
// });

// function updateProductDisplay() {
//   const container = document.getElementById("products-container");
//   container.innerHTML = products.map((p) => p.render()).join("");

//   const total = products.reduce((sum, p) => sum + p.price, 0);
//   document.getElementById("total-price").textContent = total.toFixed(2);
// }

// function removeProduct(id) {
//   const index = products.findIndex((p) => p.id === id);
//   if (index > -1) {
//     products.splice(index, 1);
//     updateProductDisplay();
//   }
// }

// // ========================================
// // SEÇÃO AVANÇADO - Card 9: Higher Order Functions
// // ========================================
// const hofOutput = document.getElementById("hof-output");

// // Debounce
// function debounce(func, delay) {
//   let timeout;
//   return function (...args) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func.apply(this, args), delay);
//   };
// }

// // Throttle
// function throttle(func, limit) {
//   let inThrottle;
//   return function (...args) {
//     if (!inThrottle) {
//       func.apply(this, args);
//       inThrottle = true;
//       setTimeout(() => (inThrottle = false), limit);
//     }
//   };
// }

// // Memoize
// function memoize(fn) {
//   const cache = {};
//   return function (...args) {
//     const key = JSON.stringify(args);
//     if (cache[key]) {
//       return cache[key];
//     }
//     const result = fn(...args);
//     cache[key] = result;
//     return result;
//   };
// }

// let debounceCount = 0;
// const debouncedFunction = debounce(() => {
//   hofOutput.innerHTML += `<div>Debounce executado! (${++debounceCount})</div>`;
// }, 1000);

// document.getElementById("btn-debounce-demo")?.addEventListener("click", () => {
//   debouncedFunction();
//   hofOutput.innerHTML += '<div style="opacity: 0.5;">Aguardando 1s...</div>';
// });

// let throttleCount = 0;
// const throttledFunction = throttle(() => {
//   hofOutput.innerHTML += `<div>Throttle executado! (${++throttleCount})</div>`;
// }, 2000);

// document
//   .getElementById("btn-throttle-demo")
//   ?.addEventListener("click", throttledFunction);

// const fibonacci = memoize(function (n) {
//   if (n < 2) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// });

// document.getElementById("btn-memoize-demo")?.addEventListener("click", () => {
//   const start = performance.now();
//   const result = fibonacci(35);
//   const end = performance.now();
//   hofOutput.innerHTML += `<div>Fibonacci(35) = ${result} em ${(
//     end - start
//   ).toFixed(2)}ms</div>`;
// });

// // ========================================
// // SEÇÃO AVANÇADO - Card 10: Prototype
// // ========================================
// const prototypeResult = document.getElementById("prototype-result");

// document.getElementById("btn-prototype-demo")?.addEventListener("click", () => {
//   function Animal(name) {
//     this.name = name;
//   }

//   Animal.prototype.speak = function () {
//     return `${this.name} faz barulho`;
//   };

//   const dog = new Animal("Rex");

//   prototypeResult.textContent = `function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.speak = function() {
//   return this.name + ' faz barulho';
// };

// const dog = new Animal('Rex');
// dog.speak(); // "${dog.speak()}"`;
// });

// document
//   .getElementById("btn-inheritance-demo")
//   ?.addEventListener("click", () => {
//     class Animal {
//       constructor(name) {
//         this.name = name;
//       }
//       speak() {
//         return `${this.name} faz barulho`;
//       }
//     }

//     class Dog extends Animal {
//       speak() {
//         return `${this.name} late: Au au!`;
//       }
//     }

//     const rex = new Dog("Rex");

//     prototypeResult.textContent = `class Animal {
//   constructor(name) { this.name = name; }
//   speak() { return this.name + ' faz barulho'; }
// }

// class Dog extends Animal {
//   speak() { return this.name + ' late: Au au!'; }
// }

// const rex = new Dog('Rex');
// rex.speak(); // "${rex.speak()}"`;
//   });

// // ========================================
// // SEÇÃO APIs & ASYNC - Card 11: Promises
// // ========================================
// const promiseStatus = document.getElementById("promise-status");

// document
//   .getElementById("btn-promise-resolve")
//   ?.addEventListener("click", () => {
//     promiseStatus.innerHTML =
//       '<div style="color: orange;">⏳ Processando...</div>';

//     const promise = new Promise((resolve) => {
//       setTimeout(() => resolve("✅ Promise resolvida com sucesso!"), 2000);
//     });

//     promise.then((result) => {
//       promiseStatus.innerHTML = `<div style="color: green;">${result}</div>`;
//     });
//   });

// document.getElementById("btn-promise-reject")?.addEventListener("click", () => {
//   promiseStatus.innerHTML =
//     '<div style="color: orange;">⏳ Processando...</div>';

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject("❌ Promise rejeitada!"), 2000);
//   });

//   promise.catch((error) => {
//     promiseStatus.innerHTML = `<div style="color: red;">${error}</div>`;
//   });
// });

// document.getElementById("btn-promise-all")?.addEventListener("click", () => {
//   promiseStatus.innerHTML =
//     '<div style="color: orange;">⏳ Executando 3 promises...</div>';

//   const p1 = new Promise((resolve) =>
//     setTimeout(() => resolve("Promise 1 ✓"), 1000)
//   );
//   const p2 = new Promise((resolve) =>
//     setTimeout(() => resolve("Promise 2 ✓"), 1500)
//   );
//   const p3 = new Promise((resolve) =>
//     setTimeout(() => resolve("Promise 3 ✓"), 2000)
//   );

//   Promise.all([p1, p2, p3]).then((results) => {
//     promiseStatus.innerHTML = `<div style="color: green;">Todas completadas:<br>${results.join(
//       "<br>"
//     )}</div>`;
//   });
// });

// document.getElementById("btn-promise-race")?.addEventListener("click", () => {
//   promiseStatus.innerHTML =
//     '<div style="color: orange;">⏳ Corrida de promises...</div>';

//   const p1 = new Promise((resolve) =>
//     setTimeout(() => resolve("🥇 Promise 1 venceu!"), 1000)
//   );
//   const p2 = new Promise((resolve) =>
//     setTimeout(() => resolve("🥈 Promise 2"), 2000)
//   );
//   const p3 = new Promise((resolve) =>
//     setTimeout(() => resolve("🥉 Promise 3"), 3000)
//   );

//   Promise.race([p1, p2, p3]).then((winner) => {
//     promiseStatus.innerHTML = `<div style="color: green;">${winner}</div>`;
//   });
// });

// // ========================================
// // SEÇÃO APIs & ASYNC - Card 12: Async/Await
// // ========================================
// const apiResult = document.getElementById("api-result");
// const loading = document.getElementById("loading");

// document
//   .getElementById("btn-fetch-users")
//   ?.addEventListener("click", async () => {
//     loading.classList.remove("hidden");
//     apiResult.innerHTML = "";

//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users?_limit=5"
//       );
//       const users = await response.json();

//       apiResult.innerHTML = users
//         .map(
//           (user) => `
//       <div style="background: #f0f0f0; padding: 10px; margin: 5px 0; border-radius: 6px;">
//         <strong>${user.name}</strong> - ${user.email}
//       </div>
//     `
//         )
//         .join("");
//     } catch (error) {
//       apiResult.innerHTML = `<div style="color: red;">Erro: ${error.message}</div>`;
//     } finally {
//       loading.classList.add("hidden");
//     }
//   });

// document
//   .getElementById("btn-sequential")
//   ?.addEventListener("click", async () => {
//     loading.classList.remove("hidden");
//     apiResult.innerHTML = "";

//     const start = Date.now();

//     try {
//       const user1 = await fetch(
//         "https://jsonplaceholder.typicode.com/users/1"
//       ).then((r) => r.json());
//       const user2 = await fetch(
//         "https://jsonplaceholder.typicode.com/users/2"
//       ).then((r) => r.json());

//       const time = Date.now() - start;
//       apiResult.innerHTML = `
//       <div><strong>Sequencial (${time}ms):</strong></div>
//       <div>1. ${user1.name}</div>
//       <div>2. ${user2.name}</div>
//     `;
//     } catch (error) {
//       apiResult.innerHTML = `<div style="color: red;">Erro: ${error.message}</div>`;
//     } finally {
//       loading.classList.add("hidden");
//     }
//   });

// document.getElementById("btn-parallel")?.addEventListener("click", async () => {
//   loading.classList.remove("hidden");
//   apiResult.innerHTML = "";

//   const start = Date.now();

//   try {
//     const [user1, user2] = await Promise.all([
//       fetch("https://jsonplaceholder.typicode.com/users/1").then((r) =>
//         r.json()
//       ),
//       fetch("https://jsonplaceholder.typicode.com/users/2").then((r) =>
//         r.json()
//       ),
//     ]);

//     const time = Date.now() - start;
//     apiResult.innerHTML = `
//       <div><strong>Paralelo (${time}ms):</strong></div>
//       <div>1. ${user1.name}</div>
//       <div>2. ${user2.name}</div>
//     `;
//   } catch (error) {
//     apiResult.innerHTML = `<div style="color: red;">Erro: ${error.message}</div>`;
//   } finally {
//     loading.classList.add("hidden");
//   }
// });

// // ========================================
// // SEÇÃO APIs & ASYNC - Card 13: LocalStorage
// // ========================================
// const storageDisplay = document.getElementById("storage-display");

// function updateStorageDisplay() {
//   const items = Object.keys(localStorage);
//   if (items.length === 0) {
//     storageDisplay.innerHTML = "<em>Nenhum item armazenado</em>";
//   } else {
//     storageDisplay.innerHTML = items
//       .map(
//         (key) =>
//           `<div><strong>${key}:</strong> ${localStorage.getItem(key)}</div>`
//       )
//       .join("");
//   }
// }

// document.getElementById("btn-save-local")?.addEventListener("click", () => {
//   const key = document.getElementById("storage-key").value;
//   const value = document.getElementById("storage-value").value;

//   if (key && value) {
//     localStorage.setItem(key, value);
//     updateStorageDisplay();
//     document.getElementById("storage-key").value = "";
//     document.getElementById("storage-value").value = "";
//   }
// });

// document.getElementById("btn-load-local")?.addEventListener("click", () => {
//   updateStorageDisplay();
// });

// document.getElementById("btn-clear-local")?.addEventListener("click", () => {
//   localStorage.clear();
//   updateStorageDisplay();
// });

// // Carrega dados ao iniciar
// updateStorageDisplay();

// // ========================================
// // SEÇÃO APIs & ASYNC - Card 14: Tabela Dinâmica
// // ========================================
// const tableData = [
//   { id: 1, nome: "João Silva", idade: 28, email: "joao@email.com" },
//   { id: 2, nome: "Maria Santos", idade: 34, email: "maria@email.com" },
//   { id: 3, nome: "Pedro Costa", idade: 22, email: "pedro@email.com" },
// ];

// let currentData = [...tableData];

// function renderTable(data) {
//   const tbody = document.querySelector("#dynamic-table tbody");
//   tbody.innerHTML = data
//     .map(
//       (row) => `
//     <tr>
//       <td>${row.id}</td>
//       <td>${row.nome}</td>
//       <td>${row.idade}</td>
//       <td>${row.email}</td>
//       <td><button onclick="deleteRow(${row.id})">Excluir</button></td>
//     </tr>
//   `
//     )
//     .join("");
// }

// document.getElementById("btn-add-row")?.addEventListener("click", () => {
//   const newId = Math.max(...currentData.map((d) => d.id)) + 1;
//   const newRow = {
//     id: newId,
//     nome: `Pessoa ${newId}`,
//     idade: Math.floor(Math.random() * 50) + 18,
//     email: `pessoa${newId}@email.com`,
//   };
//   currentData.push(newRow);
//   renderTable(currentData);
// });

// function deleteRow(id) {
//   currentData = currentData.filter((row) => row.id !== id);
//   renderTable(currentData);
// }

// document.getElementById("search-table")?.addEventListener("input", (e) => {
//   const search = e.target.value.toLowerCase();
//   const filtered = tableData.filter(
//     (row) =>
//       row.nome.toLowerCase().includes(search) ||
//       row.email.toLowerCase().includes(search)
//   );
//   renderTable(filtered);
// });

// document.getElementById("sort-table")?.addEventListener("change", (e) => {
//   const field = e.target.value;
//   if (field) {
//     const sorted = [...currentData].sort((a, b) => {
//       if (typeof a[field] === "number") {
//         return a[field] - b[field];
//       }
//       return a[field].localeCompare(b[field]);
//     });
//     renderTable(sorted);
//   }
// });

// // Inicializa a tabela
// renderTable(currentData);

// console.log("✅ Playground carregado com sucesso!");
