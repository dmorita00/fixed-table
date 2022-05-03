const fixedTableInit = () => {
    const table = document.getElementById('fixed-table')
    if (!table) return

    table.innerHTML = `
<table>
  <thead>
    <tr>
      <th>A</th>
      <th>B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>A1</td>
      <td>B1</td>
    </tr>
    <tr>
      <td>A2</td>
      <td>B2</td>
    </tr>
  </tbody>
</table>
`
}
