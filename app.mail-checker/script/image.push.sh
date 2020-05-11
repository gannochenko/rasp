#!/usr/bin/env bash

VENDOR="awesome1888"
APPLICATION_NAME="rasp_mail-checker"

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
VERSION="${1:-latest}"
TAG=${VENDOR}/${APPLICATION_NAME}:${VERSION}

echo Pushing ${TAG} image;

docker push ${TAG}
