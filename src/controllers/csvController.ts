import { Request, Response } from 'express';
import fs from 'fs';
import csvParser from 'csv-parser';
import path from 'path';

export class ConvertCSV {
  async handle(req: Request, res: Response) {
    const csv = path.join(__dirname, '..','assets', 'data.csv');
    const results: any[] = [];

    fs.createReadStream(csv)
      .pipe(csvParser())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        res.json(results);
      });
  }
}