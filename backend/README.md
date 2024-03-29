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
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
```

# Running the app
```
python manage.py runserver
```

# Authentication
This API uses OAuth2 as an authentication method so you will need to create an application an save your client_id and client_secret. You can do it throught http://localhost/o/applications.  
What will you need to access the API:  
* client_id
* client_secret
* username
* password