docker build -t middlewareImage .
docker run -d --name middleware -p 8001:8000 middlewareImage