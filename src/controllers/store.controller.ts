import { Request, Response } from 'express';
import Store from '../models/Stores';

export default class StoreController {
    static async create(req: Request, res: Response) {
        try {
            const store = await Store.create(req.body, {
                fields: ['tradingName','ownerName','document','coverageArea','address']
            });

            res.status(201).json(store);
            return;
        } catch (err) {
            console.error('Erro ao cadastrar loja:', err);

            res.status(400).json({ error: 'Erro ao cadastrar loja' });
            return;
        }
    }

    static async findAll(req: Request, res: Response) {
        try {
            const stores = await Store.findAll();

            res.status(200).json(stores);
            return;
        } catch (err) {
            console.error('Erro ao listar lojas:', err);

            res.status(400).json({ error: 'Erro ao cadlistarastrar lojas' });
            return;
        }
    }

    static async findById(req: Request, res: Response) {
        const storeId = parseInt(req.params.id, 10);

        if (Number.isNaN(storeId)) {
            res.status(422).json({ erro: 'ID de cliente inválido' });
            return;
        }

        try {
            const store = await Store.findByPk(storeId);

            if (!store) {
                res.status(404).json({ error: 'Loja nao foi encontrada' });
                return;
            }

            res.status(200).json(store);
            return;
        } catch (err) {
            console.error('Erro ao listar lojas:', err);

            res.status(400).json({ error: 'Erro ao cadlistarastrar lojas' });
            return
        }
    }
}
