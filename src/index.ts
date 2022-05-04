import "./style.scss"

// @ts-ignore
window.fixedTableInit = (selector: string, header: string[], rows: string[][]) => {
    const table = document.getElementById(selector)
    if (!table) return

    table.innerHTML = `
<div class="wrapp-fixed-table">
  <table class="fixed-table">
    <thead>
      <tr>
        <th></th>
        ${header && header?.map(str => {
            return `<th>${str}</th>`
        }).join('')}
      </tr>
    </thead>
    <tbody>
      ${rows && rows?.map((row, i) => {
        return `<tr>
            <th>${i + 1}</th>
            ${row.map(str => {
                return `<td>${str}</td>`
            }).join('')}
        </tr>`  
      }).join('')}
    </tbody>
  </table>
</div>
`
}
