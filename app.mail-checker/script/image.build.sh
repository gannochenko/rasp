#!/usr/bin/env bash

VENDOR="awesome1888"
APPLICATION_NAME="rasp_mail-checker"

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
VERSION="${1:-latest}"
TAG=${VENDOR}/${APPLICATION_NAME}:${VERSION}

echo Building ${TAG} image;

yarn;
yarn run build;
if ! [ $? -eq 0 ]
then
    exit 1;
fi
docker build --no-cache -t ${TAG} -f infra/production.dockerfile .;
