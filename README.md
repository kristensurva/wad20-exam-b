# WAD 2020 Exam: Project B

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### To run tests
```
npm test
```


# Setup

Fork this project!

Make sure that your newly created project is **private** 
and only **you and me** have access to it, otherwise tasks will not be graded.

To see how to change repository visibility to private 
and add collaborators click [here](https://docs.github.com/en/enterprise-server@2.21/github/administering-a-repository/setting-repository-visibility#making-a-repository-private-1) 
and [here](https://docs.github.com/en/free-pro-team@latest/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository)

My email and username on github is: `cotne.kekelia@yahoo.com` and `tsotnekekelia`

# Tasks
Modify [Transactions.spec.js](./tests/unit/Transactions.spec.js) to test the functionality 
of [Transactions.vue](./src/components/Transactions.vue) component, 
you need to create and pass some test data to this componetn in the test file

- Test that as many table rows are displayed as items in the array that are passed to `Transactions` component
- Test that `.income` and `.spending` classes are properly attached to the transaction 
with the appropriate `type`
- Test that final balance is correctly calculated

