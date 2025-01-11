"use strict";
class TodoApp {
    constructor(taskList) {
        this.tasks = [];
        this.nextId = 1;
        this.taskList = taskList;
    }
    //methods
    //add
    add(title) {
        const task = { id: this.nextId++, title };
        this.tasks.push(task);
        this.render();
    }
    //remover
    remove(id) {
        this.tasks = this.tasks.filter(item => item.id !== id);
        this.render();
    }
    //render
    render() {
        this.taskList.innerHTML = "";
        this.tasks.forEach(task => {
            const li = document.createElement("li");
            li.className = "flex w-full border-solid border-[1px] rounded justify-between items-center p-2 mb-1";
            const title = document.createElement("p");
            title.textContent = task.title;
            li.appendChild(title);
            const button = document.createElement("button");
            button.className = "bg-red-500 text-white px-2 py-1 rounded";
            button.textContent = "Deletar";
            button.onclick = () => this.remove(task.id);
            li.appendChild(button);
            this.taskList.appendChild(li);
        });
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const taskList = document.getElementById("taskList");
    const taskNew = document.getElementById("taskNew");
    const buttonAdd = document.getElementById("buttonAdd");
    const app = new TodoApp(taskList);
    buttonAdd.addEventListener("click", () => {
        const title = taskNew.value.trim();
        if (title) {
            app.add(title);
            taskNew.value = "";
        }
    });
});
