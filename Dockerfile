# Stage 1: Build
FROM oven/bun:1 AS builder

WORKDIR /app

# คัดลอกไฟล์ package ก่อนเพื่อลด cache
COPY package.json bun.lockb* ./

# ติดตั้ง dependencies
RUN bun install --frozen-lockfile

# คัดลอก source code
COPY . .

# Build Next.js ด้วย Bun
RUN bun run build

# Stage 2: Production runtime
FROM oven/bun:1-slim AS runner

WORKDIR /app

# คัดลอก production deps
COPY --from=builder /app/package.json /app/bun.lockb* ./

RUN bun install --production --frozen-lockfile

# Copy build output
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
# COPY --from=builder /app/next.config.js ./

# ENV NODE_ENV=production
# EXPOSE 3000

# Run Next.js server
CMD ["bun", "start"]
