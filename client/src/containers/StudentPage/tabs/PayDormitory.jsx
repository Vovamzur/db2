import React, { useState } from 'react';
import { Dropdown, Input, Button } from 'semantic-ui-react';

import { chequeData, groupData, hostelResidentData, studentData } from '../../../db/database';


let groups = []
for (const group of groupData) {
	groups.push(new Object({
		id:group.id,
		text: group.title,
		value: group.title
	}))
}

const monthes = [
	{ key: 9, text: 'Вересень', value: 'Вересень' },
	{ key: 10, text: 'Жовтень', value: 'Жовтень' },
	{ key: 11, text: 'Листопад', value: 'Листопад' },
	{ key: 12, text: 'Грудень', value: 'Грудень' },
]

const dates = {
	'Вересень': {
		startDate: '2019-09-01',
		endDate: '2019-09-30'
	},
	'Жовтень': {
		startDate: '2019-10-01',
		endDate: '2019-10-31'
	},
	'Листопад': {
		startDate: '2019-11-01',
		endDate: '2019-11-30'
	},
	'Грудень': {
		startDate: '2019-12-01',
		endDate: '2019-12-31'
	},
}

const inCheques = [
	{ key: 1, month: 'Вересень', sum: '690 грн', date: '01-09-2019', dormitory: 'Грутожиток №8' },
	{ key: 2, month: 'Жовтень', sum: '690 грн', date: '04-10-2019', dormitory: 'Грутожиток №8' },
	{ key: 2, month: 'Листопад', sum: '690 грн', date: '12-11-2019', dormitory: 'Грутожиток №8' },
]

let i = 10;
const PayDormitory = () => {
	const [currentClass, setCurrentClass] = useState('');
	const [studentFirstname, setStudentFirstname] = useState('');
	const [studentLastname, setStudentLastname] = useState('');
	const [sum, setSum] = useState('');
	const [currentMonth, setCurrentMonth] = useState({ key: 12, text: 'Грудень', value: 'Грудень' })

	const onSubmit = e => {
		e.preventDefault();

		const re = /\D+/;
		if (studentFirstname === '' || studentLastname === '' || sum === '') {
			alert('enter all fiedls!');
			return
		} else if (re.exec(sum)) {
			alert('sum must be a number');
		} else {
			const id = getId(chequeData);
			const group = groupData.filter(item => item.title === currentClass)[0];
			const student = studentData.filter(item => item.firstname === studentFirstname && item.lastname === studentLastname);
			if (student.length === 0) {
				alert('unknown student');
			} else {
				const hostelResident = hostelResidentData.filter(item => item.studentId === student[0].id)[0];
				const currentDateTime = new Date();
				chequeData.push(new Object({
					id: id,
					paymentDate:currentDateTime.toISOString().split("T")[0],
					sum: sum,
					startDate:dates[currentMonth.value].startDate,
					endDate:dates[currentMonth.value].endDate,
					hostelResidentId: hostelResident.id
				}));
				console.log(chequeData);
			}
		}
	}

	const getId = (arr) => {
        const allId = arr.map(item => item.id);
        for (let i = 0; i < allId.length + 1; i++) {
            if (!allId.includes(i)) {
                return i;
            }
        }
        return null;
    }

	const renderForm = () => {
		return (
			<div>
				<Dropdown
					placeholder='Select your class'
					selection
					options={groups}
					onChange={(e, value) => setCurrentClass(value)}
				/>
				<div>
					<Input
						onChange={e => setStudentFirstname(e.target.value)}
						placeholder='firstname'
					/>
				</div>
				<div>
					<Input
						onChange={e => setStudentLastname(e.target.value)}
						placeholder='lastname'
					/>
				</div>
				<div>
					<Input
						value={sum}
						onChange={e => setSum(e.target.value)}
						placeholder='sum'
					/>
				</div>
				<Dropdown
					placeholder='Select month'
					selection
					options={monthes}
					value={currentMonth.value}
					onChange={(e, value) => setCurrentMonth(value)}
				/>
				<Button onClick={onSubmit}>
					Pay!
				</Button>
			</div>
		)
	}

	return (
		<div className="ui middle aligned center aligned grid">
			<div className="column">
				{/* {renderCheques()} */}
				<div>
					{renderForm()}
				</div>
			</div>
		</div>
	)
}

export default PayDormitory;
