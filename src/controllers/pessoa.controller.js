import { pessoaValidation } from "../validations/pessoa.validations";
import { createPessoa, getAll, getById, updatePessoa, deletePessoa } from "../repositorys/pessoa.repositorys";

export const create = async (req, res) => {
    try {
        await pessoaValidation.validate(req.body);


        const pessoa = await createPessoa(req.body);
        res.status(200).send(pessoa);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const get = async(req, res) => {
    try {
        const pessoas = await getAll();
        res.status(200).send(pessoas);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getId = async  (req, res) => {
    try {
        const pessoa = await getById(Number(req.params.id));
        res.status(200).send(pessoa);
    } catch (error) {
        res.status(400).send(error);
    }
}

export const update = async (req, res) => {
    try {
        const pessoa = await updatePessoa(Number(req.params.id), req.body); 
        res.status(200).send(pessoa);  
    } catch (error) {
        res.status(400).send(error);  
    }   
}

export const removerPessoa = async (req, res) => {
    try {
        await deletePessoa(Number(req.params.id));
        res.status(200).send('Pessoa removida com sucesso');  
    } catch (error) {
        res.status(400).send(error); 
    }
}

