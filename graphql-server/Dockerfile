FROM node:18
ADD ./ /server
WORKDIR /server
RUN yarn
RUN yarn build:backend
CMD ["yarn", "start:backend"]
