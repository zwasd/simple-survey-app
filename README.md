# simple-survey-app

App created using redux, includes Django which host the app and an API

## Setup

### Install Node Modules

```
# npm install
```

### Install Python Requirements

```
# pip install -r requirements.txt
```

### Setup Django Database

```
# cd project
# python manage.py makemigrations api
# python manage.py migrate
```

## Run Django Server

In the same directory from _Setup Django Database_,

```
# python manage.py runserver
```

visit http://localhost:8000 to view the app.
