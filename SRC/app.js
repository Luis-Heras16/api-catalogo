import express from 'express';
import morgan from 'morgan';
import routerEmpresas from './routes/empresas.routes.js';
import routerAuth from './routes/auth.routes.js';
import cors from 'cors';


const app = express();
var corsOptions={
    origin:'*',
    optionSuccessStatus:200
}
//settings
app.set('port', process.env.PORT || 3000);
//middlewares

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors(corsOptions));
app.use(morgan('dev'));
//routes
 app.use('/api/empresas', routerEmpresas);
 app.use('/api/auth', routerAuth);
export default app;