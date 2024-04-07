FROM ubuntu

# Set the working directory inside the container
WORKDIR /app

# Install Node.js 18.x
RUN apt-get update && \
    apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# Install Python 3 and required packages
RUN apt-get update && \
    apt-get install -y python3 python3-pip && \
    pip3 install scikit-learn==1.2.2 pandas

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port 5000
EXPOSE 5000

# Command to run the Node.js server
CMD [ "node", "index.js" ]
