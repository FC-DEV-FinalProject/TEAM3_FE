import type { Metadata } from 'next'

import { pretendard } from './fonts'

export const metadata: Metadata = {
  title: 'InvestMetic',
  description: '',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
