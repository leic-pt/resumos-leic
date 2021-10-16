---
title: Formulário - 1º Teste
description: Formulário com Fórmulas e Constantes para o 1º Teste
path: /fis-ii/primeiro-teste
type: cheatsheets
---

# Formulário Oficial

[Formulário Oficial da Cadeira (PDF)](https://drive.google.com/file/d/1Ouk2xSUb-f50SnUSC4HWQzAzfl825A_J/view?usp=sharing)

### Integrais

$$
\int{\cfrac{dx}{(x^2 +b)^{\frac{3}{2}}}} = \cfrac{1}{b}\cfrac{x}{\sqrt{x^2 +b}}
$$

$$
\int{\cfrac{x dx}{(x^2 +b)^{\frac{3}{2}}}} = - \cfrac{1}{\sqrt{x^2 +b}}
$$

$$
\int{\cfrac{x dx}{\sqrt{x^2 + b}}} =  \sqrt{x^2 +b}
$$

$$
\int{\cfrac{ dx}{\sqrt{x^2 + b}}} =  \ln(x + \sqrt{x^2 +b})
$$

$$
\int{\cfrac{ dx}{x (x + a)}} = \cfrac{1}{a} \ln(\cfrac{x}{x+a})
$$

### Coordenadas

#### Coordenadas Cartesianas $(x,y,z)$

$d\vec l = dx \ \vec u_x + dy  \ \vec u_y + dz \  \vec u_z$

$dS = dx \ dy$

$dv = dx \ dy \ dz$

$\vec \nabla F =( \cfrac{\partial F}{\partial x},\cfrac{\partial F}{\partial y},\cfrac{\partial F}{\partial z}) $

$\vec \nabla \cdot \vec A =  \cfrac{\partial A_x}{\partial x} + \cfrac{\partial A_y}{\partial y} + \cfrac{\partial A_z}{\partial z}$

$\vec \nabla \times \vec A = (\cfrac{\partial }{\partial x}, \cfrac{\partial }{\partial y}, \cfrac{\partial }{\partial z}) \times (A_x, A_y, A_z)$

#### Coordenadas Polares $(r,\theta)$

$d\vec l = dr \ \vec u_r + r \ d\theta \ \vec u_{\theta}$

$dS = r \ dr \ d\theta$

#### Coordenadas Cilíndricas $(r, \theta, z)$

$d \vec l = dr \ \vec u_r + r \ d \theta \ \vec u{\theta} + dz \ \vec u_z $

$dv = r \ dr \ d \theta \ dz$

$\vec \nabla F = ( \cfrac{\partial F}{\partial r},\cfrac{1}{r}\cfrac{\partial F}{\partial \theta},\cfrac{\partial F}{\partial z}) $

$\vec \nabla \cdot \vec A = \cfrac{1}{r}\cfrac{\partial(r \ A_r)}{\partial r} + \cfrac{1}{r}\cfrac{\partial \ A{\theta}}{\partial \theta} + \cfrac{\partial A_z}{\partial z} $

$\vec \nabla \times \vec A = (\cfrac{1}{r} \cfrac{\partial A_z}{\partial \theta}- \cfrac{\partial A_\theta}{\partial z}) \vec u_r + (\cfrac{\partial A_r}{\partial z} - \cfrac{\partial A_z}{\partial r} ) \vec u_{\theta} + (\cfrac{1}{r} \cfrac{\partial(r \ A_{\theta})}{\partial r} - \cfrac{1}{r} \cfrac{\partial A_r}{\partial \theta} )\vec u_z$

#### Coordenadas Esféricas $(r,\theta, \phi)$

$d\vec l = dr \ \vec u_r + r \ d\theta \ \vec u_{\theta} + r \ sin \theta \ d \phi \ \vec u_{\phi}$

$dv = r^2 \ dr \ sin \theta \ d\theta \ d\phi$

$\vec \nabla F = ( \cfrac{\partial F}{\partial r},\cfrac{1}{r}\cfrac{\partial F}{\partial \theta},\cfrac{1}{r sin \theta}\cfrac{\partial F}{\partial \phi}) $

$\vec \nabla \cdot \vec A = \cfrac{1}{r^2} \cfrac{\partial}{\partial r} (r^2 \ A_r) + \cfrac {1}{\r sin \theta} \cfrac{\partial}{\partial \theta} (sin \theta A_{\theta}) +  \cfrac {1}{\r sin \theta} \cfrac{\partial}{\partial \phi} (A_{\phi})$

$\vec \nabla \times \vec A = (\cfrac {1}{r sin \theta} \cfrac{\partial (sin \theta A_{\phi})}{\partial \theta} - \cfrac{\partial(sin \theta A_{\theta})} {\partial \phi} ) \vec u_r + \cfrac{1}{r} (\cfrac{1}{sin \theta} \cfrac{\partial A_r}{\partial \phi} - \cfrac{\partial(r A_{\phi})}{\partial r}) \vec u_{\theta} + \cfrac{1}{r} \cfrac{\partial (r A_{\phi})}{\partial \phi} - \cfrac{\partial A_r}{\partial \phi} \vec u_{\phi}$

### Teorema da Divergência

$\int_v{  \vec \nabla \cdot \vec A \ dv} = \oint_S \vec A \cdot \vec n dS$

### Teorema de Stokes

$\int_S {\vec \nabla \times \vec A \ d\vec S} = \oint_{\Gamma} \vec A \cdot d \vec l$

### Identidades Vetoriais

$\vec \nabla \cdot (\vec A \times \vec B) = \vec B \cdot (\vec \nabla \times \vec A) - \vec A \cdot (\vec \nabla \times \vec B)$

$\vec \nabla \cdot (\vec \nabla \times \vec A) = 0$

$\vec \nabla \times (\vec \nabla \times \vec A) = \vec \nabla (\vec \nabla \cdot \vec A) - \nabla^2 \vec A$

## Eletrostática

$\vec E= \cfrac{1}{4\pi \epsilon_0}  \cfrac{q}{r^2} \ \vec u_r$

$\cfrac{1}{4\pi \epsilon_0} = 9 \times 10^9 N \ m^2 \ C^{-2}$

$\oint_{\Gamma} \vec E \cdot d\vec l = 0$

$\nabla \times \vec E = 0$

$V_P = \int_P^{Ref} \vec E \cdot d \vec l$

$\vec E = - \vec \nabla V$
