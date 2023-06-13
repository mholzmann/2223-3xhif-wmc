import * as repo from "./repository/task-repository";
import * as db from "./db-connector";

main();

async function main() {
    await db.connect();
    console.log(await repo.getAllTasks());

    // console.log(await repo.getTask(4));

    // console.log(await repo.addTask("learn typescript", false));

    // const task = { 
    //     "id": 2,
    //     "action": "clean house", 
    //     "done": true
    // };
    // console.log(await repo.updateTask(task));

    // await repo.removeAllTasks();

    // console.log(await repo.removeTask(3));

    await db.disconnect();
}