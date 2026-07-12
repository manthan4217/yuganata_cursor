import { motion } from "framer-motion"
import {
  ShoppingCart,
  TrendingUp,
  Users,
  Clock,
  IndianRupee,
  Bell,
  Search,
  MoreHorizontal,
} from "lucide-react"

interface DashboardMockupProps {
  view: string
}

const stats = [
  { label: "Today's Revenue", value: "₹1,24,580", change: "+12.5%", icon: IndianRupee },
  { label: "Orders", value: "186", change: "+8.2%", icon: ShoppingCart },
  { label: "Avg. Turn Time", value: "24 min", change: "-3 min", icon: Clock },
  { label: "Guests Served", value: "412", change: "+15%", icon: Users },
]

const orders = [
  { table: "T-12", items: "Butter Chicken, Naan x2", status: "preparing", time: "4 min" },
  { table: "T-05", items: "Paneer Tikka, Dal Makhani", status: "ready", time: "12 min" },
  { table: "T-08", items: "Biryani, Raita, Gulab Jamun", status: "served", time: "28 min" },
  { table: "T-03", items: "Dosa x2, Filter Coffee", status: "preparing", time: "2 min" },
]

const kitchenOrders = [
  { id: "#1847", table: "T-12", items: ["Butter Chicken", "Naan x2", "Raita"], priority: "high", time: "4:32" },
  { id: "#1848", table: "T-03", items: ["Masala Dosa x2"], priority: "normal", time: "4:35" },
  { id: "#1849", table: "T-15", items: ["Thali Special", "Lassi"], priority: "normal", time: "4:38" },
]

const tables = [
  { id: "T-01", seats: 4, status: "occupied", guests: 3 },
  { id: "T-02", seats: 2, status: "available" },
  { id: "T-03", seats: 4, status: "occupied", guests: 2 },
  { id: "T-04", seats: 6, status: "reserved" },
  { id: "T-05", seats: 4, status: "occupied", guests: 4 },
  { id: "T-06", seats: 2, status: "available" },
  { id: "T-07", seats: 8, status: "occupied", guests: 6 },
  { id: "T-08", seats: 4, status: "billing", guests: 4 },
]

const inventory = [
  { item: "Basmati Rice", stock: "24 kg", status: "good", level: 80 },
  { item: "Paneer", stock: "3.2 kg", status: "low", level: 25 },
  { item: "Tomatoes", stock: "8 kg", status: "good", level: 65 },
  { item: "Chicken", stock: "12 kg", status: "good", level: 70 },
  { item: "Cooking Oil", stock: "2 L", status: "critical", level: 12 },
]

function MockupShell({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="glass glow-saffron overflow-hidden rounded-2xl">
      <div className="flex items-center justify-between border-b border-white/5 px-5 py-3 light:border-zinc-200">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/60" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
            <div className="h-3 w-3 rounded-full bg-green-500/60" />
          </div>
          <span className="text-xs font-medium text-muted light:text-zinc-500">
            AthithyaOS — {title}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Search className="h-3.5 w-3.5 text-muted-foreground" />
          <Bell className="h-3.5 w-3.5 text-muted-foreground" />
          <MoreHorizontal className="h-3.5 w-3.5 text-muted-foreground" />
        </div>
      </div>
      <div className="p-5 md:p-6">{children}</div>
    </div>
  )
}

