curl -I http://172.17.0.2:8000/status | cat - /home/lab1/SD-Lab1/Milldware/server1.txt > temp && mv temp /home/lab1/SD-Lab1/Milldware/server1.txt
curl -I http://172.17.0.3:8000/status | cat - /home/lab1/SD-Lab1/Milldware/server2.txt > temp && mv temp /home/lab1/SD-Lab1/Milldware/server1.txt

#curl -I http://192.168.100.16/status | cat - /home/debian2/debian0_ping.txt > temp && mv temp /home/debian2/debian0_ping.txt
#curl -I http://192.168.100.16/status | cat - /home/debian2/debian0_ping.txt > temp && mv temp /home/debian2/debian0_ping.txt

# if ping -c1 172.17.0.3 &>/dev/null;
# then
#         echo "Instancia 1 online";
#         date > log.txt;
#         $@
# else
#         echo "Instancia 1 No tiene conexion" > log.txt;
# fi

# if ping -c1 172.17.0.4 &>/dev/null;
# then
#         echo "Instancia 2 online";
#         date
#         $@
# else
#         echo "Instancia 2 No tiene conexion";
# fi