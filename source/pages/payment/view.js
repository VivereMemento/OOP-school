export const createTable = (selecContainer, headCells, data) => {
	const container = document.querySelector(selecContainer);
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
					const headCell = `<th>${cell}</th>`;
					thead.insertAdjacentHTML('beforeEnd', headCell);
			})
	}

	function createRows(obj) {
			Object.keys(obj).forEach(elem => {
					const tbody = container.querySelector('table tbody');
					tbody.insertAdjacentHTML('beforeEnd', `<tr><td>${elem}</td><td>${obj[elem]}</td></tr>`);
			});
	};

	createHeadCells(headCells);
	createRows(data);
};