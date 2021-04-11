# caps

- [Events](https://github.com/RubaBanat/caps/tree/events)
- [Pull-Request](https://github.com/RubaBanat/caps/pull/1)

---

# Feature requirement

- setup a system of events and handlers, with the intent being to change out the eventing system 

- The task is “delivering a package”.

- As a vendor : 
   -alert the system when I have a package to be picked up
   - to be notified when there is a package to be delivered
   - to alert the system when I have picked up a package and it is in transit
   -  to alert the system when a package has been delivered
   - to be notified when my package has been delivered

- As a developer
   - to use industry standards for managing the state of each package
   - I want to create an event driven system so that I can write code that happens in response to events, in real time


---

# workflow

`First:`

- Deploy to Events

- Complete an ACP on your dev branch.

- Go immediately to the repository on GitHub and open the actions tab

- You should see your tests running

- If they were passing on your local machine, they’ll also pass here


`Second:`

- Go to your repository on GitHub

- Open a pull request from dev to main

- If your tests are passing, you will be able to merge this branch

- Once you merge, the tests will run again using GitHub actions

- Once the tests pass, Heroku will deploy your “main” branch to your “production” app!

- When that process completes, open your app in the browser to prove it.

---

# THE END


