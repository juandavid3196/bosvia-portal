interface NoteLineProps {
  children: React.ReactNode;
  /** Largo de la línea en px. */
  line?: number;
  className?: string;
}

export function NoteLine({ children, line = 28, className = "" }: NoteLineProps) {
  return (
    <p className={`flex items-center gap-4 text-paragraph ${className}`}>
      <span aria-hidden="true" className="h-px shrink-0 bg-rule" style={{ width: line }} />
      {children}
    </p>
  );
}
