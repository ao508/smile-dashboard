FROM node:18
ADD ./ /smile-dashboard
WORKDIR /smile-dashboard
RUN yarn --cwd frontend install
CMD ["yarn", "run", "dev:frontend"]

