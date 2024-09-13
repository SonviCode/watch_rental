FROM node:alpine as base

RUN npm install -g pnpm

# All deps stage
FROM base as deps
WORKDIR /usr/src/app
ADD package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
RUN npm install -g ts-node

# Production only deps stage
FROM base as production-deps
WORKDIR /usr/src/app
ADD package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod

# Build stage
FROM base as build
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app/node_modules /usr/src/app/node_modules
ADD . .
# RUN pnpm run start
RUN node ace build --ignore-ts-errors 

# Production stage
FROM base
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY --from=production-deps /usr/src/app/node_modules /usr/src/app/node_modules
COPY --from=build /usr/src/app/build /usr/src/app
EXPOSE 3333
CMD ["node", "./bin/server.js"]
