# simple-survey-app

## Setup

### Install node modules

```
# npm install
```

### Install python requirements

```
# pip install -r requirements.txt
```

### Setup Django database

```
# cd project
# python manage.py makemigrations api
# python manage.py migrate
```

## Run django server

In the same directory from _Setup Django database_,

```
# python manage.py runserver
```

visit http://localhost:8000 to view the app.
