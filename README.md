local run: 
```Shell
docker-compose -f docker-compose-local.yml --project-name dstore-local up --force-recreate
```

prod build: 
```
docker-compose --project-name dstore up --force-recreate
```

remove all:

```Shell
docker container rm -f $(docker container ls -qa)
docker image rm -f $(docker image ls -q)
```

when install new npm package
```
yarn add $YOUR_NEW_NPM_MODULE

# remove the image where the new module is installed
docker image rm -f $Image_Name

# rebuild, while making sure it doesn't use the internal cache 
docker-compose build --no-cache
docker-compose up
```