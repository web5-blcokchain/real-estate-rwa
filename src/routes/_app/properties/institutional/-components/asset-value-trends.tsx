import { TitleCard } from '@/components/common/title-card'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export const AssetValueTrends: FC = () => {
  const data = [
    {
      name: '09-01',
      price: -10
    },
    {
      name: '09-02',
      price: 38
    },
    {
      name: '09-03',
      price: -30
    },
    {
      name: '09-04',
      price: 32
    },
    {
      name: '09-05',
      price: 36
    },
    {
      name: '09-06',
      price: 48
    },
    {
      name: '09-07',
      price: 100
    }
  ]

  return (
    <TitleCard title="Asset Value Trends">
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="linear" dataKey="price" stroke="#f0b90b" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </TitleCard>
  )
}
