import  express , {Express}  from "express";
import cors from 'cors'
// import morgan from 'morgan';
import 'dotenv/config'
import createRouter from "./routes";



const app: Express = express();
const port = 3001;

const router = createRouter()




app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ credentials: false }));
// baseURL/api
app.use('/api' , router)

app.listen(port, () =>
    console.log(`🚀 Server listening at http://localhost:${port}`)
);