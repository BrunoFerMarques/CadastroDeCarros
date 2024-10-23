// pages/index.js
export default function tablecars() {
    return (
      <div className="container mx-auto px-4 py-8">
        <table className="min-w-full border-collapse block md:table">
          <thead className="block md:table-header-group">
            <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative ">
              <th className="bg-gray-300 p-2 text-gray-600 font-bold md:border md:border-grey-500 text-left block md:table-cell">Header 1</th>
              <th className="bg-gray-300 p-2 text-gray-600 font-bold md:border md:border-grey-500 text-left block md:table-cell">Header 2</th>
              <th className="bg-gray-300 p-2 text-gray-600 font-bold md:border md:border-grey-500 text-left block md:table-cell">Header 3</th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            <tr className="bg-gray-200 border border-grey-500 md:border-none block md:table-row">
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">Row 1, Cell 1</td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">Row 1, Cell 2</td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">Row 1, Cell 3</td>
            </tr>
            <tr className="bg-gray-100 border border-grey-500 md:border-none block md:table-row">
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">Row 2, Cell 1</td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">Row 2, Cell 2</td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">Row 2, Cell 3</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  