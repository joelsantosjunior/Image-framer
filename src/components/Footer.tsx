const Footer = ({ children }: { children: React.ReactNode }) => {
  return (
    <footer className="w-full border-t-2 py-5">
      <p className=" text-center text-sm text-gray-600">{children}</p>
    </footer>
  )
}

export default Footer
