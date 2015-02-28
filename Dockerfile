
# Dockerfile for the presentation app
#

# Pull base image.
FROM dockerfile/nodejs

WORKDIR /data
RUN git clone https://github.com/christianmenz/presentation.git
WORKDIR /data/presentation
RUN npm install
RUN npm install -g bower
RUN npm install -g grunt-cli
RUN bower install --allow-root

# Define default command.
CMD cd /data/presentation && grunt serve
