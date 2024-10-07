function superbowlWin(record) {
    // Use the find method to locate the object with a win (result: "W")
    const win = record.find(item => item.result === "W");
    // Return the year if a win is found, otherwise return undefined
    return win ? win.year : undefined;
  }
  
  // Example usage:
  const record = [
    { year: "2015", result: "W" },  // The win (case-sensitive "W")
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
  ];
  
  console.log(superbowlWin(record));  // Output: "2015"
  