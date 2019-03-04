@echo off

@REM xcopy to stage files for deployment
if not exist ".\staging" mkdir staging
echo staging files for deployment...
robocopy . .\staging /e /purge /xo /xd staging .git .vscode /xf LICENSE .gitignore *.bat *.png 1>NUL

@REM scp to put files
echo deploying files...
pushd staging
scp -r . mobile@10.10.1.123:/var/mobile/Library/SBHTML/sbclock 1>NUL
popd

@REM respring
echo politely requesting respring...
plink -ssh mobile@10.10.1.123 -i %userprofile%\.ssh\id_rsa.ppk "killall -9 SpringBoard"
