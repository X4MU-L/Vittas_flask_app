import React, { useEffect, useState } from "react";
import Input from "./Input";
import Select from "./Select";
import { SELCECTIONS } from "./constant";
import { Wrapper, Form, Button, ImageWrapper } from "./createstudent.styles";
import DEFAULTIMAGE from "../assets/nopics.webp";

import axios from "axios";

const CreateStudent = () => {
	const [files, setFiles] = useState(DEFAULTIMAGE);
	const [formData, setFormData] = useState({
		img: DEFAULTIMAGE,
		firstName: "",
		lastName: "",
		age: "",
		gender: "",
		Dept: "",
		apiError: false,
		formError: false,
	});

	const createStudent = async () => {
		try {
			const { data } = await axios.post("http://localhost:8000/students", {
				img: formData.img,
				name: `${formData.firstName} ${formData.lastName}`,
				age: formData.age,
				gender: formData.gender,
				Dept: formData.Dept,
			});
			console.log(data);
		} catch (err) {
			setFormData({ ...formData, apiError: true });
		}
	};

	const validateAge = (e) => {
		const age = e.target.value.trim();
		if (!isNaN(age) && age) {
			console.log("here");
			e.target.classList.remove("error");
			setFormData({ ...formData, age: age });
		} else {
			e.target.classList.add("error");
			setFormData({ ...formData, formError: true, age: age });
		}
	};

	const validateSelect = (e) => {
		e.preventDefault();
		if (!formData.gender || !formData.Dept) {
			setFormData({ ...formData, formError: true });
		} else {
			setFormData({ ...formData, formError: false });
			createStudent();
		}
	};
	const handleFile = (e) => {
		setFiles(URL.createObjectURL(e.target.files[0]));
	};

	useEffect(() => {
		setFormData({ ...formData, img: files });
	}, [files]);

	return (
		<Wrapper>
			<Form onSubmit={validateSelect}>
				<Wrapper style={{ flexDirection: "column" }}>
					<ImageWrapper>
						<img src={files} alt="image" />
					</ImageWrapper>
					<Input
						label="Image"
						id="image"
						type="file"
						style={{ width: "140px", padding: "10px" }}
						onChange={(e) => handleFile(e)}
					/>
				</Wrapper>

				<Input
					label="First Name"
					id="first_name"
					onChange={(e) =>
						setFormData({ ...formData, firstName: e.target.value })
					}
					value={formData.firstName}
					required
				/>
				<Input
					label="Last Name"
					id="last_name"
					onChange={(e) =>
						setFormData({ ...formData, lastName: e.target.value })
					}
					value={formData.lastName}
					required
				/>
				<Input
					label="Age"
					id="age"
					onChange={(e) => validateAge(e)}
					value={formData.age}
					required
				/>
				{SELCECTIONS.map((options, i) => {
					return (
						<Select
							key={i}
							options={options}
							placeHolder={i === 0 ? "Select Gender" : "Select your Depertment"}
							onChange={(op) =>
								setFormData({ ...formData, [`${op.key}`]: op.name })
							}
							error={formData.formError}
						/>
					);
				})}
				<div style={{ marginTop: "1rem" }}>
					{formData.apiError && (
						<div
							style={{
								marginBottom: "0.5rem",
								color: "#ff414e",
								fontSize: "1.4rem",
							}}
						>
							An unexpected error occured. Try again another time
						</div>
					)}
					<Button type="submit">Create Student</Button>
				</div>
			</Form>
		</Wrapper>
	);
};
export default CreateStudent;
