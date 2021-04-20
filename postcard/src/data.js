export default [
  {
    title: "E2e Testing Code?",
    upVotes: 15,
    published_on: "2021-04-20T06:29:16.809Z",
    body: `During the test, the cy.get('.todo-list li') command quickly found the rendered <li> item - and that item was the first and only "todo A" item. Our application was waiting 100ms before appending the second item "todo B" to the list. By the time the second item was added, Cypress had already "moved on", working only with the first <li> element. It only searched for <label> inside the first <li> element, completely ignoring the newly created 2nd item.

            To confirm this, let's remove the artificial delay to see what's happening in the passing test.`,
  },
  {
    title: "What is Twitter?",
    upVotes: 29,
    published_on: "2021-04-20T06:24:06.403Z",
    body: `Twitter is a 'microblogging' system that allows you to send and receive
            short posts called tweets.Tweets can be up to 140 characters long and
            can include links to relevant websites and resources.Twitter users
            follow other users.If you follow someone you can see their tweets in
            your twitter 'timeline'.You can choose to follow people and
            organisations with similar academic and personal interests to you.You
            can create your own tweets or you can retweet information that has been
            tweeted by others.Retweeting means that information can be shared
            quickly and efficiently with a large number of people.`,
  },
  {
    title: "What should Tweet about",
    upVotes: 5,
    published_on: "2021-04-20T06:30:35.570Z",
    body: `The type of information you tweet can depend on whether you are tweeting as an individual or as an organisation, project or group.

            If you have a personal Twitter account you may want to mix tweets about your research with tweets about other things that are of interest to you, for example hobbies, news stories and general observations.Insights into non- academic aspects of your life can help make you an interesting person to follow. 
            
            If you are tweeting on behalf of an organisation, project or group then you may choose to only send research - related tweets.Twitter is a relatively informal communications tool so don't be afraid to embrace a personal, friendly and humorous approach to tweeting. `,
  },
];
