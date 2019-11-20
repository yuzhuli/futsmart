#Specify a base image
FROM node:12.13.0

#Specify a working directory
WORKDIR /usr/api

#Copy the project
COPY ./package.json ./

#Install dependencies
RUN npm install 

#Copy remaining files
COPY ./ ./

EXPOSE 3001

#Default command
CMD ["npm","start"]