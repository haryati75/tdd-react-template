interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export default function Card({ children, className = '', title }: CardProps) {
  return (
    <div className={`card ${className}`}>
      {title && <div className="card-header"><h3>{title}</h3></div>}
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

