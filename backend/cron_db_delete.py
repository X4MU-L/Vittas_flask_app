import requests
import json


def _delete_all():
    res = requests.delete('http://127.0.0.1:5000/delete_records').text
    print(res)
    print("database deleted")

_delete_all()

