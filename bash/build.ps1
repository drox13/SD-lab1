docker build -t instancias .
docker run -d --name middleware -p 8001:8000 instancias
docker run -d --name instancia1 -p 8002:8000 instancias
docker run -d --name instancia2 -p 8003:8000 instancias