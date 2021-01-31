@ECHO ON

:: docker containers
cd %cd%
docker run -ti --rm -v %cd%:/8comicDownloader node:lts /bin/bash
