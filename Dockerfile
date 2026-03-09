FROM oven/bun:latest AS builder

WORKDIR /app

COPY package*.json bun.lockb* ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /usr/share/nginx/html
COPY public/songs/ /usr/share/nginx/html/songs/
COPY public/covers/ /usr/share/nginx/html/covers/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
