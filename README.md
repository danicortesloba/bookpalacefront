<<<<<<< HEAD
# bookpalaceback
=======
# Build docker image

docker build --tag front-image .

## Run docker image

docker run --name bookpalacefront -p 9001:9000 -d front-image

## Run app

npm start
>>>>>>> master
