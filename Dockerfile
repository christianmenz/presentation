
# Dockerfile for the docker presentation app
#

# Pull base image.
FROM nodejs

WORKDIR /data
ADD /data /??? ## or get it from github??
RUN npm install
RUN bower install

EXPOSE 9000

# Define default command.
CMD ["grunt serve"]
