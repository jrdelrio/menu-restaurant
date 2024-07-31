import "../styles/footer.css";

export const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-3 flex items-center justify-center">
        <span className="text-md text-gray-500 text-center dark:text-gray-400">
          Made with ❤️ by <a href="#">jrdelrio</a>
        </span>
      </div>
    </footer>
  );
};
