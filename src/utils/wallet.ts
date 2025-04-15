export function shortAddress(address: string) {
  if (!address) {
    return ''
  }

  if (address.length < 10)
    return address
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}
