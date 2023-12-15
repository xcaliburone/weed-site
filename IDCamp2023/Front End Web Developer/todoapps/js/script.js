const SAVED_EVENT = 'saved-todo';
const STORAGE_KEY = 'TODO-APPS';
const todos = []; // sebuah variabel berisi array yang akan menampung beberapa object. Object ini berisikan data-data Todo user. 
const RENDER_EVENT = 'render-todo'; // untuk mendefinisikan Custom Event dengan nama 'render-todo'.
    // Custom event ini digunakan sebagai patokan dasar ketika ada perubahan data pada variabel todos, seperti perpindahan todo (dari incomplete menjadi complete, dan sebaliknya), menambah todo, maupun menghapus todo.

function generateId() { // untuk menghasilkan identitas unik pada setiap item todo.
    return +new Date(); // kita manfaatkan +new Date() utk mendapatkan timestamp pada JS.
}

function generateTodoObject(id, task, desc, timestamp, isCompleted) { // untuk membuat object baru dari data yang sudah disediakan dari inputan parameter
    return {
        id,
        task,
        desc,
        timestamp,
        isCompleted
    }
}

function findTodo(todoId) {
    for ( const todoItem of todos ) {
        if (todoItem.id === todoId) {
            return todoItem;
        }
    }
    return null;
}

function findTodoIndex(todoId) {
    for (const index in todos) {
        if (todos[index].id === todoId) {
            return index;
        }
    }
    return -1;
}

function isStorageExist() /* boolean */ {
    if (typeof (Storage) === 'undefined') {
        alert('Browser kamu tidak mendukung local storage');
        return false;
    }
    return true;
}

function saveData() {           // Untuk memastikan bahwa browser yang dipakai mendukung localStorage
    if (isStorageExist()) {     // membantu mengembalikan nilai boolean untuk menentukan apakah memang benar didukung atau tidak.
        const parsed = JSON.stringify(todos); // JSON.stringify() untuk konversi karenakan localStorage hanya mendukung tipe data teks, maka diperlukan konversi data object ke string agar bisa disimpan.
        localStorage.setItem(STORAGE_KEY, parsed); // Dalam hal ini key yang kita gunakan adalah "TODO_APPS" dalam variabel STORAGE_KEY. Menyimpan data ke storage sesuai dengan key yang kita tentukan
        document.dispatchEvent(new Event(SAVED_EVENT)); // Untuk mempermudah debugging atau tracking ketika terjadi perubahan data, kita akan memanggil sebuah custom event baru yang bernama "saved-todo" dalam variabel SAVED_EVENT.
    }
}

function loadDataFromStorage() {
    const serializedData = localStorage.getItem(STORAGE_KEY); // Ambil data dari localStorage, data ini akan disediakan dalam format teks JSON.
    let data = JSON.parse(serializedData); // parse data JSON tadi menjadi sebuah object.

    if (data !== null) {
        for (const todo of data) {
            todos.push(todo); // masukkan satu persatu data dari object ke array todos.
        }
    }
    document.dispatchEvent(new Event(RENDER_EVENT)); // Agar bisa diperbarui pada tampilan, panggil Event RENDER_EVENT
}

function makeTodo(todoObject) {
    const textTitle = document.createElement('h2');
    textTitle.innerText = todoObject.task;

    const descTask = document.createElement('p');
    descTask.innerText = todoObject.desc;

    const textTimestamp = document.createElement('p');
    textTimestamp.innerText = todoObject.timestamp;

    const textContainer = document.createElement('div');
    textContainer.classList.add('inner');
    textContainer.append(textTitle, descTask, textTimestamp);

    const container = document.createElement('div');
    container.classList.add('item', 'shadow');
    container.append(textContainer);
    container.setAttribute('id', `todo-${todoObject.id}`);

    
    if ( todoObject.isCompleted ) {
        const undoButton = document.createElement('button');
        undoButton.classList.add('undo-button');
        
        undoButton.addEventListener('click', function() {
            undoTaskFromCompleted(todoObject.id);
        });
        
        const trashButton = document.createElement('button');
        trashButton.classList.add('trash-button');

        trashButton.addEventListener('click', function() {
            removeTaskFromCompleted(todoObject.id);
        });

        container.append(undoButton, trashButton);
    } else {
        const checkButton = document.createElement('button');
        checkButton.classList.add('check-button');

        checkButton.addEventListener('click', function() {
            addTaskToCompleted(todoObject.id);
        });

        container.append(checkButton);
    }
    
    return container;
}

function addTodo() {
    const textTodo = document.getElementById('title').value;
    const descTask = document.getElementById('desc').value;
    const timestamp = document.getElementById('date').value;

    const generateID = generateId();
    const todoObject = generateTodoObject(generateID, textTodo, descTask, timestamp, false); // kita akan membuat sebuah object dari todo dengan memanggil helper generateTodoObject() untuk membuat object baru.
    todos.push(todoObject); // kemudian object tersebut disimpan pada array todos menggunakan metode push().

    document.dispatchEvent(new Event(RENDER_EVENT)); // Setelah disimpan pada array, kita panggil sebuah custom event RENDER_EVENT menggunakan method dispatchEvent()
    // Custom event ini akan kita terapkan untuk me-render data yang telah disimpan pada array todos.

    saveData(); // ketika data pada array todos ada perubahan, perubahan tersimpan pada storage secara langsung
}

