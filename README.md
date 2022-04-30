# Resumos LEIC

Este repo foi criado com o objetivo de partilhar resumos das várias UCs
do curso de LEIC-A no Instituto Superior Técnico. Qualquer contribuição é bem-vinda (exceto material de professores, como _slides_ e livros, falem primeiro connosco).

## Como contribuir?

### Instalar ferramentas

Para correr o código localmente, é necessário as seguintes ferramentas: `git`, `nodejs` e `yarn`.
Abaixo encontram-se guias para instalação em Windows e Linux.

#### Windows

1. Fazer [download do `git`](http://git-scm.com/) e instalar o executável.
2. Fazer [download do `node`](https://nodejs.org/en/) e instalar a última versão LTS (à data, 14.X LTS).
3. Instalar o `yarn` através da **PowerShell**, correndo o comando `npm i -g yarn`.

#### Linux

1. Instalar o `git` e o `node` pelo package manager da distribuição. Atenção que o `node` em Debian/Ubuntu/etc está desatualizado.
   Recomendo seguir [este tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04#option-3-%E2%80%94-installing-node-using-the-node-version-manager) para ter o Node 14 LTS.
2. Instalar o `yarn` através do terminal, correndo o comando `npm i -g yarn`.

### Obter os ficheiros necessários

1. Fazer clone do repo:

```bash
git clone https://github.com/leic-pt/resumos-leic.git
```

2. Instalar dependências:

```bash
cd resumos-leic
yarn               # or yarn install
```

### Alterar conteúdos

Os ficheiros `.md` (markdown) estão na pasta da respetiva UC dentro de `content`.
Assim que um ficheiro `.md` é adicionado à respetiva pasta da UC (e esteja associado a um `type`), é acessível a partir da sidebar. Tem ainda de ser definido o respetivo `path` (`/asa/introducao`, por exemplo).  
Os ficheiros podem ainda ter diferentes categorias, aparecendo em diferentes sub-secções da sidebar consoante a mesma. Em princípio, ser-vos-á útil apenas a categoria `content`, que deve ser adicionada ao _header_ de cada ficheiro.

Cada ficheiro deve conter um _header_ com a meta-informação útil correspondente a cada ficheiro, principalmente:

- `title: <título>`, onde `<título>` será o título que aparece associado à página correspondente ao ficheiro nos resumos;

- `description: <bullet points>`, secção que deverá indicar sucintamente os pontos importantes abordados neste capítulo dos resumos (e que aparece no _embed_ do URL ao partilhar o link da página);

- `path: /<UC>/<nome-da-pagina>`, _self-explanatory_;

- `type: <categoria>`, tal como mencionado acima provavelmente apenas vos interessará a categoria `content`.

Para iniciar o servidor local, correr o comando:

```bash
yarn dev
```

### Formatar o código

Antes de fazer um commit, é recomendado executar o `prettier` (se usarem um editor de texto - e.g. vscode - que já executa automaticamente, não é preciso). Devem correr o comando na raiz do _repo_ (`/home/.../resumos-leic`, portanto).

```bash
yarn format
```

## Wiki

Se tiverem mais dúvidas, podem recorrer à [Wiki](https://github.com/leic-pt/resumos-leic/wiki) e/ou entrar em contacto connosco!

## Parceiros

![Powered by Vercel](./src/images/powered-by-vercel.svg)
