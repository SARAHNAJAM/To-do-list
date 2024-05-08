
import inquirer from "inquirer";


// Interface
interface Todolist {
    task: string;
    completed: boolean;
}

let todolist: Todolist[] = [];

// Function to display the main menu and handle user actions
let mainMenu = async () => {
    while (true) {
        let { action } = await inquirer.prompt({
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: ["Add Task", "View Task", "Mark as complete", "Delete Task", "Exit"]
        });

        switch (action) {
            case 'Add Task':
                await addTask();
                break;
            case 'View Task':
                // Implement viewTask function
                console.log(todolist);
                break;
            case 'Mark as complete':
                await markAsComplete();
                break;
            case 'Delete Task':
                // Implement deleteTask function
                break;
            case 'Exit':
                console.log("Goodbye!");
                return;
        }
    }
};

// Function to add a task
let addTask = async () => {
    let { task } = await inquirer.prompt({
        type: "input",
        name: "task",
        message: "Enter task:"
    });
    todolist.push({ task, completed: false });
};

// Function to mark a task as complete
let markAsComplete = async () => {
    let { taskIndex } = await inquirer.prompt({
        type: "list",
        name: "taskIndex",
        message: "Select task to mark as complete:",
        choices: todolist.map((item, index) => ({ name: item.task, value: index }))
    });
    todolist[taskIndex].completed = true;
};

// Call the mainMenu function to start the application
mainMenu();