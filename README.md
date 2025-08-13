
# 🏋️‍♀️ Calculadora de IMC em React

Este é um projeto de uma calculadora de Índice de Massa Corporal (IMC) desenvolvida com React. O objetivo é calcular o IMC do usuário com base em sua altura e peso, e exibir uma tabela com a classificação correspondente à sua situação corporal.

## ✨ Funcionalidades

  * **Cálculo de IMC:** Insira sua altura e peso para obter o resultado do seu IMC.
  * **Classificação Corporal:** O resultado do IMC é comparado com uma tabela de dados para classificar sua situação (ex: abaixo do peso, peso normal, sobrepeso).
  * **Componentes Reutilizáveis:** O projeto é estruturado em componentes React para facilitar a manutenção e o desenvolvimento.
  * **Limpeza de Dados:** Botão para resetar o cálculo e limpar os campos.

## 🚀 Tecnologias Utilizadas

  * **React:** Para a construção da interface do usuário e o gerenciamento do estado.
  * **Vite:** Ferramenta de build de última geração para front-end, garantindo uma experiência de desenvolvimento rápida.
  * **HTML & CSS:** Para a estrutura e estilização dos componentes.

## 🛠️ Instalação e Execução

Para rodar este projeto em seu ambiente de desenvolvimento, siga os passos abaixo.

### Pré-requisitos

Certifique-se de que você tem o **Node.js** instalado em sua máquina. O Node.js vem com o `npm`, que será usado para instalar as dependências.

### Passos

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    ```

2.  **Navegue até o diretório do projeto:**

    ```bash
    cd nome-do-repositorio
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

Após a execução do comando, o projeto estará disponível no seu navegador em `http://localhost:5173`.

## 📂 Estrutura de Pastas

A estrutura do projeto é modular e organizada para facilitar o desenvolvimento.

```
src/
├── componentes/        # Componentes reutilizáveis (botões, tabelas, formulários)
│   ├── Button.jsx
│   ├── ImcTable.jsx
│   └── ...
├── data/               # Dados estáticos (ex: a tabela de classificação do IMC)
│   └── data.js
├── App.jsx             # O componente principal da aplicação
├── App.css             # Estilização global
└── ...
```

## 📝 Observações

  * O projeto utiliza a função `useState` do React para gerenciar o estado da aplicação (IMC, informações da classificação, etc.).
  * Os dados de classificação do IMC estão em um arquivo separado (`data/data.js`), tornando-os fáceis de modificar ou expandir.
  * A renderização condicional (`{imc ? <ImcTable .../> : <Form .../>}`) é utilizada para alternar entre o formulário de cálculo e a tabela de resultados.

-----
