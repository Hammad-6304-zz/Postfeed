/**
 * @author Hammad Ali
 * @param {object} a 
 * @param {object} b 
 * @returns Array
 * 
 * it will sort elems in Array by date.
 */

const sortByDateFunction = (a, b) => {
    let dateA = new Date(a.published_on).getTime();
    let dateB = new Date(b.published_on).getTime();
    console.log(a, b);
    return dateA < dateB ? 1 : -1;
  };

  export default sortByDateFunction