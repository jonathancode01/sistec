const Footer = () => {
  return (
    <footer className="border-t border-border px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            {/* <img src={logo} alt="Porto's Bar" className="h-8 w-8 rounded-full object-cover" /> */}
            <span className="font-bold text-sm tracking-wider text-primary">
              PORTO'S BAR
            </span>
          </div>
          <p className="text-xs text-muted-foreground font-light tracking-wide">
            © {new Date().getFullYear()} Porto's Bar. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer