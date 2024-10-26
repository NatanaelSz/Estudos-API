import { prisma } from "../services/prisma";

export const createPessoa = async (data) => {
    const pessoa = await prisma.pessoa.create({
        data,
    })
    return pessoa;
};

export const getAll = async () => {
    const pessoas = await prisma.pessoa.findMany({});
    return pessoas;
};

export const getById = async (id) => {
    const pessoa = await prisma.pessoa.findUnique({
        where:{ id },
    });
    return pessoa;
};

export const updatePessoa = async (id, data) => {
    const pessoa = await prisma.pessoa.update({
        where: { id }, 
        data,
    });
    return pessoa;
}

export const deletePessoa = async (id) => {
    await prisma.pessoa.delete({
        where: { id },
    });
    return;  
}

