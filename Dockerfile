FROM node:14.18.0

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN yarn install

# Copying source files
COPY . .

# Declaring all arg to use for env in build time
ARG REACT_APP_API_URL
ARG REACT_APP_AWS_ACCESS_KEY
ARG REACT_APP_AWS_SECRET_ACCESS_KEY

# Declaring env from the arg value
ENV REACT_APP_API_URL=${REACT_APP_API_URL}
ENV REACT_APP_AWS_ACCESS_KEY=${REACT_APP_AWS_ACCESS_KEY}
ENV REACT_APP_AWS_SECRET_ACCESS_KEY=${REACT_APP_AWS_SECRET_ACCESS_KEY}

# Building app
RUN yarn build

# Running the app
CMD [ "yarn", "serve" ]