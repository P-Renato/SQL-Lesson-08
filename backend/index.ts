import express from "express";
import cors from 'cors';
import { createError } from "./utils/helpers";
import usersRouter from './routers/users';
import sequelize from "./utils/db";


const app = express();

/* ---------------   middlewares  --------------------  */

app.use(cors());
app.use(express.json());




/* ---------------   database  --------------------  */


try {
    await sequelize.authenticate()
} catch (err) {
    console.error("db err:", err);
}

await sequelize.sync({ force: true });

/* ---------------   routers  --------------------  */

app.use('/api', usersRouter);


/* ---------------   error handers  --------------------  */

app.use((req, res, next) => {
    next(createError(404, "Route not defined!"))
})

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    if(err) {
        res.status(err.status || 500).json({error: err.message });
    }
})

const port = process.env.PORT || 5021;
app.listen(port, () =>
  console.log(`server run on: http://localhost:${port} 🚀`)
);
