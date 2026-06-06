export function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black relative z-10">
      <div className="container mx-auto text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">&copy; {new Date().getFullYear()} Mohammad Iqbal Jaffar</p>
      </div>
    </footer>
  );
}
