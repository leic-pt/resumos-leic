---
title: Utilização do Kerberos
description: Como instalar e utilizar o Kerberos no âmbito do projeto
path: /po/guide/kerberos
type: guides
---

# Utilização do Kerberos

```toc

```

## Instalação

A instalação do kerberos irá depender da distribuição de Linux em uso, mas no geral será feita pelo _package manager_.  
Abaixo seguem alguns exemplos:

- Arch Linux: `sudo pacman -S krb5`
- Debian/Ubuntu/etc: `sudo apt install krb5-user`

## Obter config do IST

É possível obter a config copiando-a do sigma
```bash
scp ist1XXXXX@sigma.tecnico.ulisboa.pt:/etc/krb5.conf
sudo mv krb5.conf /etc/krb5.conf
```  

## Fazer login no Kerberos

```bash
kinit ist1XXXX@IST.UTL.PT
```

## Alterar a config de ssh para usar Kerberos

Adicionar o seguinte a ``~/.ssh/config``
```bash
Host sigma
    HostName sigma01.tecnico.ulisboa.pt
    User ist1XXXXX
    GSSAPIAuthentication yes
    GSSAPIDelegateCredentials yes
```
Depois disto, é possível passar a fazer ssh para o sigma com o comando ``ssh sigma``  
É aconselhável testar e ver se funciona.

:::tip

O ticket do Kerberos é apagado a cada restart, portanto é necessário repetir o passo 3 sempre que se volta a ligar o pc.

:::