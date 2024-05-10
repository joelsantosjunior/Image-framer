const Footer = ({ children }: { children: React.ReactNode }) => {
  return (
    <footer className="mt-10 w-full border-t-2">
      <p className="mt-5 text-center text-sm text-gray-600">{children}</p>
    </footer>
  )
}

export default Footer
