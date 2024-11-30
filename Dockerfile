# Use a imagem oficial do Node.js
FROM node:18

# Defina o diretório de trabalho
WORKDIR /app

# Copie apenas os arquivos de dependência (package.json e package-lock.json)
COPY package*.json ./

# Instale as dependências
RUN npm install --legacy-peer-deps

# Copie o restante dos arquivos após instalar dependências
COPY . .

# Exponha a porta 3000
EXPOSE 3000

# Use o modo de produção para builds mais rápidos
ENV NODE_ENV=development

# Inicie o servidor de desenvolvimento
CMD ["npm", "start"]
