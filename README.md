# aws-serverless-node-lambda-layer-template
Template Project to help you creating your node lambda Layer using serverless framework

# Create your repo
Create your own repo by clicking on [use this template] button
Name your repo as node-NAME-layer
clone your repo to your local environment

# Initialize the project
```sh
./initialize-layer.sh node-NAME-layer [npm-module1 npm-module2 ... npm-moduleN]
```
example:
```sh
./initialize-layer.sh node-testing-layer mocha chai sinon nyc
sls deploy --account [012345678900]
```
