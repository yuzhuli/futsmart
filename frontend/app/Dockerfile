#Specify a base image
FROM node:12.13.0

#Specify a working directory
WORKDIR /usr/app

#Copy the project
COPY ./package.json ./

#Install dependencies
RUN npm install 

#Copy remaining files
COPY ./ ./

EXPOSE 3000

#Default command
CMD ["npm","start"]