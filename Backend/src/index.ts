import express, { Request, Response } from 'express';
import clientConfig from './db';
import { v4 as uuidv4 } from 'uuid';
import { Client } from 'pg';


const port = 3000;
const app = express();
app.use(express.json())
const tableName = 'todos'

const getTodos = async (req: Request, res: Response): Promise<void> => {
    const client = new Client(clientConfig)
    await client.connect()
    const result = await client.query(`SELECT * FROM ${tableName}`)
    await client.end()
    console.log(result)
    res.json(result.rows)
};


const addTodo = async (req: Request, res: Response) => {
    try {
        const client = new Client(clientConfig);
        await client.connect();

        const { title } = req.body;
        const id = uuidv4();

        const query = 'INSERT INTO todos(title, id) VALUES($1, $2)';
        const values = [title, id];

        const result = await client.query(query, values);
        console.info(result);
        res.json(req.body);

    } catch (error) {
        console.error(error);
        res.json({ "error": error });
    }
};



const updateTodo = async (req: Request, res: Response) => {

    const title = req.body.title;
    const todoId = req.params.todoId
    const client = new Client(clientConfig)

    await client.connect()
    const query = `UPDATE todos SET title = $1 WHERE id = $2`
    const values = [title, todoId];
    await client.query(query, values);
    await client.end()

    return res.json({ "success": true });
};

const changeTodoStatus = async (req: Request, res: Response) => {
    const todoId = req.params.todoId
    const client = new Client(clientConfig)
    await client.connect()
    let query = `UPDATE todos
                SET iscompleted = CASE 
                WHEN iscompleted = true THEN false
                ELSE true
                END
                WHERE id = $1;`
    let values = [todoId];
    const result = await client.query(query, values);
    await client.end()
    return res.json({ "success": true });



};

app.get('/todos', getTodos);
app.put('/change-status/:todoId', changeTodoStatus);
app.post('/create-todo', addTodo);
app.put('/update-todo/:todoId', updateTodo);
app.put('/change-status/:todoId', changeTodoStatus);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
