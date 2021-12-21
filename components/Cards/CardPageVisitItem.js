export default function CardPageVisitItem({ data }) {
  return (
    <>
      <tbody>
        {data.map((event) => (
          <tr key={event.id}>
            <th className="w-auto p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
              {event.attributes.name}
            </th>
            <td className="p-4 px-6 text-xs truncate align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
              {event.attributes.municipality}
            </td>
            <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
              {event.attributes.forces}
            </td>
            <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
              {event.attributes.location}
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
}
