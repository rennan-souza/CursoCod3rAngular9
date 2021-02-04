Curso de Angular 9 do canal no youtube Cod3er Cursos

Objetivo do curso consumir uma API Rest com Agular fazendo get, post, put, delete

Vamos criar com json server a nossa "API"

1 fazer o comando dentro do diretório Backend: npm init -y
2 fazer o comando dentro do diretório Backend: npm i json-server
3 dentro do diretório Backend criar o arquivo: db.json
4 dentro do diretório Backend no arquivo package.json criar o start do servidor
5 para testar a API basta rodar o comando dentro do diretório Backend: npm start
6 Para testar a API utilize o Postman

Começando com o Angular 9 (diretório frontend)

1 para instalar o angular cli o comando é npm i -g @angular/cli porém como queremos a versão 9 vamos usar o comando: npm i -g @angular/cli@9.1.0
2 nosso projeto vai se chamar frontend então no diretório raiz vamos fazer o comando: ng new frontend --minimal
OBS: Na instalação vc deve responder yes para essa pergunta: Would you like to add Angular Routing?
OBS: Essa pergunta é sobre rotas no angular
3 para startar o projeto fazer o comando: npm start
4 para executar o projeto no navagador usar a url: localhost:4200
5 no arquivo angular.json vamos alterar o inlineTemplate e o inlineStyle para false
6 programar no app.component.ts e criar o arquivo app.component.html
7 instalar o material design rodando o comando dentro do diretorio frontend: ng add @angular/material
OBS: vc tera que responder algumas perguntas na instalação fique atento e escolha sua opção
8 criar o component de header com o comando: ng g c components/template/header
9 referenciar o header no app.component.html
10 em app.module.ts importar o toolbar do material para usar no header
11 programar o header em header.components.html e o seu css
12 criar o component do footer com o comando: ng g c components/template/footer
13 referenciar o footer no app.component.html
14 progrmar o footer, estilazar o css do footer e definir css padrão no arquivo style.css
15 criar o component de navegação com o comando: ng g c components/template/nav
16 importar o nav e o list em app.module.ts e referenciar o nav no app.component.html
17 programar a navegação em nav.component.html e seus estilos css
18 criar o component home e atribui-lo ao um novo diretório views: ng g c views/home
19 refereciar o component home dentro do container do component de nav
20 em app.module.ts importar o card do material
21 programar no component home utilizando o card do material e css
22 criar o component product crud com o comando: ng g c views/product-crud
23 criando a navegação para isso modifique a referencia dentro do content de nav e coloque o router-outlet
24 programar as rotas dentro do arquivo app-routing.module.ts
25 adicionar o routerLink nos links do nav
26 adicionar o routerLink para home no logo do header
27 criar o component para criação de produtos com o comando: ng g c components/product/product-create
28 criar a rota de product-create em app-routing.module.ts
29 aula bindings...
30 importar o button do material em app.module.ts e criar o button em product-crud.component
31 criar classe de modelo no diretorio product
32 criar o produto service com o comando: ng g s components/product/product
33 programar no produtct.service.ts e no product-create.component.ts
34 importar em app.module o http HttpClientModule
35 programar em product.service.ts o método create para cadastrar produtos
36 programar em product-create.component.ts
37 criar o form de cadastro para isso importar o form em app.module
38 programar o form em product-create
39 criar o component com o comando: ng g c components/product/product-read
40 referenciar o component product-read em product-crud
50 programar em product.service o método read para listar produtos
51 programar em product-read.component.ts
52 criar e personalizar tabela de listagem de produtos adicionando o currency e imports para formatar moeda BR
53 em service.ts criar o método readyById para consultar um produto pelo id e o método put para fazer update
54 criar o component de update com o comando: ng g c components/product/product-update
55 criar a rota de product-update em app-routing.module.ts e adicionar o routerLink na tabela de produtos
56 programar no product-update.html e product-update.ts
57 criar o método de delete em service.ts
58 criar o component de delete product com o comando: ng g c components/product/product-delete
59 criar a rota de product-delete em app-routing.module.ts e adicionar o routerLink na tabela de produtos
60 programar no product-delete.html e no product-delete.ts



Tratando mensagens de erros e sucessos

1 criar novos estilos de msg success e error no aquivo de css principal do projeto todo em style.css
2 em product.service.ts adicionar as novas classes e condições e programar se houver algum erro


Trabalhando no título dinâmico das páginas no header

1 dentro do diretório header criar um arquivo com o nome header-data.models.ts e programar sua interface
2 criar um service com o comando: ng g s components/template/header/header
3 programar no header.service
4 programar no header.component.ts