import '@/app/globals.css'

export const metadata = {
  title: 'DentAdvisor Quiz Embed',
  description: 'Embeddable PDR assessment quizzes',
}

export default function EmbedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Minimal layout without header/footer for embedding
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  )
}
