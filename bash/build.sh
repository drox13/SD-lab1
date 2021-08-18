docker build -t instancias .
docker run -d --name server1 -p 8002:8000 instancias
docker run -d --name server2 -p 8003:8000 instancias

# cd ..
# cd BashMiddleware
# docker build -t middlewareimage .
# docker run -d --name middleware -p 8001:8000 middlewareimage
# docker exec -it middleware bash