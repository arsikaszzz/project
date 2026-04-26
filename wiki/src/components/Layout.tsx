import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Menu, Sparkles, X } from "lucide-react";
import { Sidebar } from "./Sidebar";

export function Layout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <div className="cosmic-bg" aria-hidden />
      <div className="stardust" aria-hidden />

      <header className="mobile-bar">
        <div className="brand">
          <Sparkles size={18} />
          <span>Хроники</span>
        </div>
        <button
          className="icon-btn"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {open && <div className="scrim" onClick={closeMenu} />}

      <div className="app-shell">
        <Sidebar open={open} onNavigate={closeMenu} />
        <main className="main-area">
          <Outlet />
        </main>
      </div>
    </>
  );
}
