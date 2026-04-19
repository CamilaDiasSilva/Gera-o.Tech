# Projeto Ge

Este projeto contém duas funções JavaScript simples para validar CPF e buscar endereço por CEP usando a API ViaCEP.

## Arquivos

- `copilot_cpf.js` - valida CPF com ou sem pontuação.
- `copilot_api.js` - busca endereço a partir de um CEP usando
 a API ViaCEP.
 - `.vscode/Lista.js` - lista


## Instalação

Não há dependências externas obrigatórias. Basta ter um ambiente que suporte JavaScript moderno (Node.js ou navegador).

1. Clone ou copie este diretório.
2. Abra o terminal na pasta do projeto.

## Uso

### Executar `copilot_cpf.js`

```bash
node copilot_cpf.js
```

Esse script demonstra a função `validateCPF` com exemplos de CPF válido e inválido.

### Executar `copilot_api.js`

```bash
node copilot_api.js
```

Esse script demonstra a função `fetchAddressByCEP` buscando dados de endereço a partir de CEPs válidos e inválidos.

> Observação: `copilot_api.js` faz requisições HTTP para a API ViaCEP, então precisa de conexão com a internet.

### Executar `server.js`

```bash
node server.js
```

Inicia um servidor HTTP simples em `http://localhost:3000` com essas rotas:

- `GET /health` retorna um JSON com `status: 'ok'` e `uptime`.
- `GET /users/:id` retorna um usuário estático pelo `id` ou `404` se não existir.
- `POST /sum` aceita JSON com `a` e `b` numéricos e retorna `{ a, b, sum }`.

## Descrição rápida das funções

- `validateCPF(cpf)` - retorna `true` se o CPF for válido ou `false` caso contrário.
- `fetchAddressByCEP(cep)` - retorna um objeto com `cep`, `logradouro`, `bairro`, `localidade` e `uf`.
