# 🚀 Node.js HTTP Server without frameworks

## 📜 Descrição

Este repositório contém um servidor simples em Node.js que fornece uma lista de usuários quando acessado via `localhost:8080/users`. O servidor também exibe uma mensagem de status quando acessado através de `localhost:8080`.

## 🛠️ Tecnologias Utilizadas

- **Node.js:** Ambiente de execução para JavaScript no servidor.
- **HTTP Module:** Módulo nativo do Node.js para criação de servidores HTTP.
- **Nodemon:** Ferramenta para reiniciar automaticamente o servidor em ambiente de desenvolvimento.

<br>

## 📋 Pré-requisitos

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas:

- **Node.js e npm:** Baixe em [https://nodejs.org/](https://nodejs.org/).
- **Git:** Baixe em [https://git-scm.com/](https://git-scm.com/).
- **Ferramentas de Teste de API:**
  - [Postman](https://www.postman.com/downloads/)
  - [Insomnia](https://insomnia.rest/download/)
  - [Thunder Client (extensão no Visual Studio Code)](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)

<br>

## ⚙️ Configuração do Projeto

1. **Clonar o Repositório:**

    ```bash
    git clone [URL DO REPOSITÓRIO]
    ```

2. **Instalar Dependências:**

    ```bash
    npm install
    ```

3. **Iniciar o Servidor em Ambiente de Desenvolvimento:**

    ```bash
    npm run start:dev
    ```

4. Acesse [http://localhost:8080](http://localhost:8080) para verificar o status do servidor ou [http://localhost:8080/users](http://localhost:8080/users) para obter a lista de usuários.

<br>

## 📋 Endpoints

### Rota: `/`

- **Método:** `GET`
- **Descrição:** Retorna uma mensagem indicando que o servidor está em execução.
- **Exemplo de Resposta:**
  ```html
  <h1>Server Running.</h1>
  <h2>To get the users list, go to localhost:8080/users</h2>
  ```

### Rota: `/users`

- **Método:** `GET`
- **Descrição:** Retorna a lista de usuários em formato JSON.
- **Exemplo de Resposta:**
  ```json
  [
    {
      "name": "Edison Matos",
      "email": "edison@ed.com"
    },
    {
      "name": "Thomas Edison",
      "email": "thomas@thomas.com"
    }
  ]
  ```

<br>

## 🧑‍💻 Autor

Este projeto foi desenvolvido por [Edison Matos](https://github.com/EdisonMatos).

![Edison Matos](https://avatars.githubusercontent.com/u/17342047?s=200)

[Edison Matos](https://github.com/EdisonMatos) é um entusiasta da tecnologia e desenvolvedor apaixonado por criar soluções inovadoras.

<br>

## 🤝 Contribuição

Se deseja contribuir para o desenvolvimento deste projeto, siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para suas alterações: `git checkout -b feature/nome-da-sua-feature`.
3. Faça as alterações desejadas e commit: `git commit -m 'Adiciona nova feature'`.
4. Push para a branch: `git push origin feature/nome-da-sua-feature`.
5. Abra um pull request para revisão.

<br>

## 📄 Licença

Este projeto é licenciado sob a Licença MIT.
