# Vittas Flask Api

## Setting up the Backend

form the root folder

```
cd backend\

```

### Install Dependencies

1. **Python 3.7** - Follow instructions to install the latest version of python for your platform in the [python docs](https://docs.python.org/3/using/unix.html#getting-and-installing-the-latest-version-of-python)

2. **Virtual Environment** - We recommend working within a virtual environment whenever using Python for projects. This keeps your dependencies for each project separate and organized. Instructions for setting up a virual environment for your platform can be found in the [python docs](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/)

for Linux

```
source env_name/bin/activate

```

for Windows

```
source env_name/Scripts/activate

```

3. **PIP Dependencies** - Once your virtual environment is setup and running, install the required dependencies by navigating to the `/backend` directory and running:

```bash
pip install -r requirements.txt
```

#### Key Pip Dependencies

- [Flask](http://flask.pocoo.org/) is a lightweight backend microservices framework. Flask is required to handle requests and responses.

- [SQLAlchemy](https://www.sqlalchemy.org/) is the Python SQL toolkit and ORM we'll use to handle the lightweight SQL database. You'll primarily work in `app.py`and can reference `models.py`.

- [Flask-CORS](https://flask-cors.readthedocs.io/en/latest/#) is the extension we'll use to handle cross-origin requests from our frontend server.

### Database

This Api uses a simple sqlite database in root folder

```
database/database.db

```

### Run the Server

```bash
$ export FLASK_APP=api.py
$ export FLASK_DEBUG=1
$ python api.py

```

### Endpoints

This is a simple api with 2 endpoints

- `/students` - allowed methods - ["POST"], ["GET"]
- > `/delete_records` - allowed methods - ["DELETE"]

to delele a student, send the request with the id

- `/students/id` - allowed methods - ["DELETE]
  The API allows GET,DELETE & POST methods

#### Examples

1.  GET Request

```
curl  http://127.0.0.1:5000/students

```

success - 200

```json
{
	"success": true,
	"students": [{ "id": 1, "img": null, "name": "Jack Orji", "age": 23 }],
	"total_students": 1
}
```

Error -400

```json
{
	"success": false,
	"error": 400,
	"message": "Bad Request"
}
```

2. POST request

```json

{"img":"string","name":"Jane Doe","age":40,"gender":"Female","Dept":"Law"}

`sample: `
curl http://127.0.0.1:5000/students -X POST -H "Content-Type: application/json" -d {"img":"string","name":"Jane Doe","age":40,"gender":"Female","Dept":"Law"}

```

success - 200

```json
{
	"success": true,
	"created_student": {
		"img": "string",
		"name": "Jane Doe",
		"age": 40,
		"gender": "Female",
		"Dept": "Law"
	}
}
```

3. DELETE request

```
curl -X DELETE http://127.0.0.1:5000/students/3

```

success - 200

```json
{
	"success": true,
	"deleted_id": 3
}
```

### cron

The cron function is supposed to run

```
$ python3 cron_db_delete.py

```

runing the above function the root folder will delete all records in the database

crontab function

```
10 * * * * python3 cron_db_delete.py

```
