import type { InvestmentOrderType } from '@/enums/investment'

export interface InvestmentItem {
  id: number
  name: string
  location: string
  property_type: string
  contract_address: string
  token_price: string
  tokens_held: number
  total_amount: string
  token_number: number
  total_selling: number
  rental_yield: string
  image_urls: string
  sell_order_id: string
  order_type: InvestmentOrderType
}
