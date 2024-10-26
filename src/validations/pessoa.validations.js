import * as yup from "yup";

export const pessoaValidation = yup.object({
    matricula:   yup.string().required().min(5),
    nome_pessoa: yup.string().required(),
    email:       yup.string().required().email(),
    telefone:    yup.string().nullable(true),
});



