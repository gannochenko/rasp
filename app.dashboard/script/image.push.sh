#!/usr/bin/env bash

VENDOR="gannochenko"
APPLICATION_NAME="rasp_dashboard"

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
VERSION="${1:-latest}"
TAG=${VENDOR}/${APPLICATION_NAME}:${VERSION}

echo Pushing ${TAG} image;

docker push ${TAG}
