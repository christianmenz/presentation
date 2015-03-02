# Docker Presentation

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.0.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma. There is not one test for this application.

## Containerize the app

You can easily containerize this application by running `docker build -t christianmenz/docker .`.
To run the container simply type `docker run -i -p 9000:9000 christianmenz/docker` and locate your brwoser to http://localhost:9000
