# My Site  

### Production
```
yarn build
yarn start
```

### Locally
Be sure to start docker mongo db. To start and stop:
```
docker-compose up
docker-compose down
```
Then run
```
yarn start:local
or
yarn start:watch
```

### Dependencies
The architecture is as follows:

Deployment and Web Hosting: [AWS ElasticBeanstalk](https://us-east-2.console.aws.amazon.com/elasticbeanstalk/home?region=us-east-2#/environment/dashboard?applicationName=lukedunscombe&environmentId=e-7ptbnhuypp)  
Server(CMS): [KeystoneJS](https://www.keystonejs.com/)  
Database hosting: [MongoDB Atlas](https://cloud.mongodb.com/v2/5e36e1f65538554dda54c0ec#clusters)  
Image file hosting: [Cloudinary](https://cloudinary.com/console/c-d54355ef7e152f1122da6552e70722)
