---
title: Instalação de R
description: >-
  Como instalar e configurar R
path: /pe/guides/r-setup
type: guides
---

# Instalação e Configuração de R

```toc

```

## Instalar R

Para instruções gerais, seguir as instruções do [mirror de R](https://cloud.r-project.org/).

- **Linux:**

  Devem instalar R com o package manager da vossa distribuição.

  ```bash
  sudo pacman -S r           # ArchLinux
  sudo apt install r-base    # Debian/Ubuntu
  sudo dnf install R         # Fedora
  ```

- **Windows:**

  Fazer download do [instalador](https://cloud.r-project.org/bin/windows/base/) e execulá-lo.

- **MacOS:**

  Fazer download do [instalador](https://cloud.r-project.org/bin/macosx/) e execulá-lo.

Para verificar que o R ficou instalado, executar `R` no terminal.
Devem obter um output semelhante ao abaixo:

```bash
$ R

R version 4.2.0 (2022-04-22) -- "Vigorous Calisthenics"
Copyright (C) 2022 The R Foundation for Statistical Computing
Platform: x86_64-pc-linux-gnu (64-bit)

R is free software and comes with ABSOLUTELY NO WARRANTY.
You are welcome to redistribute it under certain conditions.
Type 'license()' or 'licence()' for distribution details.

  Natural language support but running in an English locale

R is a collaborative project with many contributors.
Type 'contributors()' for more information and
'citation()' on how to cite R or R packages in publications.

Type 'demo()' for some demos, 'help()' for on-line help, or
'help.start()' for an HTML browser interface to help.
Type 'q()' to quit R.
```

Escrever `q()` para sair.

### Radian Console

Se forem usar o terminal para configurar ou executar comandos em R, recomendo
vivamente a instalação de [radian](https://github.com/randy3k/radian), uma
consola alternativa com muito mais funcionalidades e mais estável.

A instalação pode ser feita através do `pip` (Python) ou pelo _package manager_
da vossa distribuição, se disponível:

```bash
pip3 install -U radian    # Python pip
paru -S radian            # ArchLinux (AUR)
```

Para usar o radian, executar o comando `radian`.

### RStudio

Para instalar o RStudio, um IDE para R, seguir as instruções no
[site oficial](https://www.rstudio.com/products/rstudio/) ou instalar pelo
_package manager_ da vossa distribuição Linux.

```bash
paru -S rstudio-desktop-bin    # ArchLinux (AUR)
```

### Jupyter Notebooks

<!-- @randomicecube do your thing -->
