import os
import sys
from flask import Flask, request, jsonify, abort
from sqlalchemy import exc
import json
from flask_cors import CORS
from models import db_drop_and_create_all,db, setup_db, Student



app = Flask(__name__)
setup_db(app)
CORS(app)


# db_drop_and_create_all()

@app.after_request
def after_request(response):
    response.headers.add(
        "Access-Control-Allow-Headers", "Content-Type,Authorization,true"
    )
    response.headers.add(
        "Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS"
    )
    return response

def validateStudent(age,dept,gender,name):
    if not age and not name and not gender and not dept:
        abort(400)

    if len(name) == 0 or len(gender) == 0 or len(dept) == 0:
        abort(400)
    
    if len(name.strip().split(" ")) < 2:
        abort(406)
        
    if gender.capitalize() not in ["Male","Female","Prefer not to say"]:
        abort(406)

    if type(age) is not int:
        abort(406)


@app.route('/students')
def get_students():
    student = Student.query.all()
    print(student)
    if len(student) == 0:
        return jsonify({
            "success": True, 
        "students": []
        }),200

    return jsonify({
        "success": True, 
        "students": [student.long() for student in student],
        "total_students":len(student)
    }), 200

@app.route('/students', methods=["POST"])
def create_student():
    body = request.get_json()
    if not body:
        abort(400)
    
    name = body.get("name")
    age = body.get("age")
    gender = body.get("gender")
    img = body.get("img")
    Dept = body.get("Dept")

    validateStudent(age=age,dept=Dept,gender=gender,name=name)

    add_student = Student(name=name,age=age,gender=gender,img=img,Dept=Dept)
    try:
        add_student.insert()
        return jsonify({
        "success":True,
        "created_student":add_student.long()
        }),200

    except:
        add_student.rollback()
        abort(500)

    

    
@app.route('/students/<int:student_id>',methods=['DELETE'])
def delete_student(student_id):
    student_to_delete = Student.query.filter(Student.id == student_id).one_or_none()
    if student_to_delete is None:
        abort(404)
    try:
        student_to_delete.delete()
        return jsonify({
            "success": True,
            "deleted_id":student_id
        }), 200
    except:
        abort(400)



@app.route("/delete_records",methods=["DELETE"])
def delete_db():
    all_files = Student.query.all()
    if len(all_files) == 0:
        return jsonify({
        "success":True,
        "deleted_students":len(all_files),
        "records_deleted":None
        }),200

    for file in all_files:
        file.delete()  

    return jsonify({
        "success":True,
        "deleted_students":len(all_files),
        "records_deleted":[file for file in all_files]
    }),200


@app.errorhandler(404)
def not_found(error):
    return jsonify({
        "success": False,
        "error": 404,
        "message": "Resourses not found"
    }), 404

@app.errorhandler(400)
def bad_request(error):
    return jsonify({
        "success": False,
        "error": 400,
        "message": "Bad Request"
    }), 400

@app.errorhandler(405)
def method_not_allowed(error):
    return jsonify({
        "success": False,
        "error": 405,
        "message": "Method Not Allowed"
    }), 405

@app.errorhandler(406)
def not_acceptable(error):
    return jsonify({
        "success": False,
        "error": 406,
        "message": "Not acceptable"
    }), 406


@app.errorhandler(500)
def server_error(error):
    return jsonify({
        "success": False,
        "error": 500,
        "message": "Internal Server error"
    }), 500

if __name__ == "__main__":
    app.run(debug=True)
