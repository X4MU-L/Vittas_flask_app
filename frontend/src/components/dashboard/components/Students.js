import React, { useState, useEffect } from "react";
import {
	StudentsHeaderWrapper,
	StudentsHeader,
	StudentParagraph,
	Button,
	CSpan,
	StudentDataContainer,
	StudentHeadingWrapper,
	StudentWrapper,
	StudentItems,
	StudentItemsz,
	ImageWrapper,
	DeleteButton,
} from "./students.style";
import { _STUDENTHEADING } from "./constants";
import LOADINGIMAGE from "../assets/loading.gif";
import DELETEICON from "../assets/delete.svg";

import axios from "axios";
import useScreenSize from "../../hooks/useScreenSize";
import { Link } from "react-router-dom";
const AllStudents = () => {
	const client = axios.create({ baseURL: "http://localhost:8000/" });
	const { screenWidth } = useScreenSize();
	const mobile = screenWidth <= 690;
	/*slice the heading to 3 headings on small screen */
	const studentHeader = () =>
		mobile ? _STUDENTHEADING.slice(0, 3) : _STUDENTHEADING;
	const [data, setData] = useState({
		page: 1,
		totalStudents: 0,
		students: [],
		loading: true,
		error: null,
	});

	const getStudents = async () => {
		try {
			const res = await client.get("students");
			/*speard available data and update students and loading */
			setData({ ...data, students: res.data, loading: false });
		} catch (error) {
			/*speard available data and update error and loading */
			this.setState({ ...data, error: error, loading: false });
		}
	};
	/*On mount get students data */
	useEffect(() => {
		getStudents();
	}, []);

	/*This function sends a delete request with the student_id to the api */
	const deleteStudent = async (student_id) => {
		try {
			const res = await client.delete(`students/${student_id}`).then(() => {
				/*set a get request to refresh the page*/
				getStudents();
			});
		} catch (err) {
			console.log(err);
		}
	};

	/*manipulate and remove the student data from the dom*/
	const deleteData = (student_id) => {
		/*get parent container */
		const studentContainer = document.getElementById(`${student_id}`);
		const confirmed = window.confirm(
			`are you sure you want to delete student with Reg No. ${student_id}?`
		);
		if (confirmed) {
			/*On comfrim add a class to the parentcontainer */
			studentContainer.classList.add("deleted");
			/*send a async delete request */
			deleteStudent(student_id);
		}
	};
	const renderLoading = () => {
		return (
			<div
				style={{
					width: "100%",
					height: "100vh",
					margin: "auto",
					display: "flex",
				}}
			>
				<ImageWrapper
					style={{ width: "150px", height: "150px", margin: "auto" }}
				>
					<img
						src={LOADINGIMAGE}
						alt="loading"
						style={{ display: "block", margin: "auto" }}
					/>
				</ImageWrapper>
			</div>
		);
	};

	const renderStudents = () => {
		return (
			<div>
				<StudentsHeaderWrapper>
					<StudentsHeader>
						<CSpan>C</CSpan>reate, <CSpan>R</CSpan>ead, <CSpan>U</CSpan>pdate
						and <CSpan>D</CSpan>elete Students From our <CSpan>Database</CSpan>
					</StudentsHeader>
					<StudentParagraph>
						This is a the test project for Vittas International second phase
						interview this Project is suppose to perform CRUD operation of
						students records and also perform a cron in the server to delete all
						records from the database every 10 mins
					</StudentParagraph>
					<Link to="/create">
						<Button>Create Student</Button>
					</Link>
				</StudentsHeaderWrapper>
				<StudentDataContainer>
					<StudentHeadingWrapper>
						{studentHeader().map((item, i) => {
							return <StudentItems key={i}>{item}</StudentItems>;
						})}
					</StudentHeadingWrapper>

					{data.students.map((student) => {
						const { id, img, name, age, gender, Dept } = student;
						return (
							<StudentWrapper key={id} id={id}>
								<StudentItemsz>
									<ImageWrapper>
										<img src={img} alt={name} />
									</ImageWrapper>
								</StudentItemsz>
								<StudentItemsz>{id}</StudentItemsz>
								<StudentItemsz>{name}</StudentItemsz>
								{mobile ? "" : <StudentItemsz>{age}</StudentItemsz>}
								{mobile ? "" : <StudentItemsz>{gender}</StudentItemsz>}
								{mobile ? "" : <StudentItemsz>{Dept}</StudentItemsz>}
								<DeleteButton onClick={() => deleteData(id)}>
									<img src={DELETEICON} alt="delete icon" />
								</DeleteButton>
							</StudentWrapper>
						);
					})}
				</StudentDataContainer>
			</div>
		);
	};

	return data.loading ? renderLoading() : renderStudents();
};
export default AllStudents;
