export const navItemStyles = (pathname: string, href: string) => {
  const isSelected = pathname.includes(href)
  return {
    background: isSelected
      ? 'linear-gradient(75deg, #EB7C0D 4.02%, #FFA750 83.84%)'
      : '',
    color: isSelected ? '#fff' : '#393939',
  }
}
