import React, { useState } from 'react';
import { Dropdown, Input, Button } from 'semantic-ui-react';

const dormitories = [
	{ id: 1, text: 'Грутожиток №1', value: '1' },
	{ id: 2, text: 'Грутожиток №2', value: '2' },
	{ id: 3, text: 'Грутожиток №3', value: '3' },
	{ id: 4, text: 'Грутожиток №4', value: '4' },
	{ id: 5, text: 'Грутожиток №5', value: '5' },
	{ id: 6, text: 'Грутожиток №6', value: '6' },
	{ id: 7, text: 'Грутожиток №7', value: '7' },
	{ id: 8, text: 'Грутожиток №8', value: '8' },
]

const monthes = [
	{ key: 1, text: 'Січень', value: 'Січень' },
	{ key: 2, text: 'Грудень', value: 'Грудень' },
	{ key: 3, text: 'Березень', value: 'Березень' },
	{ key: 4, text: 'Квітень', value: 'Квітень' },
	{ key: 5, text: 'Травень', value: 'Травень' },
	{ key: 6, text: 'Червень', value: 'Червень' },
	{ key: 7, text: 'Липень', value: 'Липень' },
	{ key: 8, text: 'Серпень', value: 'Серпень' },
	{ key: 9, text: 'Вересень', value: 'Вересень' },
	{ key: 10, text: 'Жовтень', value: 'Жовтень' },
	{ key: 11, text: 'Листопад', value: 'Листопад' },
	{ key: 12, text: 'Грудень', value: 'Грудень' },
]

const inCheques = [
	{ key: 1, month: 'Вересень', sum: '690 грн', date: '01-09-2019', dormitory: 'Грутожиток №8' },
	{ key: 2, month: 'Жовтень', sum: '690 грн', date: '04-10-2019', dormitory: 'Грутожиток №8' },
	{ key: 2, month: 'Листопад', sum: '690 грн', date: '12-11-2019', dormitory: 'Грутожиток №8' },
]

let i = 10;
const PayDormitory = () => {
	const [currentDormitory, setCurrentDormitory] = useState({ id: 1, text: 'Грутожиток №1', value: '1' });
	const [studentName, setStudentName] = useState('');
	const [cheques, setCheques] = useState(inCheques);
	const [sum, setSum] = useState('');
	const [currentMonth, setCurrentMonth] = useState({ key: 12, text: 'Грудень', value: 'Грудень' })

	const onSubmit = e => {
		e.preventDefault();

		if (studentName === '' || sum === '') {
			alert('enter all fiedls!')
			return
		}
		setCheques([...cheques, { key: i++, month: currentMonth.value, sum: sum + ' грн', date: new Date().toISOString().slice(0, 10), dormitory: currentDormitory.text }])
	}

	const renderCheques = () => {
		return (
			<table className="ui celled structured table">
				<thead>
					<tr>
						<th rowSpan="2">Month</th>
						<th rowSpan="2">Sum</th>
						<th rowSpan="2">Payment date</th>
						<th rowSpan="2">Dormitory</th>
					</tr>
				</thead>
				<tbody>
					{cheques.map(({ key, month, sum, date, dormitory }) => {
						return (
							<tr key={Math.random() + key}>
								<td>{month}</td>
								<td>{sum}</td>
								<td>{date}</td>
								<td>{dormitory}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		)
	}

	const renderForm = () => {
		return (
			<div>
				<Dropdown
					placeholder='Select your class'
					selection
					options={dormitories}
					value={currentDormitory.value}
					onChange={(e, value) => setCurrentDormitory(value)}
				/>
				<div>
					<Input
						value={studentName}
						onChange={e => setStudentName(e.target.value)}
						placeholder='enter your name...'
					/>
				</div>
				<div>
					<Input
						value={sum}
						onChange={e => setSum(e.target.value)}
						placeholder='enter sum...'
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
				{renderCheques()}
				<div>
					{renderForm()}
				</div>
			</div>
		</div>
	)
}

export default PayDormitory;
