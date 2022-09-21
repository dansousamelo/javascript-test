# Exercício Javascript Avançado

O problema proposto foi:

A) Coordenar os pedidos à API;

B) Realizar error handling dos mesmos;

C) Com base nas respostas da API construa e devolva um array de objetos com a seguinte
estrutura:

![1](https://user-images.githubusercontent.com/48137972/191413315-16c8af50-73c8-4677-9885-52167a4b4b11.png)

# A Aplicação

Para iniciar a aplicação instale as dependências com o comando:
```npm install```

Feito isso execute a aplicação com o comando:
```npm run dev```

Logo abaixo temos a aplicação desenvolvida, trata-se de uma listagem simples.

https://user-images.githubusercontent.com/48137972/191414383-a29bb71b-f63c-491c-8b1f-73745180d790.mov


# Resolução

A) Para se conectar a API utilizei um context para manipular os dados, além de poder tipar os mesmos.

<img width="172" alt="image" src="https://user-images.githubusercontent.com/48137972/191413535-e883b358-3af7-46db-8004-b6dca2b2a51a.png">

B) Error Handling - O trecho de código abaixo resolve de forma pragmática o problema através de um ```try```.
![2](https://user-images.githubusercontent.com/48137972/191413793-599baa07-642c-4f31-903e-ee9bbc812938.png)

C) Para concatenar as 2 chamadas a API elaborei o seguinte trecho de código.

![3](https://user-images.githubusercontent.com/48137972/191413925-b21fa600-51d8-4a2f-94d3-b8c67577e3f3.png)
