RUN mkdir -p /web
WORKDIR /web

COPY /docker/web/ /docker/
ENTRYPOINT ["sh", "/docker/entrypoint.sh"]

CMD ["sh", "/docker/command.sh"]
