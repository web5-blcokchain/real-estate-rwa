import type { TableProps } from 'antd'
import { Table } from 'antd'
import React from 'react'

import './css/tableComponent.scss'

interface TableComponentProps<T> {
  children?: React.ReactNode
  titleSlot?: React.ReactNode
  columns: TableProps<T>['columns']
  data: T[]
}

function TableComponent<T extends object>({ children, titleSlot, columns, data }: TableComponentProps<T>) {
  return (
    <div className="tableComponent-wrap mt-8 p-6">
      {children}
      {titleSlot}
      <Table<T>
        className="custom-table"
        columns={columns}
        dataSource={data}
        rowClassName={() => 'custom-table-row'}
        pagination={false}
      />
    </div>
  )
}

export default TableComponent
