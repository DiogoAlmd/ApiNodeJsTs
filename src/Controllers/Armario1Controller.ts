import { Request, Response } from 'express';
import { pool } from '../config';

const request = pool.request();

class Armario1Controller{

    async listAll(req: Request, res: Response) {
        try{
            const result = await request.query('SELECT * FROM ARMARIO_1');
        
            res.json(result.recordset);
          }
          catch(err){
            console.log('erro', err);
            res.status(500);
          }
      }
}

export default new Armario1Controller();