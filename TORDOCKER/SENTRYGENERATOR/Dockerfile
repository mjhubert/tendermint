FROM ubuntu
COPY setup.sh .
RUN chmod +x setup.sh
COPY generate.sh .
RUN chmod +x generate.sh
RUN ./setup.sh 
ENTRYPOINT [ "./generate.sh" ]
