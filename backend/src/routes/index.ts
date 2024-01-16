
import { Express} from 'express';
import v1Router from './v1';

export default (app: Express) => {
    app.use('/api/v1', v1Router);
}