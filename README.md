# Resumos LEIC

Este repo foi criado com o objetivo de partilhar resumos das várias UCs
do curso de LEIC-A no Instituto Superior Técnico.

## Como contribuir?

### Instalar ferramentas

Para correr o código localmente, é necessário as seguintes ferramentas: `git`, `nodejs` e `yarn`.
Abaixo encontram-se guias para instalação em Windows e Linux.

#### Windows

1. Fazer [download do `git`](http://git-scm.com/) e instalar o executável.
2. Fazer [download do `node`](https://nodejs.org/en/) e instalar a última versão LTS (à data, 14.X LTS).
3. Instalar o `yarn` através da **PowerShell**, correndo o comando `npm i -g yarn`.

#### Linux/macOS

1. Instalar o `git` e o `node` pelo package manager da distribuição. Atenção que o `node` em Debian/Ubuntu/etc está desatualizado.
   Recomendo seguir [este tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04#option-3-%E2%80%94-installing-node-using-the-node-version-manager) para ter o Node 14 LTS.
2. Instalar o `yarn` através do terminal, correndo o comando `npm i -g yarn`.

### Obter os ficheiros necessários

1. Fazer clone do repo:

```bash
git clone https://github.com/diogotcorreia/resumos-leic.git
```

2. Instalar dependências:

```bash
cd resumos-leic
yarn               # or yarn install
```

### Alterar conteúdos

Os ficheiros `.md` (markdown) estão na pasta `src`.
Para alterar os links na sidebar, é necessário alterar o ficheiro `src/.vuepress/config.js`.

Para iniciar o servidor local, correr o comando:

```bash
yarn dev
```

### Formatar o código

Antes de dar commit, é recomendado executar o `prettier` (se usarem um editor de texto - e.g. vscode - que já executa automaticamente, não é preciso).

```bash
yarn format
```
