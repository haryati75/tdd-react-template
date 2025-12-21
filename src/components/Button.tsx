interface ButtonProps {
  onClick?: () => void
  children: React.ReactNode
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className="btn">
      {children}
    </button>
  )
}