function DashboardView() {
  return (
    <MockupShell title="Owner Dashboard">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-white/5 bg-void-elevated p-4 light:border-zinc-200 light:bg-zinc-50"
          >
            <div className="flex items-center justify-between">
              <stat.icon className="h-4 w-4 text-saffron" />
              <span className="text-xs font-medium text-emerald">{stat.change}</span>
            </div>
            <p className="mt-3 font-display text-2xl font-semibold text-white light:text-zinc-900">
              {stat.value}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-white/5 bg-void-elevated p-4 lg:col-span-2 light:border-zinc-200 light:bg-zinc-50">
          <div className="mb-4 flex items-center justify-between">
            <h4 className="text-sm font-medium text-white light:text-zinc-900">Revenue Trend</h4>
            <TrendingUp className="h-4 w-4 text-emerald" />
          </div>
          <div className="flex h-32 items-end gap-2">
            {[40, 55, 45, 70, 60, 85, 75, 90, 80, 95, 88, 100].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="flex-1 rounded-t-md bg-linear-to-t from-saffron/60 to-saffron/20"
              />
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-white/5 bg-void-elevated p-4 light:border-zinc-200 light:bg-zinc-50">
          <h4 className="mb-3 text-sm font-medium text-white light:text-zinc-900">AI Insights</h4>
          <div className="space-y-3">
            <div className="rounded-lg bg-emerald/10 p-3 text-xs text-emerald">
              Butter Chicken orders up 23% — consider increasing prep stock
            </div>
            <div className="rounded-lg bg-saffron/10 p-3 text-xs text-saffron-light">
              Peak hours: 7–9 PM. Staff 2 extra servers tonight
            </div>
            <div className="rounded-lg bg-royal/10 p-3 text-xs text-blue-300">
              Table T-08 ready for billing — ₹2,840 pending
            </div>
          </div>
        </div>
      </div>
    </MockupShell>
  )
}

function OrdersView() {
  return (
    <MockupShell title="Order Management">
      <div className="space-y-3">
        {orders.map((order) => (
          <div
            key={order.table}
            className="flex items-center justify-between rounded-xl border border-white/5 bg-void-elevated p-4 light:border-zinc-200 light:bg-zinc-50"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-saffron/10 font-display text-sm font-bold text-saffron">
                {order.table}
              </div>
              <div>
                <p className="text-sm font-medium text-white light:text-zinc-900">{order.items}</p>
                <p className="text-xs text-muted-foreground">{order.time} ago</p>
              </div>
            </div>
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                order.status === "ready"
                  ? "bg-emerald/10 text-emerald"
                  : order.status === "preparing"
                    ? "bg-saffron/10 text-saffron-light"
                    : "bg-white/5 text-muted"
              }`}
            >
              {order.status}
            </span>
          </div>
        ))}
      </div>
    </MockupShell>
  )
}

function KitchenView() {
  return (
    <MockupShell title="Kitchen Display">
      <div className="grid gap-4 md:grid-cols-3">
        {kitchenOrders.map((order) => (
          <div
            key={order.id}
            className={`rounded-xl border p-4 ${
              order.priority === "high"
                ? "border-saffron/30 bg-saffron/5"
                : "border-white/5 bg-void-elevated light:border-zinc-200 light:bg-zinc-50"
            }`}
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="font-display text-lg font-bold text-white light:text-zinc-900">
                {order.table}
              </span>
              <span className="text-xs text-muted-foreground">{order.time}</span>
            </div>
            <ul className="space-y-1.5">
              {order.items.map((item) => (
                <li key={item} className="text-sm text-muted light:text-zinc-600">
                  • {item}
                </li>
              ))}
            </ul>
            {order.priority === "high" && (
              <span className="mt-3 inline-block rounded-full bg-saffron/20 px-2 py-0.5 text-[10px] font-medium text-saffron uppercase">
                Priority
              </span>
            )}
          </div>
        ))}
      </div>
    </MockupShell>
  )
}

function AnalyticsView() {
  return (
    <MockupShell title="Business Analytics">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-white/5 bg-void-elevated p-5 light:border-zinc-200 light:bg-zinc-50">
          <h4 className="mb-4 text-sm font-medium text-white light:text-zinc-900">Top Items</h4>
          {[
            { name: "Butter Chicken", orders: 48, pct: 92 },
            { name: "Paneer Tikka", orders: 36, pct: 72 },
            { name: "Biryani", orders: 31, pct: 62 },
            { name: "Masala Dosa", orders: 28, pct: 56 },
          ].map((item) => (
            <div key={item.name} className="mb-3">
              <div className="mb-1 flex justify-between text-xs">
                <span className="text-muted light:text-zinc-600">{item.name}</span>
                <span className="text-white light:text-zinc-900">{item.orders}</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/5 light:bg-zinc-200">
                <div
                  className="h-full rounded-full bg-saffron/60"
                  style={{ width: `${item.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-white/5 bg-void-elevated p-5 light:border-zinc-200 light:bg-zinc-50">
          <h4 className="mb-4 text-sm font-medium text-white light:text-zinc-900">Hourly Breakdown</h4>
          <div className="flex h-40 items-end gap-1.5">
            {[20, 35, 50, 40, 30, 45, 80, 95, 100, 85, 60, 40, 55, 70].map((h, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1">
                <div
                  className="w-full rounded-t bg-royal/40"
                  style={{ height: `${h}%` }}
                />
                <span className="text-[8px] text-muted-foreground">
                  {i + 10 > 12 ? i - 2 : i + 10}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockupShell>
  )
}

function InventoryView() {
  return (
    <MockupShell title="Inventory Management">
      <div className="space-y-3">
        {inventory.map((item) => (
          <div
            key={item.item}
            className="flex items-center justify-between rounded-xl border border-white/5 bg-void-elevated p-4 light:border-zinc-200 light:bg-zinc-50"
          >
            <div>
              <p className="text-sm font-medium text-white light:text-zinc-900">{item.item}</p>
              <p className="text-xs text-muted-foreground">{item.stock} in stock</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-1.5 w-20 rounded-full bg-white/5 light:bg-zinc-200">
                <div
                  className={`h-full rounded-full ${
                    item.status === "critical"
                      ? "bg-red-500"
                      : item.status === "low"
                        ? "bg-saffron"
                        : "bg-emerald"
                  }`}
                  style={{ width: `${item.level}%` }}
                />
              </div>
              <span
                className={`text-xs font-medium ${
                  item.status === "critical"
                    ? "text-red-400"
                    : item.status === "low"
                      ? "text-saffron"
                      : "text-emerald"
                }`}
              >
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </MockupShell>
  )
}

function TablesView() {
  const statusColors: Record<string, string> = {
    available: "border-emerald/30 bg-emerald/5",
    occupied: "border-saffron/30 bg-saffron/5",
    reserved: "border-royal/30 bg-royal/5",
    billing: "border-yellow-500/30 bg-yellow-500/5",
  }

  return (
    <MockupShell title="Table Layout">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {tables.map((table) => (
          <div
            key={table.id}
            className={`rounded-xl border p-4 text-center transition-all ${statusColors[table.status]}`}
          >
            <p className="font-display text-lg font-bold text-white light:text-zinc-900">
              {table.id}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {table.seats} seats
              {table.guests ? ` · ${table.guests} guests` : ""}
            </p>
            <span className="mt-2 inline-block text-[10px] font-medium tracking-wider text-muted uppercase">
              {table.status}
            </span>
          </div>
        ))}
      </div>
    </MockupShell>
  )
}

const viewMap: Record<string, React.ComponentType> = {
  dashboard: DashboardView,
  orders: OrdersView,
  kitchen: KitchenView,
  analytics: AnalyticsView,
  inventory: InventoryView,
  tables: TablesView,
}

export function DashboardMockup({ view }: DashboardMockupProps) {
  const ViewComponent = viewMap[view] || DashboardView

  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-3xl bg-saffron/5 blur-2xl" />
      <ViewComponent />
    </div>
  )
}
