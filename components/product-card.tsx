export default function ProductCard() {
  return (
    <div className="group flex max-w-[193px] cursor-pointer flex-col items-center transition-all duration-300 ease-out hover:-translate-y-1">
      <img
        src="https://orderapp-app-static.burgerkingrus.ru/x256/catalog/images/group/74e6ddde00fbe9e8e554ba96a21592e5.png"
        alt="Ангус 4 Сыра"
        className="h-[193px] w-[193px] transition-transform duration-300 group-hover:scale-105"
      />

      <span className="pb-2 text-xl font-bold">Ангус 4 Сыра</span>

      <span className="w-36 rounded-4xl bg-muted px-4 py-2 text-center text-lg transition-colors duration-300 group-hover:bg-foreground group-hover:text-background">
        2608 AMD
      </span>
    </div>
  )
}
