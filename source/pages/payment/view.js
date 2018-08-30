export const createTable = (selectContainer, headCells, data) => {
	const container = document.querySelector(selectContainer);
	const table = `<table>
											<thead>
													<tr></tr>
											</thead>
											<tbody></tbody>
									</table>`;


	container.insertAdjacentHTML('beforeEnd', table);

	function createHeadCells(headCells) {
		const thead = container.querySelector('table thead tr');

		headCells.forEach(cell => {
			thead.insertAdjacentHTML('beforeEnd', `<th>${cell}</th>`);
		})
	}

function createCell(obj) {
	return Object.keys(obj).map(td => `<td>${obj[td]}</td>`).join('\n');
}

	function createRows(obj) {
		obj.forEach(elem => {
			const tbody = container.querySelector('table tbody');
			tbody.insertAdjacentHTML('beforeEnd', `<tr>${createCell(elem)}</tr>`);
		});
	};


	createHeadCells(headCells);
	createRows(data);
};