function addTaskToCompleted (todoId) {
    const todoTarget = findTodo(todoId);

    if (todoTarget == null ) return;

    todoTarget.isCompleted = true;
    document.dispatchEvent(new Event(RENDER_EVENT));

    saveData(); // ketika data pada array todos ada perubahan, perubahan tersimpan pada storage secara langsung
} // Seperti yang sudah dijelaskan sebelumnya, fungsi ini digunakan untuk memindahkan todo dari rak “Yang harus dilakukan” ke “Yang sudah dilakukan”. Prinsipnya adalah merubah state isCompleted dari sebelumnya false ke true, kemudian panggil event RENDER_EVENT untuk memperbarui data yang ditampilkan.

function removeTaskFromCompleted(todoId) { // fungsi ini akan menghapus Todo berdasarkan index yang didapatkan dari pencarian Todo dengan menggunakan findTodoIndex()
    const todoTarget = findTodoIndex(todoId);

    if (todoTarget === -1) return;

    todos.splice(todoTarget, 1); // Apabila pencarian berhasil, maka akan menghapus todo tersebut menggunakan fungsi splice()
    document.dispatchEvent(new Event(RENDER_EVENT));

    saveData(); // ketika data pada array todos ada perubahan, perubahan tersimpan pada storage secara langsung
}

function undoTaskFromCompleted(todoId) {
    const todoTarget = findTodo(todoId);

    if (todoTarget == null) return;

    todoTarget.isCompleted = false;
    document.dispatchEvent(new Event(RENDER_EVENT));

    saveData(); // ketika data pada array todos ada perubahan, perubahan tersimpan pada storage secara langsung
}

// open item list
const openList = document.getElementsByClassName('item');
for (let i = 0; i < openList.length; i++) {
    openList[i].addEventListener('click', function() {
        this.classList.add('open'); 
    });
}

// fitur editing todo list ( title, desc )
// terdapat fitur editing (lokasi fitur belum ditemukan pasti) dimana title dan deskripsi dapat diubah dan disimpan ( mengedit data yang sudah tersimpan / terdaftar )
function onEdit() {
    // const editTask = document.
}

// fitur searching ( title, desc )
// terdapat fitur search yang melakukan pencarian langsung berdasarkan "kata" yang tersedia / terdapat pada value title atau desc. (todo list) yang mengandung "konten" yang dicari dam menandai "konten" yang dicari tersebut dengan markup berwarna. kemudian terdapat tombol "jump" disebelah kanan bertuliskan "jump". ketika tombol "jump" diteka, user langsung diarahkan menuju (todolist) yg dimaksud.
function searchTodo() {}

// sorting by title, date
// pada section "yang harus dilakukan" dan section "yang sudah dilakukan" terdapat img/fitur sorting dimana ketika gambar tersebut ditekan akan muncul drop down menu dengan pilihan: urut naik by title, urut turun by title && urut naik by date, urut turun by date.
function sortingTodo() {}

function sortUpTitle() {}

function sortDownTitle() {}

function sortUpDate() {}

function sortDownDate () {}


// sebelum date saat ini, terhitung telat ( expired ) /  melewati batas deadline
// penambahan fitur dimana "todolist" yang sudah melewati tanggal yang sudah ditentukan (expired), maka "todolist" tersebut akan diberi tanda (dimerahkan / diblur / diabukan).
function expiredTodo() {}

document.addEventListener('DOMContentLoaded', function() {
    
    const submitForm = document.getElementById('form');

    submitForm.addEventListener('submit', function(event) {
        event.preventDefault(); //lemen form secara default akan memuat ulang secara otomatis website ketika submit. Karena pada latihan ini kita akan menyimpan data dalam memory dan data tersebut akan hilang ketika dimuat ulang, kita perlu memanggil method preventDefault() yang didapatkan dari object event. Dengan demikian, data yang disimpan dalam memory akan terjaga dengan baik.
        addTodo();
    });
    
    if (isStorageExist()) {
        loadDataFromStorage();
    }

});

document.addEventListener(SAVED_EVENT, function() {
    console.log(localStorage.getItem(STORAGE_KEY));
});

document.addEventListener(RENDER_EVENT, function() {
    // console.log(todos);

    const uncompletedTODOList = document.getElementById('todos');
    uncompletedTODOList.innerHTML = '';

    const completedTODOList = document.getElementById('completed-todos')
    completedTODOList.innerHTML = '';

    for ( const todoItem of todos ) {
        const todoElement = makeTodo(todoItem);
        if (!todoItem.isCompleted) { //memasang kondisi if statement untuk mem-filter hanya todo “Yang harus dibaca” saja lah yang perlu ditampilkan.
            uncompletedTODOList.append(todoElement);
        } else {
            completedTODOList.append(todoElement);
        }
    }
});