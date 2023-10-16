// Task 18
document.write("<h2>Завдання 18</h2>");

// 1. Create an array "styles" with elements "Jazz" and "Blues".
let styles = ["Jazz", "Blues"];
document.write(`Масив styles: ${styles}<br>`);

// 2. Add "Rock-n-Roll" to the end of the array.
styles.push("Rock-n-Roll");
document.write(`Після додавання "Rock-n-Roll": ${styles}<br>`);

// 3. Replace the middle element with "Classics".
// Your code should work for arrays of any length.
if (styles.length % 2 === 0) {
    const middle = styles.length / 2;
    styles[middle - 1] = "Classics";
} else {
    const middle = Math.floor(styles.length / 2);
    styles[middle] = "Classics";
}
document.write(`Після заміни середнього елементу: ${styles}<br>`);

// 4. Remove the first element of the array and display it.
const removedElement = styles.shift();
document.write(`Видалений перший елемент: ${removedElement}<br>`);
document.write(`Масив після видалення: ${styles}<br>`);

// 5. Insert "Rap" and "Reggae" at the beginning of the array.
styles.unshift("Rap", "Reggae");
document.write(`Після вставки "Rap" та "Reggae" на початок: ${styles}<br>`);

// Task 19
document.write("<h2>Завдання 19</h2>");

function camelize(str) {
    let words = str.split('-');
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join('');
}

const exampleStr = "my-short-string";
const camelizeResult = camelize(exampleStr);
document.write(`Результат для "${exampleStr}": ${camelizeResult}<br>`);

// Task 20
document.write("<h2>Завдання 20</h2>");

function filterRange(arr, a, b) {
    return arr.filter(item => item >= a && item <= b);
}

const arr = [1, 3, 5, 7, 9, 11, 13];
const a = 4;
const b = 10;
const filteredArray = filterRange(arr, a, b);
document.write(`Масив від ${a} до ${b}: ${filteredArray}<br>`);

// Task 21
document.write("<h2>Завдання 21</h2>");

function copySorted(arr) {
    return [...arr].sort();
}

const originalArray = ["HTML", "JavaScript", "CSS"];
const sortedCopy = copySorted(originalArray);
document.write(`Відсортована копія: ${sortedCopy}<br>`);
document.write(`Початковий масив: ${originalArray}<br>`);

// Task 22
document.write("<h2>Завдання 22</h2>");

function sortByAge(users) {
    return users.sort((a, b) => a.age - b.age);
}

const users = [
    { name: "John", age: 25 },
    { name: "Alice", age: 30 },
    { name: "Bob", age: 20 }
];

const sortedUsers = sortByAge(users);
document.write(`Сортований масив: ${JSON.stringify(sortedUsers)}<br>`);

// Task 23
document.write("<h2>Завдання 23</h2>");

function getAverageAge(users) {
    const totalAge = users.reduce((sum, user) => sum + user.age, 0);
    return totalAge / users.length;
}

const usersWithAges = [
    { name: "John", age: 25 },
    { name: "Alice", age: 30 },
    { name: "Bob", age: 20 }
];

const averageAge = getAverageAge(usersWithAges);
document.write(`Середній вік: ${averageAge}<br>`);

// Task 24
document.write("<h2>Завдання 24</h2>");

function groupById(arr) {
    return arr.reduce((acc, obj) => {
        acc[obj.id] = obj;
        return acc;
    }, {});
}

const usersWithIds = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Alice", age: 30 },
    { id: 3, name: "Bob", age: 20 }
];

const groupedById = groupById(usersWithIds);
document.write(`Сгрупований за id об'єкт: ${JSON.stringify(groupedById)}<br>`);

// Task 25
document.write("<h2>Завдання 25</h2>");

function sumSalaries(salaries) {
    return Object.values(salaries).reduce((sum, salary) => sum + salary, 0);
}

const salaries = {
    John: 1000,
    Alice: 1500,
    Bob: 1200
};

const totalSalary = sumSalaries(salaries);
document.write(`Загальна зарплата: ${totalSalary}<br>`);