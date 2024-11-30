# Use a imagem oficial do Node.js
FROM node:18

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos necessários
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos
COPY . .

# Exponha a porta 3000
EXPOSE 3000

# Inicie o servidor de desenvolvimento
CMD ["npm", "start"]
