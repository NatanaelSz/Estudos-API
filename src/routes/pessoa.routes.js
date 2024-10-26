import { create, get, getId, update, removerPessoa } from "../controllers/pessoa.controller";

const pessoaRoutes = app => {
    app.post("/pessoa", create);
    app.get("/pessoas", get);
    app.get("/pessoa/:id", getId);
    app.put("/atualizarpessoa/:id", update);
    app.delete("/removerpessoa/:id", removerPessoa);
}

export default pessoaRoutes;