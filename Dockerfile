####################
# Build stage
####################
FROM node:20-slim AS builder

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock
# This is done before copying the rest of the files to take advantage of Docker's cache
# If these files don't change, Docker will use the cached dependencies
COPY package.json yarn.lock* ./

# Install dependencies
# Using --frozen-lockfile to ensure consistent installs across builds
RUN yarn install --frozen-lockfile --production

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn build

####################
# Production stage
####################
FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy only the built artifacts from the build stage
# This significantly reduces the final image size
COPY --from=builder /app/.output ./.output

# Set environment variables
# These can be overridden when running the container
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production

# Create a non-root user and switch to it
# This is a security best practice
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nuxtuser
USER nuxtuser

# Expose the port the app runs on
EXPOSE 3000

# Health check to ensure the application is running
# HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
#     CMD curl -f http://localhost:3000/ || exit 1

# Command to run the application
CMD ["node", ".output/server/index.mjs"]