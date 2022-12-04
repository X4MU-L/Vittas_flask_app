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
} from "./students.style";
import { _STUDENTHEADING } from "./constants";
import LOADINGIMAGE from "../assets/loading.gif";

import axios from "axios";
import useScreenSize from "../../hooks/useScreenSize";
import { Link } from "react-router-dom";
const AllStudents = () => {
	const url = "http://localhost:8000/students";
	const { screenWidth } = useScreenSize();
	const mobile = screenWidth <= 690;
	const studentHeader = () =>
		mobile ? _STUDENTHEADING.slice(0, 3) : _STUDENTHEADING;
	const [data, setData] = useState({
		page: 1,
		totalStudents: 0,
		students: [],
		loading: true,
		error: null,
	});

	const getStudents = async (url) => {
		try {
			const res = await axios.get(url);
			setData({ ...data, students: res.data, loading: false });
		} catch (error) {
			this.setState({ ...data, error: error, loading: false });
		}
	};

	useEffect(() => {
		getStudents(url);
	}, []);

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
						const { Reg_no, img, name, age, gender, Dept } = student;

						return (
							<StudentWrapper key={Reg_no}>
								<StudentItemsz>
									<ImageWrapper>
										<img src={img} alt={name} />
									</ImageWrapper>
								</StudentItemsz>
								<StudentItemsz>{Reg_no}</StudentItemsz>
								<StudentItemsz>{name}</StudentItemsz>
								{mobile ? "" : <StudentItemsz>{age}</StudentItemsz>}
								{mobile ? "" : <StudentItemsz>{gender}</StudentItemsz>}
								{mobile ? "" : <StudentItemsz>{Dept}</StudentItemsz>}
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