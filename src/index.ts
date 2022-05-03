import "./style.scss"

// @ts-ignore
window.fixedTableInit = () => {
    const table = document.getElementById('fixed-table')
    if (!table) return

    table.innerHTML = `
<div class="wrapp-fixed-table">
  <table class="fixed-table">
    <thead>
      <tr>
        <th></th>
        <th>headheadhead</th>
        <th>headheadhead</th>
        <th>headheadhead</th>
        <th>headheadhead</th>
        <th>headheadhead</th>
        <th>headheadhead</th>
        <th>headheadhead</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>head</th>
        <td>body</td>
        <td>body</td>
        <td>body</td>
        <td>body</td>
        <td>body</td>
        <td>body</td>
        <td>body</td>
      </tr>
      <tr>
        <th>head</th>
        <td>body</td>
        <td>body</td>
        <td>body</td>
        <td>body</td>
        <td>body</td>
        <td>body</td>
        <td>body</td>
      </tr>
      <tr>
        <th>head</th>
        <td>body</td>
        <td>body</td>
        <td>body</td>
        <td>body</td>
        <td>body</td>
        <td>body</td>
        <td>body</td>
      </tr>
      <tr>
        <th>head</th>
        <td>body</td>
        <td>body</td>
        <td>body</td>
        <td>body</td>
        <td>body</td>
        <td>body</td>
        <td>body</td>
      </tr>
      <tr>
        <th>head</th>
        <td>body</td>
        <td>body</td>
        <td>body</td>
        <td>body</td>
        <td>body</td>
        <td>body</td>
        <td>body</td>
      </tr>
      <tr>
        <th>head</th>
        <td>body</td>
        <td>body</td>
        <td>body</td>
        <td>body</td>
        <td>body</td>
        <td>body</td>
        <td>body</td>
      </tr>
    </tbody>
  </table>
</div>
`
}
