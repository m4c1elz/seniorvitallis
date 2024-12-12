<p align='center'>
    <img src="./client/public/login-img.png">
</p>

### SeniorVitallis - Projeto Integrador SENAI
O SêniorVitallis é um projeto que visa facilitar a procura de cuidadores de idosos profissionais.


## Setup do projeto
1. Instale as dependências.
```
pnpm install
```

> Se estiver usando npm, você terá que instalar as dependências no root do projeto, na pasta 'client' e na pasta 'server' separadamente.
```
npm install
cd server
npm install
cd ../client
npm install
```

2. Defina as variáveis de ambiente para as pastas `server` e `client`.
```
# server/.env
# variáveis de ambiente de exemplo.
DATABASE_URL='mysql://root:password@localhost:3303/seniorvitallis'
JWT_SECRET='mysecret'
JWT_REFRESH_SECRET='myrefreshsecret'
```

```
# client/.env
# a porta pode mudar se você tiver informado uma variável 'PORT' no .env do servidor.
VITE_API_HOST=http://localhost:8080
```

3. Na pasta `server`, rode o script do prisma para salvar o banco de dados.
```
pnpm prisma db push
```
> (use npx se não possuir pnpm)

4. Rode o script de dev em cada projeto.
```
pnpm -r dev
```
> se estiver usando npm, rode cada projeto individualmente.
