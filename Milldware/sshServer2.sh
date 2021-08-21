#sshpass -p "server2" ssh debian0@192.168.100.12 < restoreServer2.sh
docker exec server1 bash - "./restoreServer2.sh"