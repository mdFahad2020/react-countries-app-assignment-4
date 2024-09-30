export default function Footer() {
  return (
    <footer className="shadow dark:bg-[#2b3945]">
      <div className="w-full max-w-screen-xl mx-auto p-8">
        <span className="block text-sm text-gray-300 sm:text-center">
          Copyright {new Date().getFullYear()} ©{" "}
          <span className="font-bold">Fahad, Sirajganj</span> All Rights
          Reserved.
        </span>
      </div>
    </footer>
  );
}
