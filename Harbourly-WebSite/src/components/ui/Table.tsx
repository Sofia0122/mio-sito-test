import type { ReactNode } from 'react'

type TableProps<TItem> = {
  columns: Array<{ key: string; header: string; render: (item: TItem) => ReactNode }>
  data: TItem[]
  getRowKey: (item: TItem) => string
}

export function Table<TItem>({ columns, data, getRowKey }: TableProps<TItem>) {
  return (
    <div className="overflow-x-auto rounded-lg border border-[#d9e4e5] bg-white">
      <table className="w-full min-w-[760px] border-collapse text-left text-sm">
        <thead className="bg-[#f4f8f8] text-xs uppercase tracking-wide text-[#607177]">
          <tr>
            {columns.map((column) => (
              <th className="px-4 py-3 font-semibold" key={column.key} scope="col">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#d9e4e5]">
          {data.map((item) => (
            <tr key={getRowKey(item)}>
              {columns.map((column) => (
                <td className="px-4 py-3 align-top" key={column.key}>
                  {column.render(item)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
