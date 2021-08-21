#docker network create --subnet=172.18.0.0/16 mynet123
#docker run --net mynet123 --ip 172.18.0.22 -it ubuntu bash

#sshpass -p "server1" ssh 5dd88@172.17.0.2 < restoreServer1.sh

docker exec server1 bash -c "pwd"; "./restoreServer1.sh"