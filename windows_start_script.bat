SET /A RAND=%RANDOM%
start firefox localhost:%RAND%
php -S localhost:%RAND%