local run: 
```Shell
docker-compose -f docker-compose-local.yml --project-name dstore-local up --force-recreate
```

prod build: 
```
docker-compose --project-name dstore up --force-recreate
```