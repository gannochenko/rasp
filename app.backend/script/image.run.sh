#!/usr/bin/env bash

VENDOR="gannochenko"
APPLICATION_NAME="rasp_backend"
PORT="5000"

# this script runs a standalone image created with script/image.build.sh

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
VERSION="${1:-latest}"
TAG=${VENDOR}/${APPLICATION_NAME}:${VERSION}

echo Running ${TAG} image;

docker run -d -p ${PORT}:${PORT} ${TAG}
