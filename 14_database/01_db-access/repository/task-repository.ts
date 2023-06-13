import * as sql from "mssql";
import { Task } from "../model/task-model";

export async function getAllTasks(): Promise<Task[]> {
    // const result = await sql.query('select * from Task');
    const result = await sql.query`
        select * from Task
    `;
    return result.recordset;
}

export async function getTask(id: number): Promise<Task | undefined> {
    const result = await sql.query`
        select * from Task 
        where id=${id}
    `;
    return result.recordset[0];
}

export async function addTask(action: string, done: boolean): Promise<Task> {
    const result = await sql.query`
        insert into Task (action, done)
        output inserted.*
        values (${action}, ${done})
    `;
    return result.recordset[0];
}

export async function updateTask(task: Task): Promise<boolean> {
    const result = await sql.query`
        update Task 
        set action=${task.action}, 
            done=${task.done}
        where id=${task.id}
    `;
    return result.rowsAffected[0] === 1;
}

export async function removeAllTasks(): Promise<void> {
    await sql.query`
        delete from Task
    `;
}

export async function removeTask(id: number): Promise<boolean> {
    const result = await sql.query`
        delete from Task
        where id=${id}`;
    return result.rowsAffected[0] === 1;
}