
# Dockerfile for the presentation app
#

# Pull base image.
FROM nodejs

WORKDIR /data
RUN git clone https://github.com/christianmenz/presentation.git
WORKDIR /data/presentation
RUN npm install
RUN npm install -g bower
RUN npm install -g grunt-cli
RUN bower install --allow-root

EXPOSE 9000

# Define default command.
CMD cd /data/presentation && grunt serve
