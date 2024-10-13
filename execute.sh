#! /bin/bash

g++ dtft.cpp
echo Calculating Descrete Time Fourier Transform...

./a.out
echo Result sent to frontend...

echo Initializing the server...
nodemon server.js
