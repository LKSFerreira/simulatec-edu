# Projeto de Aplicação Web para estudar e praticar simulado de Certificações

Este projeto tem como objetivo desenvolver uma aplicação web completa para auxiliar os usuários a praticar seus conhecimentos para certificação. Inicialmente implementaremos a Certificação AWS Practitioner. A aplicação será construída usando Java e Spring Boot para a API, React para o frontend e Amazon DynamoDB como banco de dados.

## Sumário

- [Características Principais](#Características-Principais)
- [Roadmap](#roadmap)
- [Contribuições](#contribuições)
- [Desenvolvimento de Aplicação Web](#desenvolvimento-de-aplicação-web)
- [Planejamento](#planejamento)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Desenvolvimento Backend](#desenvolvimento-backend)
- [Desenvolvimento Frontend](#desenvolvimento-frontend)
- [Testes](#testes)
- [Implantação](#implantação)
- [Manutenção e Iteração](#manutenção-e-iteração)
- [Ideias Adicionais](#ideias-adicionais)

### Características Principais

- **Cadastro de Usuário**: Os usuários poderão se cadastrar na plataforma usando tokens.
- **Testes**: A aplicação contará com uma ampla cobertura de testes para garantir a qualidade do código.
- **Clean Code**: O código será escrito seguindo as melhores práticas de clean code.
- **Criptografia de Dados**: Os dados dos usuários serão criptografados para garantir sua segurança.

### Roadmap

O desenvolvimento do projeto seguirá o seguinte roadmap:

1. - [ ] **Planejamento**: Definição clara dos requisitos do projeto e planejamento do modelo de dados no DynamoDB.
2. - [ ] **Desenvolvimento da API**: Construção da API usando Java e Spring Boot, com implementação dos endpoints necessários e configuração da conexão com o DynamoDB.
3. - [ ] **Desenvolvimento do Frontend**: Construção do frontend usando React, com implementação das páginas e componentes necessários.
4. - [ ] **Testes**: Implementação de testes unitários e de integração tanto para o backend quanto para o frontend.
5. - [ ] **Implantação**: A API será implantada na plataforma Render e o frontend no Vercel.

### Contribuições

Estamos abertos a ideias que possam contribuir para o projeto, melhorar o desenvolvimento e aplicar conceitos reais do dia-a-dia de um programador. Sinta-se à vontade para contribuir!

### Desenvolvimento de Aplicação Web

Este é um roteiro básico para o desenvolvimento de uma aplicação web completa usando Java, Spring Boot, React e Amazon DynamoDB.

### Planejamento

- [ ] Defina claramente os requisitos do seu projeto.
  - [X] Quais são os principais recursos que você deseja oferecer aos usuários?
        
    O aplicativo permitirá que os usuários pratiquem seus conhecimentos para a certificação AWS Practitioner. Os usuários poderão se cadastrar na plataforma usando tokens. Além disso, a aplicação contará com uma ampla cobertura de testes para garantir a qualidade do código. O código será escrito seguindo as melhores práticas de clean code. Os dados dos usuários serão criptografados para garantir sua segurança.

  - [X] Principais componentes do seu aplicativo?
        
    O aplicativo será construído usando Java e Spring Boot para a API, React para o frontend e Amazon DynamoDB como banco de dados.

  - [X] Quais são as principais páginas e componentes do frontend?
        
    Página de login, página de registro, página inicial, páginas de conteúdo de estudo, quizes e testes práticos.

  - [X] Quais são os principais modelos de dados que você precisa armazenar?
        
    Informações sobre os usuários (como nome de usuário, senha, nome, cpf, ...), bem como informações sobre o conteúdo do curso (como perguntas do quiz, respostas alternativas, reposta correta, ...).

  - [X] Quais são os principais recursos de segurança que você precisa implementar?
        
    Tokens para o cadastro do usuário, criptografia dos dados para proteger informações sensíveis como senhas. Proteção contra ataques de injeção SQL (se aplicável) e a garantia de que todas as comunicações entre o cliente e o servidor serão criptografadas usando HTTPS.

  - [X] Quais são os principais endpoints da API?
        
  - usuario
    - POST /usuario/
    - GET /usuario/{id} (apenas para admin)
    - PUT /usuario/{id}
    - DELETE /usuario/{id} (apenas para admin)
    - GetAll /usuario/ (apenas para admin)
      
  - simulado
    - POST /simulado/
    - GET /simulado/{id}
    - PUT /simulado/{id} (apenas para admin)
    - DELETE /simulado/{id} (apenas para admin)
    - GetAllbyCurso /simulado/{curso}
    - GetAll /simulado/ (apenas para admin)

- [ ] Desenhe um diagrama de arquitetura para ter uma visão clara de como os componentes se encaixam.
  - [ ] Diagrama de Arquitetura
  - [X] Diagrama de Classes
        
    ![Imagem](https://cdn.discordapp.com/attachments/1104077258978754672/1164715632181399662/Modelagem_Classe_Simulado.drawio.png?ex=654438f6&is=6531c3f6&hm=2d1f6258d21a4e8c3342fc14fbfeaefe15a47c39a4b151ed25c392b4a5f9a928&)
- [ ] Planeje seu modelo de dados no DynamoDB.

### Configuração do Ambiente

- [ ] Instale o Java, Spring Boot e React em seu ambiente de desenvolvimento.
- [ ] Configure o AWS CLI e o AWS SDK para Java.

### Desenvolvimento Backend

- [ ] Comece criando a estrutura básica do seu aplicativo Spring Boot.
- [ ] Configure a conexão com o DynamoDB.
- [ ] Implemente os endpoints da API REST necessários.
- [ ] Adicione autenticação e geração de tokens usando, por exemplo, JWT.

### Desenvolvimento Frontend

- [ ] Crie a estrutura básica do seu aplicativo React.
- [ ] Implemente as páginas e componentes necessários.
- [ ] Conecte o frontend com a API backend.

### Testes

- [ ] Escreva testes unitários e de integração para o backend e frontend.
- [ ] Use ferramentas como JUnit e Mockito para o backend e Jest para o frontend.

### Implantação

- [ ] Configure o ambiente de produção na plataforma Render para a API e no Vercel para o frontend.

### Manutenção e Iteração

- [ ] Monitore o desempenho do aplicativo.
- [ ] Faça ajustes conforme necessário com base nos feedbacks dos usuários.

### Ideias Adicionais

Ideias que podem contribuir para o projeto:

- **Gamificação**: Transforme o processo de aprendizado em um jogo onde os usuários ganham pontos ou distintivos ao atingir certos marcos.
- **Fórum da Comunidade**: Permita que os usuários interajam uns com os outros, fazendo perguntas e compartilhando conhecimentos.
- **Progresso de Aprendizado**: Mostre aos usuários o quanto eles progrediram em seu caminho de aprendizado.
