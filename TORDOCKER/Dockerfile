FROM ubuntu
COPY tormint.sh .
RUN chmod +x tormint.sh
COPY start.sh .
RUN chmod +x start.sh
RUN ./tormint.sh
RUN mv start.sh /root/tendermint/build/

