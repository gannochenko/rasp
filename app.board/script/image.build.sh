#!/usr/bin/env bash

VENDOR="gannochenko"
APPLICATION_NAME="rasp_board"

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
VERSION="${1:-latest}"
TAG=${VENDOR}/${APPLICATION_NAME}:${VERSION}

echo Building ${TAG} image;

#yarn;
#yarn run build;
#if ! [ $? -eq 0 ]
#then
#    exit 1;
#fi

#export DOCKER_CLI_EXPERIMENTAL=enabled
#docker buildx create --name mybuilder
#docker buildx use mybuilder
#docker buildx inspect --bootstrap

#docker buildx build --platform linux/arm64,linux/amd64 -f infra/production.dockerfile --tag ${TAG} --no-cache .

export DOCKER_CLI_EXPERIMENTAL=enabled
docker build --platform linux/arm64 -f infra/production.dockerfile --tag ${TAG} .
