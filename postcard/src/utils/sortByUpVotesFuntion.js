/**
 * @author Hammad Ali
 * @param {object} a 
 * @param {object} b 
 * @returns Array
 * 
 * it will sort elems in Array by up votes.
 */

  
  
  const sortByVotesFunction = (a, b) => {
    let votesA = a.upVotes;
    let votesB = b.upVotes;
    return votesA < votesB ? 1 : -1;
  };

  export default sortByVotesFunction