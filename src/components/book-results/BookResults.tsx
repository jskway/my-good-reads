import React from "react";

const BookResults = (
  { allAvailableBooks }: { allAvailableBooks: Object[] | [] }
) => {
  return (
      <pre>
        {
          JSON.stringify(allAvailableBooks, null, 4)
        }
      </pre>
  )
}

export default BookResults;
