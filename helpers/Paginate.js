module.exports.Paginate = (allItems, currentPage, pageBy) => {
  let totalNumber = allItems.count;
  let pages = [];
  for (let i = 1; i < ( +totalNumber / +pageBy )+1; i++) {
    pages.push(i);
  }

  // parseInt(totalNumber % parseInt(pageBy)) > 0
  //   ? pages.push((totalNumber / parseInt(pageBy, 10)) + 1)
  //   : "";



  return (admins = {
    data: allItems.rows,
    pages,
    currentPage: parseInt(currentPage),
    firstPage: 1,
    lastPage: pages.length,
  });
};

module.exports.PaginateRawQuery = (allUsers, currentPage, pageBy) => {
  let totalNumber = 0;
  try {
    totalNumber = allUsers[0].count
  } catch (e) {
  }


  let pages = [];
  for (let i = 1; i < ( +totalNumber / +pageBy )+1; i++) {
    pages.push(i);
  }

  return (admins = {
    data: allUsers,
    pages,
    currentPage: parseInt(currentPage),
    firstPage: 1,
    lastPage: pages.length,
  });
};
