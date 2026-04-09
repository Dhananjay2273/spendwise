import TopBar from "./TopBar.jsx";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-bgDark">
      <TopBar />
      <main className="flex-1 px-6 py-5">{children}</main>
    </div>
  );
}

export default Layout;
