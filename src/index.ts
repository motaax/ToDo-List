
interface Task {
    id: number
    title: string
}

class TodoApp {
    private taskList: HTMLUListElement
    private tasks: Task[] = []
    private nextId: number = 1

    constructor(taskList: HTMLUListElement) {
        this.taskList = taskList
    }

    //methods
    //add
    add(title: string): void {
        const task: Task = { id: this.nextId++, title}
        this.tasks.push(task)
        this.render()
    }

    //remover
    remove(id: number): void {
        this.tasks = this.tasks.filter(item => item.id !== id)
        this.render()
    }

    //render
    private render(): void {
        this.taskList.innerHTML = ""
        this.tasks.forEach(task => {

            const li = document.createElement("li") 
            li.className = "flex w-full border-solid border-[1px] rounded justify-between items-center p-2 mb-1"

            const title = document.createElement("p")
            title.textContent = task.title
            li.appendChild(title)

            const button = document.createElement("button")
            button.className = "bg-red-500 text-white px-2 py-1 rounded"
            button.textContent = "Deletar"
            button.onclick = () => this.remove(task.id)
            li.appendChild(button)
            this.taskList.appendChild(li)
        })
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const taskList = document.getElementById("taskList") as HTMLUListElement
    const taskNew = document.getElementById("taskNew") as HTMLInputElement
    const buttonAdd = document.getElementById("buttonAdd") as HTMLButtonElement

    const app: TodoApp = new TodoApp(taskList)

    buttonAdd.addEventListener("click", () => {
        const title = taskNew.value.trim()
        if (title) {
            app.add(title)
            taskNew.value = ""
        }
    })
})