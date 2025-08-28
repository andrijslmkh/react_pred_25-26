import DarkMode from './DarkMode';

function App() {
  return (
    <div className="bg-[#eee] dark:bg-[#00141e]">
      <DarkMode />
      <div className="container m-auto h-full">
        <div className="relative overflow-x-auto bg-white p-4 shadow-md sm:rounded-lg dark:bg-gray-800">
          <table className="w-full text-center text-sm rtl:text-right">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
              <tr className="border-t border-b border-gray-300 dark:border-gray-700">
                <th
                  scope="col"
                  className="border-r border-l border-gray-300 px-6 py-3 dark:border-gray-700 dark:bg-gray-800"
                >
                  pred
                </th>
                <th
                  scope="col"
                  className="border-r border-gray-300 px-6 py-3 dark:border-gray-700 dark:bg-gray-800"
                >
                  №
                </th>
                <th
                  scope="col"
                  className="border-r border-gray-300 px-6 py-3 text-left dark:border-gray-700 dark:bg-gray-800"
                >
                  Team name
                </th>
                <th
                  scope="col"
                  className="border-r border-gray-300 px-6 py-3 text-center dark:border-gray-700 dark:bg-gray-800"
                >
                  G
                </th>
                <th
                  scope="col"
                  className="border-r border-gray-300 px-6 py-3 dark:border-gray-700 dark:bg-gray-800"
                >
                  W
                </th>
                <th
                  scope="col"
                  className="border-r border-gray-300 px-6 py-3 dark:border-gray-700 dark:bg-gray-800"
                >
                  D
                </th>
                <th
                  scope="col"
                  className="border-r border-gray-300 px-6 py-3 dark:border-gray-700 dark:bg-gray-800"
                >
                  L
                </th>
                <th
                  scope="col"
                  className="border-r border-gray-300 px-6 py-3 dark:border-gray-700 dark:bg-gray-800"
                >
                  P
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#eee] dark:bg-[#00141e]">
              <tr className="border-b border-gray-300 text-center font-medium text-gray-700 dark:border-gray-700 dark:bg-transparent dark:text-gray-400">
                <th
                  scope="row"
                  className="whitespace-wrap border-r border-l border-gray-300 px-6 py-4 dark:border-gray-700"
                >
                  logo
                </th>
                <td className="border-r border-gray-300 px-6 py-4 dark:border-gray-700">
                  1
                </td>
                <td className="whitespace-wrap border-r border-gray-300 px-6 py-4 text-left dark:border-gray-700">
                  <img
                    src="https://img.uefa.com/imgml/TP/teams/logos/70x70/52682.png"
                    alt=""
                    className="mr-2 inline h-6 w-6"
                  />
                  Manchester United FC
                </td>
                <td className="border-r border-gray-300 px-6 py-4 dark:border-gray-700">
                  1
                </td>
                <td className="border-r border-gray-300 px-6 py-4 dark:border-gray-700">
                  2
                </td>
                <td className="border-r border-gray-300 px-6 py-4 dark:border-gray-700">
                  3
                </td>
                <td className="border-r border-gray-300 px-6 py-4 dark:border-gray-700">
                  4
                </td>
                <td className="border-r border-gray-300 px-6 py-4 dark:border-gray-700">
                  5
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
