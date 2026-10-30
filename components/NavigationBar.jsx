import Link from "next/link";
import {
  House,
  Languages,
  BookOpen,
  LayoutGrid,
  MessageSquarePlus,
  Settings,
} from "lucide-react";

const navigation = [
  { title: "Home", link: "/", icon: House },
  { title: "Translate", link: "/translate", icon: Languages },
  { title: "Dictionary", link: "/dictionary", icon: BookOpen },
  { title: "Categories", link: "/categories", icon: LayoutGrid },
  { title: "Contribute", link: "/contribute", icon: MessageSquarePlus },
  { title: "Settings", link: "/settings", icon: Settings },
];

export default function NavigationBar() {
  return (
    <nav
      aria-label="Main navigation"
      className="fixed bottom-0 left-0 z-50 w-full border-t border-stone-200 bg-white md:top-0 md:bottom-0 md:w-64 md:border-t-0 md:border-r"
    >
      <div className="hidden border-b border-stone-200 px-6 py-6 md:block">
        <Link href="/" className="text-2xl font-bold text-green-900">
          Kolomen<span className="text-orange-600">talk</span>
        </Link>
        <p className="mt-1 text-sm text-stone-500">
          Liberian language, explained.
        </p>
      </div>

      <ul className="flex justify-around px-1 py-2 md:flex-col md:gap-2 md:px-4 md:py-6">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.title} className="flex-1 md:flex-none">
              <Link
                href={item.link}
                aria-label={item.title}
                className="flex flex-col items-center gap-1 rounded-lg px-1 py-2 text-xs text-stone-600 transition-colors hover:bg-green-50 hover:text-green-900 md:flex-row md:gap-3 md:px-4 md:py-3 md:text-sm"
              >
                <Icon size={20}/>
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
