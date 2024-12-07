<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1>Documentação do Frontend - Sistema de Doação de Órgãos</h1>
  
  <h2>Contextualização</h2>
  <p>
    O frontend foi desenvolvido em <strong>React.js</strong> com foco em responsividade e facilidade de uso. Ele é integrado com a API do Laravel para gerenciar usuários, órgãos e hospitais.
  </p>
  
  <h2>Tecnologias Utilizadas</h2>
  <ul>
    <li>React.js</li>
    <li>Axios para requisições HTTP</li>
    <li>CSS para estilização</li>
    <li>React Router para navegação</li>
  </ul>
  
  <h2>Estrutura do Projeto</h2>
  <pre>
src/
  ├── components/
  │   ├── Auth/
  │   ├── Button/
  │   ├── Dashboard/
  │   ├── Fields/
  │   ├── Hospital/
  │   ├── Layout/
  │   ├── Modal/
  │   ├── shared/
  ├── pages/
  │   ├── Auth/
  │   ├── Dashboard/
  │   ├── Organs/
  │   └── User/
  ├── services/
  ├── styles/
  ├── utils/
  ├── App.js
  ├── index.js
.env
  </pre>

  <h2>Configuração e Execução Local</h2>
  <h3>Pré-requisitos</h3>
  <ul>
    <li>Node.js instalado</li>
    <li>Caso for iniciar o projeto por completo inicie pelo DOCKER no backend, caso queira iniciar separadamente, inicie o banco de dados no backend e depois execute os proximos comandos no front (Laravel API)</li>
  </ul>
  
  <h3>Passos</h3>
  <ol>
    <li><strong>Clone o repositório</strong>:
      <pre><code>git clone &lt;url-do-repositorio&gt;
cd organ-donation-frontend
      </code></pre>
    </li>
    <li><strong>Instale as dependências</strong>:
      <pre><code>npm install</code></pre>
    </li>
    <li><strong>Configure o arquivo .env</strong>:
      <pre><code>REACT_APP_API_URL=http://localhost:8000/api</code></pre>
    </li>
    <li><strong>Execute o projeto</strong>:
      <pre><code>npm start</code></pre>
    </li>
  </ol>
</body>
</html>
