# REQUIREMENTS

## Python
It is recommended to create a virtual environment to install any of the required python packages. Execute this inside bakcend directory  
```
python -m venv venv
source venv/bin/activate
```

Install python packages through the requirements.txt file  
```
pip install -r requirements.txt
```

## Database
Install PostgreSQL12  
```
sudo apt install postgresql
```
Create techmed user
```
sudo -i -u postgres
psql
create user <user> with login password <password>
create database techmed
```

## Django
If is the first time running the application, make sure to run model's migration
```
python manage.py migrate
```

# Running the app
```
python manage.py runserver