FROM node:lts-bullseye-slim

RUN apt update && \
    apt install -y \
    gpg \
    git \
    awscli
RUN git config --global gpg.program "$(which gpg)"
