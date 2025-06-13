import { Clock } from "lucide-react"

interface RepairItemProps {
  name: string
  price: string
  duration: string
  isSpecial?: boolean
  note?: string
}

export default function RepairItem({ name, price, duration, isSpecial = false, note }: RepairItemProps) {
  return (
    <div className={`repair-item ${isSpecial ? "liquid-damage" : ""}`}>
      <div className="flex flex-col gap-4">
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 mb-2">
            <h3 className="font-semibold">{name}</h3>
            {isSpecial && (
              <span className="service-badge px-2 py-1 text-xs rounded-full w-fit mt-1 sm:mt-0">Özel Hizmet</span>
            )}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-muted gap-2 sm:gap-0">
            <div className="flex items-center space-x-1">
              <span className="text-muted font-semibold">₺</span>
              <span>{price}₺</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>
          </div>

          {note && <p className="text-sm text-muted mt-2">{note}</p>}
        </div>
      </div>
    </div>
  )
}
